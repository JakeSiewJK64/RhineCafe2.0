import 'dart:developer';

import 'package:flutter/material.dart';

class ExperienceComponent extends StatefulWidget {
  const ExperienceComponent({Key? key}) : super(key: key);

  @override
  State<ExperienceComponent> createState() => _ExperienceComponentState();
}

class _ExperienceComponentState extends State<ExperienceComponent> {
  late List<String> tools = ["sample tool"];
  late List<String> languages = ["sample language"];

  @override
  Widget build(BuildContext context) {
    return Container(
        child: ListView(
      children: [
        Column(
          children: [
            const Padding(
              padding: EdgeInsets.all(10),
              child: Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "New Experience",
                  style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
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
                  for (final language in languages)
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                      child: TextFormField(
                        keyboardType: TextInputType.datetime,
                        cursorColor: const Color(0xfff1c40f),
                        decoration: const InputDecoration(
                          focusColor: Color(0xfff1c40f),
                          border: OutlineInputBorder(),
                          hintText: "Language",
                        ),
                        onChanged: (value) => {},
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
                  onPressed: () {},
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
    ));
  }
}
