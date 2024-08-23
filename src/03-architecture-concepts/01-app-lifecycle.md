---
title: App Lifecycle
---

# App Lifecycle

When using a tool in the "real world", you naturally feel more confident when you understand how it operates. The same principle applies to mobile application development. The more you comprehend how your development framework functions, the more comfortable and effective you'll be in using it.

This document aims to provide you with a solid, high-level understanding of how the Velvet framework works for Flutter mobile applications. By familiarizing yourself with the core concepts and architecture of Velvet, the framework will seem less "magical," and you'll gain greater confidence in building your apps. If some terms or concepts are new to you, don't worry! Focus on grasping the overall picture, and your understanding will deepen as you delve into other parts of the documentation.

## The entry point of a Velvet app

In a Velvet app, the entry point is the `main` function in `main.dart`, just like in any Flutter app. However, unlike typical Flutter apps, the `main` function doesn't contain `runApp`, widgets, or initialization code for Firebase, Riverpod, etc. Instead, it's a simple but strong one-liner that seamlessly handles the app startup.

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp().run();
}
```

## Lifycycle of a Velvet app

### The `createVelvetApp` top-level function

When the `main` function is called, the `createVelvetApp` function is executed. This function creates an instance of the `VelvetKernel` class, which is the core of the Velvet framework. The `VelvetKernel` class is responsible for managing the lifecycle of the app and orchestrating the various parts of the framework. On initialization, the `VelvetKernel` setup the `container` and register some core services: the ConfigManager and the PluginManager.

### The `run` method

After the `VelvetKernel` instance is created, the `run` method is called. The first thing the `run` method does is the most important: it iterate over all the registered plugins and call the `register` method, which is responsible for registering the services and routes of the plugin. Then setup the Riverpod container and execute the `runApp` method from Flutter with a `VelvetApp` widget.

### The `VelvetApp` widget

The `KernelWidget` widget is the root widget of the app. It is responsible for executing the `bootstrap` of every plugin. The `bootstrap` method is the place where you can perform any initialization tasks that need to be done before the app starts. For example, you can load setup databases, initialize Firebase, or perform any other setup tasks. While the `bootstrap` method is running, the `VelvetApp` widget displays a loading screen.

## Routing
Once the `bootstrap` method is complete, the `VelvetApp` builds the main route.

Before to reach the first route, it may be necessary to perform some async tasks. For example, you may need to check if the user is authenticated before displaying the main route. The tasks will be performed and the app show still the loading screen.

When the first route is reached and built, the app fires a `HideLoadingWidgetEvent` and the loading screen will be unmounted.

The app is now ready to be used by the user.

## Error handling
The `KernelWidget` widget is also responsible for handling any errors that occur during the app's lifecycle. 