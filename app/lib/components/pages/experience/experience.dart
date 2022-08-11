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
                debugPrint("done"),
                debugPrint(experiences[0].toString())
              });
    }

    if (experiences.isEmpty) getExperience();

    return (Column(
      children: [
        for (var experience in experiences) Text(experience["CompanyName"])
      ],
    ));
  }
}
