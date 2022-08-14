import 'dart:convert';
import 'dart:developer';
import 'dart:typed_data';
import 'package:app/components/services/experiences.service.dart';
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
  dynamic myExperience;

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

  fetchExperienceById(String id) async {
    if (!id.startsWith("newid")) {
      await const ExperienceService().getExperienceById(id).then(
            (value) => {
              setState(
                () => {
                  myExperience = json.decode(value.body),
                },
              ),
            },
          );
    }
  }

  getImageProp(String imageString) {
    if (imageString.startsWith(RegExp(r"http"))) {
      return Image.network(imageString, width: 200);
    }
    final UriData? data = Uri.parse(imageString).data;
    Uint8List? myImage = data?.contentAsBytes();
    return Image.memory(myImage!, width: 200);
  }

  @override
  Widget build(BuildContext context) {
    final arguments = (ModalRoute.of(context)?.settings.arguments);
    final String id = json.decode(arguments.toString())["id"];

    if (myExperience == null) {
      fetchExperienceById(id);
    }

    try {
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
                      id.isEmpty ? "New Experience" : "Edit Experience",
                      style: const TextStyle(
                          fontSize: 32, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    initialValue: myExperience["CompanyName"].toString(),
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
                  visible: myExperience["CompanyImage"].toString().isNotEmpty,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: getImageProp(myExperience["CompanyImage"]),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: TextFormField(
                    initialValue: myExperience["Description"].toString(),
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
                    initialValue: myExperience["Duration"].toString(),
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
                    initialValue: myExperience["StartDate"].toString(),
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
                    initialValue: myExperience["EndDate"].toString(),
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
                    initialValue: myExperience["Category"].toString(),
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
