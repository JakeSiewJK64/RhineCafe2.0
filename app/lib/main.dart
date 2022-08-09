import 'package:app/components/pages/authentication/login.dart';
import 'package:app/components/pages/home/homepage.dart';
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
        "/": (context) => const MyHomePage(),
        "/auth/authenticate": (context) => const LoginComponent(),
      },
    );
  }
}
