---
title: Splash Plugin
---

# Splash Plugin

The splash plugin works with the `flutter_native_splash` package to maintain the splash screen visibility and remove only on first route push.

## Installation

To install the Splash plugin, run the following command:

```bash
flutter pub add splash_velvet_plugin
```

Update the `main.dart` file to include the plugin:

```dart
import 'package:splash_velvet_plugin/splash_velvet_plugin.dart';  // [!code focus]

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) {  // [!code focus]
        pluginManager.addPlugin(SplashVelvetPlugin()); // [!code focus]
    })  // [!code focus]
    ..run();
}
```

