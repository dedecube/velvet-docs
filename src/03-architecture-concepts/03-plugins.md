---
title: Plugins
---

# Plugins

Plugins in Velvet allow you to modularize your application's functionality by encapsulating services and configuration into discrete units. By extending the `VelvetPlugin` class, you can register and boot plugins to integrate them seamlessly with the Velvet framework.

## Why Plugins?

Plugins provide a powerful way to extend and manage your application's features and services. They allow you to organize code into manageable components, enhancing modularity and maintainability. Each plugin can handle its own setup and initialization logic, ensuring that your application remains flexible and scalable.

## Creating a Plugin

To create a plugin, extend the `VelvetPlugin` class and implement the `register` and `boot` methods. The `register` method is called to configure the plugin, while the `boot` method is invoked after all plugins have been registered. Here’s a simple example:

```dart
import 'dart:async';

import 'package:velvet_framework/velvet_framework.dart';

class MyPlugin extends VelvetPlugin {
  @override
  FutureOr<void> register() {
    // Register services or configurations here
    print('MyPlugin registered');
  }

  @override
  FutureOr<void> boot() {
    // Initialize or configure services here
    print('MyPlugin booted');
  }
}
```

## Plugin Startup

During application startup, Velvet first calls the `register` method of each plugin to set up the necessary services and configurations. Once all plugins are registered, Velvet then calls the `boot` method for each plugin. This ensures that the plugins are fully initialized and ready to use before the application starts interacting with them.

## Events

Velvet provides several events related to plugin lifecycle management. You can listen to these events to perform actions at different stages of plugin registration and booting. Here’s a list of available events:

- `VelvetPluginManagerBeforeRunRegister`
- `VelvetPluginManagerAfterRunRegister`
- `VelvetPluginManagerBeforeRunBoot`
- `VelvetPluginManagerAfterRunBoot`
- `VelvetPluginBeforeRegister`
- `VelvetPluginAfterRegister`
- `VelvetPluginBeforeBoot`
- `VelvetPluginAfterBoot`

To listen to an event, use the `listen` function. For example:

```dart
listen<VelvetPluginManagerBeforeRunRegister>((event) {
  logger().info('VelvetPluginManagerBeforeRunRegister');
});
```

## Observer

In addition to the event-based approach, you can use observers to track plugin lifecycle events. Observers provide a more centralized way to handle events and can be customized to monitor specific actions. 

For example, you can create a global observer for the plugin manager:

```dart
import 'package:velvet_framework/velvet_framework.dart';

class PluginManagerObserver extends VelvetPluginManagerObserver {
  @override
  void afterBoot() {
    logger().info('VelvetPluginManager | Plugins booted');
  }

  @override
  void afterRegister() {
    logger().info('VelvetPluginManager | Plugins registered');
  }

  @override
  void beforeBoot() {
    logger().info('VelvetPluginManager | Booting plugins');
  }

  @override
  void beforeRegister() {
    logger().info('VelvetPluginManager | Registering plugins');
  }
}
```

Or, create specific observers for individual plugins:

```dart
import 'package:velvet_framework/velvet_framework.dart';

class PluginObserver extends VelvetPluginObserver {
  @override
  void beforeBoot(VelvetPlugin plugin) {
    logger().info('${_name(plugin)} | Booting plugin...');
  }

  @override
  void afterBoot(VelvetPlugin plugin) {
    logger().info('${_name(plugin)} | Plugin booted');
  }

  @override
  void beforeRegister(VelvetPlugin plugin) {
    logger().info('${_name(plugin)} | Registering plugin...');
  }

  @override
  void afterRegister(VelvetPlugin plugin) {
    logger().info('${_name(plugin)} | Plugin registered');
  }

  String _name(VelvetPlugin plugin) {
    return plugin.toString().after('Instance of').between('\'', '\'');
  }
}
```

Then register the observer in your main function:

```dart
import 'package:velvet_basic_app/core/observers/plugin_manager_observer.dart';
import 'package:velvet_basic_app/core/observers/plugin_observer.dart';
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) { // [!code focus]
      pluginManager // [!code focus]
        ..addManagerObserver(PluginManagerObserver()) // [!code focus]
        ..addPluginObserver(PluginObserver()); // [!code focus]
    }) // [!code focus]
    ..run();
}
```

By using observers, you gain fine-grained control over plugin lifecycle events and can tailor the logging or handling of these events to suit your needs.