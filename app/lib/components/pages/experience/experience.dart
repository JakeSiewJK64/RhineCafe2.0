import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:app/components/services/experiences.service.dart';

class ExperienceComponent extends StatefulWidget {
  const ExperienceComponent({Key? key}) : super(key: key);

  @override
  State<ExperienceComponent> createState() => _ExperienceComponentState();
}

class _ExperienceComponentState extends State<ExperienceComponent> {
  late List<dynamic> experiences = [];
  bool isLoading = true;

  @override
  Widget build(BuildContext context) {
    getExperience() {
      const ExperienceService()
          .getExperiences()
          .then(
            (value) => {
              setState(
                () => {
                  experiences = json.decode(value.body) as List<dynamic>,
                },
              ),
            },
          )
          .then((_) => {
                isLoading = false,
              });
    }

    if (experiences.isEmpty) getExperience();

    return (Column(
      children: [
        Align(
          alignment: Alignment.centerRight,
          child: Padding(
            padding: const EdgeInsets.all(10),
            child: OutlinedButton(
              onPressed: () => {
                Navigator.pushNamed(context, '/experience/details',
                    arguments: {"\"id\":${0}"}),
              },
              child: const Text("New Experience"),
            ),
          ),
        ),
        for (var experience in experiences)
          Card(
            elevation: 10,
            child: Column(
              children: [
                Align(
                  alignment: Alignment.centerLeft,
                  child: Padding(
                    padding: const EdgeInsets.all(5),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Container(
                          decoration: const BoxDecoration(color: Colors.black),
                          child: Padding(
                            padding: const EdgeInsets.all(5),
                            child: Text(
                              experience["CompanyName"],
                              style: const TextStyle(
                                  fontSize: 32,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white),
                            ),
                          ),
                        ),
                        OutlinedButton(
                          onPressed: () => {},
                          style: ButtonStyle(
                            foregroundColor:
                                MaterialStateProperty.resolveWith<Color?>(
                              (Set<MaterialState> states) {
                                return Colors
                                    .red; // Use the component's default.
                              },
                            ),
                          ),
                          child: const Icon(Icons.remove),
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: Image.network(
                    experience["CompanyImage"],
                    width: 200,
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: OutlinedButton(
                      onPressed: () => {},
                      child: const Text("Edit"),
                    ),
                  ),
                ),
              ],
            ),
          ),
      ],
    ));
  }
}
