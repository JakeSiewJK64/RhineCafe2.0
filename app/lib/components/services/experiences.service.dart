import 'package:app/components/services/endpoint.constant.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class ExperienceService extends StatelessWidget {
  const ExperienceService({Key? key}) : super(key: key);

  Future<http.Response> getExperiences() {
    return http.get(Uri.parse('$ENDPOINT/experience/getExperiences'));
  }

  Future<http.Response> getExperienceById(String id) {
    return http.get(Uri.parse('$ENDPOINT/experience/getExperienceById/$id'));
  }

  @override
  Widget build(BuildContext context) {
    return (Container());
  }
}
