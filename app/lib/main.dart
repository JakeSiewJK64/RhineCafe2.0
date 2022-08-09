import 'package:app/components/authentication/login.dart';
import 'package:app/components/homepage.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'RhineCafe2.0 Interface',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/auth/authenticate',
      routes: {
        "/auth/authenticate": (context) => const LoginComponent(),
        "/home": (context) => const MyHomePage(),
      },
    );
  }
}
