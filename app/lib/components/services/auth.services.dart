import 'dart:convert';
import 'package:app/components/services/endpoint.constant.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class AuthService extends StatelessWidget {
  const AuthService({Key? key}) : super(key: key);

  Future<http.Response> validateAndSave(String username, String password) {
    return http.post(
      Uri.parse('$ENDPOINT/auth/login'),
      headers: <String, String>{'Content-type': 'application/json'},
      body: jsonEncode(
        <String, String>{'email': username, 'password': password},
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold();
  }
}
