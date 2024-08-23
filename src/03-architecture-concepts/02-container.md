---
title: Container
---

# Container

The Velvet framework includes an IoC (Inversion of Control) container implemented using the `get_it` package. This container helps manage and inject dependencies throughout your Flutter application, promoting modularity and ease of testing.

## Why IoC Container?

Using an IoC container simplifies dependency management by centralizing the creation and configuration of objects. It decouples the components of your application, making them easier to test and maintain. For best practices, we recommend using abstract classes (Contracts) for defining dependencies. This approach enhances flexibility and allows for easy substitution with mock implementations during testing.

## Registering

To register services or dependencies with the Velvet IoC container, utilize the globally exported `container` instance, which functions identically to the `get_it` package. You can register dependencies using `container.registerSingleton`, `container.registerFactory`, or other registration methods provided by `get_it`. Here’s an example of how to register a singleton service:

```dart
import 'package:velvet/velvet.dart';

void setupDependencies() {
  container.registerSingleton<MyService>(MyServiceImplementation());
}
```

## Resolving

Resolving dependencies from the Velvet IoC container is straightforward and mirrors the `get_it` package's functionality. Use the `container.get` method to retrieve instances of registered services. For example:

```dart
void someFunction() {
  final myService = container.get<MyService>();
  myService.performAction();
}
```

This method ensures you receive the exact instance registered, enabling dependency injection and promoting clean, manageable code.