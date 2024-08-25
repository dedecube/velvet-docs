---
title: Kernel
---

# Kernel

[[toc]]

When you `createVelvetApp`, you are creating a `VelvetKernel` instance. The kernel is the heart of your application. It is responsible for managing the application lifecycle, booting plugins, and handling errors.

## Core Concepts

On initialization, the kernel sets up the `container` and registers some core services required for the application to function like the manager,  `ConfigManager` and `PluginManager`, and some classes like the `Logger` and `EventBus`.

Also register it self as as singleton in the container.

## Customize your velvet app

The entire configuration of your Velvet app is done in the main.dart file chaining the methods of the `VelvetKernel` instance and writing some callbacks.

This is the first look of a Velvet app:

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp().run();
}
```

#### Add a plugin

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) {
      pluginManager.add(MyPlugin());
    })
    ..run();
}
```

#### Add a plugin manager observer

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) { // [!code focus]
      pluginManager // [!code focus] 
        ..addManagerObserver(MyPluginManagerObserver()) // [!code focus]
    }) // [!code focus]
    ..run();
}
```

#### Add a plugin observer

```dart

import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) { // [!code focus]
      pluginManager // [!code focus]
        ..addPluginObserver(MyPluginObserver()) // [!code focus]
    }) // [!code focus]
    ..run();
}
```

#### Add a configuration

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withConfig((configManager) { // [!code focus]
      configManager.register<MyConfigContract>(MyConfig()); // [!code focus]
    }) // [!code focus]
    ..run();
}
```

#### Add a register callback

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withRegister((container) { // [!code focus]
      container.register<MyServiceContract>((container) => MyService()); // [!code focus]
    }) // [!code focus]
    ..run();
}
```

#### Add a boot callback

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..withBoot((container) { // [!code focus]
      final myService = container.get<MyServiceContract>(); // [!code focus]
      myService.boot(); // [!code focus]
    }) // [!code focus]
    ..run();
}
```

#### Add riverpod override

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..addRiverpodOverride(exampleProvider.overrideWith((ref) => 'Hello, Velvet!')) // [!code focus]
    ..run();
}
```

#### Add riverpod observer

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..addRiverpodObserver(MyRiverpodObserver()) // [!code focus]
    ..run();
}
```

#### Override the App Widget

::: warning
This feature is not yet available.
:::


#### Override the Error Widget

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..usingError(AppKernelErrorWidget()) // [!code focus]
    ..run();
}
```

#### Override the Loading Widget

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..usingLoading(AppKernelErrorWidget()) // [!code focus]
    ..run();
}
```

#### Opt out from the env loading

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..optOutFromEnvLoading() // [!code focus]
    ..run();
}
```

## Extending the Kernel

To provide more methods to the kernel, you can create extensions on `VelvetKernelContract` and use it in the main function.

Creating an extension could be useful to clean up the main function and make it more readable.

This helps to keep the main function clean and easy to read.

```dart
extension MyPluginInstaller on VelvetKernelContract {
  void installMyPlugin() {
    withPlugins((pluginManager) {
      pluginManager.add(MyPlugin());
    });
  }
}
```

Then, use it in the main function:

```dart
void main() {
  createVelvetApp()
    ..installMyPlugin() // [!code focus]
    ..run();
}
```