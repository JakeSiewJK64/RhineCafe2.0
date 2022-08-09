import 'package:flutter/foundation.dart';

import 'package:app/components/services/auth_services.dart';
import 'package:app/components/utils/string_extensions.dart';
import 'package:flutter/material.dart';

class LoginComponent extends StatefulWidget {
  const LoginComponent({Key? key}) : super(key: key);

  @override
  State<LoginComponent> createState() => _LoginComponentState();
}

class _LoginComponentState extends State<LoginComponent> {
  late String? username;
  late String? password;

  late SnackBar _snackBar;

  showSnackbar(String message) {
    _snackBar = SnackBar(
        content: Text(message),
        duration: const Duration(seconds: 5),
        action: SnackBarAction(label: 'OK', onPressed: (() => {})));
    ScaffoldMessenger.of(context).showSnackBar(_snackBar);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
              child: TextFormField(
                cursorColor: const Color(0xfff1c40f),
                enableSuggestions: false,
                autocorrect: false,
                decoration: const InputDecoration(
                  focusColor: Color(0xfff1c40f),
                  border: OutlineInputBorder(),
                  hintText: "Enter Username",
                ),
                autovalidateMode: AutovalidateMode.onUserInteraction,
                onChanged: (value) => username = value,
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
              child: TextFormField(
                cursorColor: const Color(0xfff1c40f),
                obscureText: true,
                enableSuggestions: false,
                autocorrect: false,
                decoration: const InputDecoration(
                  focusColor: Color(0xfff1c40f),
                  border: OutlineInputBorder(),
                  hintText: "Enter Password",
                ),
                autovalidateMode: AutovalidateMode.onUserInteraction,
                onChanged: (value) => password = value,
                validator: (value) {
                  if (!StringExtensions(value!).isValidPassword()) {
                    return "a minimum of 10 characters required!";
                  }
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(10),
              child: OutlinedButton.icon(
                style: TextButton.styleFrom(
                  padding: const EdgeInsets.all(16),
                  textStyle: const TextStyle(fontSize: 20),
                ),
                onPressed: () {
                  const AuthService()
                      .validateAndSave(username!, password!)
                      .then(
                        (value) => {
                          if (value.body.contains("jwtToken"))
                            {
                              Navigator.pushNamed(context, "/"),
                            }
                          else
                            {
                              showSnackbar(value.body.replaceAll("\"", "")),
                            }
                        },
                      );
                },
                icon: const Icon(
                  Icons.login,
                  size: 20.0,
                ),
                label: const Text('Login'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}