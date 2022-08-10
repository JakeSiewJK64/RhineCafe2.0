import 'package:app/components/achievements/achievements.dart';
import 'package:app/components/pages/experience/experience_component.dart';
import 'package:app/components/pages/home/homepage.dart';
import 'package:flutter/material.dart';

class AppComponent extends StatefulWidget {
  const AppComponent({Key? key}) : super(key: key);

  @override
  State<AppComponent> createState() => _AppComponentState();
}

class _AppComponentState extends State<AppComponent> {
  int _selectedIndex = 0;

  final List screens = const [
    MyHomePage(),
    ExperienceComponent(),
    AchievementsComponent()
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  static const List<BottomNavigationBarItem> _routes = [
    BottomNavigationBarItem(
      icon: Icon(Icons.home),
      label: 'Home',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.local_parking),
      label: 'Experience',
    ),
    BottomNavigationBarItem(
      icon: Icon(Icons.account_circle),
      label: 'Achievements',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: _routes,
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}
