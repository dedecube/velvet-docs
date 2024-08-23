---
title: Helpers
---

# Autoloading

::: info
Require code-generation to work.
You should run `flutter pub run build_runner build` to generate the autoloader files.
:::

In Velvet, you can use the `@VelvetAutoloader` annotation to load files automatically. This is useful for loading plugins or other files that need to be loaded automatically that, otherwise, would need to be imported manually and can be error-prone.

## Creating an Autoloader

Create a file named `lib/loaders/velvet_plugin_loader.velvet.dart` then add the following code:

```dart
import 'package:velvet_annotation/velvet_annotation.dart';
import 'package:velvet_framework/velvet_framework.dart';

import 'velvet_plugin_loader.velvet.dart';

@VelvetAutoloader(glob: 'lib/**/*_plugin.dart', type: VelvetPlugin)
List velvetPluginLoader() => $velvetPluginLoaderItems;
```

::: warning NOTE
The generated file `velvet_plugin_loader.velvet.dart` is a standalone file, not a `part` file, because we don't wont to add imports manually.
:::

The code generated will be:

```dart
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoloaderGenerator
// **************************************************************************

import 'package:your_project/plugins/example_plugin_one.dart';
import 'package:your_project/plugins/example_plugin_two.dart';
import 'package:your_project/plugins/example_plugin_three.dart';

List<VelvetPlugin> $velvetPluginLoaderItems = [
  ExamplePluginOne(),
  ExamplePluginTwo(),
  ExamplePluginThree(),
];
```

## Using the Autoloader

To use the autoloader, you can call the `velvetPluginLoader` function:

```dart
import 'package:your_project/loaders/velvet_plugin_loader.dart';

velvetPluginLoader().forEach((plugin) {
  logger().info('Loaded plugin: ${plugin.name}');
});
```

## Using factories

::: warning
Currently, the autoloader do not support factories, but you can use a factory function to create the instances. We are working on adding this feature to the autoloader.
:::

## Filtering files

::: warning
Currently, the autoloader do not support filtering files, but you can use a factory function to filter the instances. We are working on adding this feature to the autoloader.
:::