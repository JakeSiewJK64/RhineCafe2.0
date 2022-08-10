import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class ExperienceComponent extends StatefulWidget {
  const ExperienceComponent({Key? key}) : super(key: key);

  @override
  State<ExperienceComponent> createState() => _ExperienceComponentState();
}

class _ExperienceComponentState extends State<ExperienceComponent> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Text('Experience'),
    );
  }
}
