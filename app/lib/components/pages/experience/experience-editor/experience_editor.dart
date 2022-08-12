import 'dart:convert';
import 'dart:typed_data';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';

class ExperienceEditor extends StatefulWidget {
  const ExperienceEditor({Key? key}) : super(key: key);

  @override
  State<ExperienceEditor> createState() => _ExperienceEditorState();
}

class _ExperienceEditorState extends State<ExperienceEditor> {
  late List<String> tools = ["sample tool"];
  late List<String> languages = ["sample language"];
  late Uint8List image = Uint8List(0);

  Future<void> getImage() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles();
    if (result != null) {
      final imageBytes = result.files.single.bytes;
      final bytes = Uint8List.fromList(imageBytes!);
      final imageData = base64.encode(bytes);
      setState(
        () => {
          image = const Base64Decoder().convert(imageData),
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    try {
      final arguments = (ModalRoute.of(context)?.settings.arguments);
      final int id = json.decode(arguments.toString())["id"];

      return (Scaffold(
        body: ListView(
          children: [
            Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      id == 0 ? "New Experience" : "Edit Experience",
                      style: const TextStyle(
                          fontSize: 32, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    cursorColor: const Color(0xfff1c40f),
                    decoration: const InputDecoration(
                      focusColor: Color(0xfff1c40f),
                      border: OutlineInputBorder(),
                      hintText: "Company Name",
                    ),
                    onChanged: (value) => {},
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: OutlinedButton(
                      style: TextButton.styleFrom(
                        padding: const EdgeInsets.all(16),
                        textStyle: const TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        getImage();
                      },
                      child: const Text('Browse Image'),
                    ),
                  ),
                ),
                Visibility(
                  visible: image.isNotEmpty,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: Image.memory(image, width: 200),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    cursorColor: const Color(0xfff1c40f),
                    decoration: const InputDecoration(
                      focusColor: Color(0xfff1c40f),
                      border: OutlineInputBorder(),
                      hintText: "Description",
                    ),
                    onChanged: (value) => {},
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    keyboardType: TextInputType.number,
                    cursorColor: const Color(0xfff1c40f),
                    decoration: const InputDecoration(
                      focusColor: Color(0xfff1c40f),
                      border: OutlineInputBorder(),
                      hintText: "Duration (years)",
                    ),
                    onChanged: (value) => {},
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    keyboardType: TextInputType.datetime,
                    cursorColor: const Color(0xfff1c40f),
                    decoration: const InputDecoration(
                      focusColor: Color(0xfff1c40f),
                      border: OutlineInputBorder(),
                      hintText: "Start Date",
                    ),
                    onChanged: (value) => {},
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    keyboardType: TextInputType.datetime,
                    cursorColor: const Color(0xfff1c40f),
                    decoration: const InputDecoration(
                      focusColor: Color(0xfff1c40f),
                      border: OutlineInputBorder(),
                      hintText: "End Date",
                    ),
                    onChanged: (value) => {},
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    keyboardType: TextInputType.datetime,
                    cursorColor: const Color(0xfff1c40f),
                    decoration: const InputDecoration(
                      focusColor: Color(0xfff1c40f),
                      border: OutlineInputBorder(),
                      hintText: "Category",
                    ),
                    onChanged: (value) => {},
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: OutlinedButton.icon(
                      style: TextButton.styleFrom(
                        padding: const EdgeInsets.all(16),
                        textStyle: const TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        setState(() {
                          tools = [...tools, "new"];
                        });
                      },
                      icon: const Icon(
                        Icons.login,
                        size: 20.0,
                      ),
                      label: const Text('Add Tool'),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: Column(
                    children: [
                      for (final tool in tools)
                        Padding(
                          padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                          child: Row(
                            children: [
                              Flexible(
                                child: TextFormField(
                                  keyboardType: TextInputType.datetime,
                                  cursorColor: const Color(0xfff1c40f),
                                  decoration: const InputDecoration(
                                    focusColor: Color(0xfff1c40f),
                                    border: OutlineInputBorder(),
                                    hintText: "Tool",
                                  ),
                                  onChanged: (value) => {},
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.all(10),
                                child: OutlinedButton(
                                  style: TextButton.styleFrom(
                                    padding: const EdgeInsets.all(16),
                                    textStyle: const TextStyle(fontSize: 20),
                                  ),
                                  onPressed: () {
                                    setState(() {
                                      tools.removeAt(tools.indexOf(tool));
                                    });
                                  },
                                  child: const Icon(Icons.remove),
                                ),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: OutlinedButton.icon(
                      style: TextButton.styleFrom(
                        padding: const EdgeInsets.all(16),
                        textStyle: const TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        setState(() {
                          languages = [...languages, "new language"];
                        });
                      },
                      icon: const Icon(
                        Icons.login,
                        size: 20.0,
                      ),
                      label: const Text('Add Language'),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: Column(
                    children: [
                      for (var index = 0; index < languages.length; index++)
                        Padding(
                          padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                          child: Row(
                            children: <Widget>[
                              Flexible(
                                child: TextFormField(
                                  keyboardType: TextInputType.datetime,
                                  cursorColor: const Color(0xfff1c40f),
                                  decoration: const InputDecoration(
                                    focusColor: Color(0xfff1c40f),
                                    border: OutlineInputBorder(),
                                    hintText: "Language",
                                  ),
                                  onChanged: (value) => {
                                    setState(() => {languages[index] = value})
                                  },
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.all(10),
                                child: OutlinedButton(
                                  style: TextButton.styleFrom(
                                    padding: const EdgeInsets.all(16),
                                    textStyle: const TextStyle(fontSize: 20),
                                  ),
                                  onPressed: () {
                                    setState(() {
                                      languages.removeWhere((element) =>
                                          element == languages[index]);
                                      languages = [...languages];
                                      debugPrint(languages.toString());
                                    });
                                  },
                                  child: const Icon(Icons.remove),
                                ),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: OutlinedButton.icon(
                      style: TextButton.styleFrom(
                        padding: const EdgeInsets.all(16),
                        textStyle: const TextStyle(fontSize: 20),
                      ),
                      onPressed: () {
                        debugPrint(languages.toString());
                      },
                      icon: const Icon(
                        Icons.login,
                        size: 20.0,
                      ),
                      label: const Text('Add Experience'),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ));
    } catch (e) {
      return (const Scaffold(
        body: Text("error occured"),
      ));
    }
  }
}
