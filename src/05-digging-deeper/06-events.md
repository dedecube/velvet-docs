---
title: Events
---

# Events

## Introduction

Events are a way to communicate between different parts of your application. They are a way to decouple your code and make it more maintainable.

## Creating an Event

To create an event, you need to create a class that extends `VelvetEvent`. This class should have a constructor that takes the data you want to pass to the event.

```dart
import 'package:velvet_framework/velvet_framework.dart';

class ExampleEvent extends VelvetEvent {
  ExampleEvent(this.message);

  final String message;
}
```

## Dispatching an Event

To dispatch an event, you need to call use the `event` top-level function.

```dart
import 'package:velvet_framework/velvet_framework.dart';

event(ExampleEvent('Hello, World!'));
```

## Listen for an Event

To listen for an event, you need to call the `listen` method on the `event` top-level function.

The `listen` method returns a `StreamSubscription` object that you can use to cancel the subscription.

### Outside a Widget

```dart
import 'package:velvet_framework/velvet_framework.dart';

listen<ExampleEvent>((event) {
  print(event.message);
});

// or

final subscription = listen<ExampleEvent>((event) {
  print(event.message);
});

// to cancel the subscription
subscription.cancel();
```

### In a Widget

When listening for events in a widget, you should cancel the subscription when the widget is disposed.

Velvet provides a hook for listening events, the `useEventListener` hook.

```dart
import 'package:velvet_framework/velvet_framework.dart';

class ExampleWidget extends HookWidget {
  @override
  Widget build(BuildContext context) {
    useEventListener<ExampleEvent>((event) {
      print(event.message);
    });

    return Container();
  }
}
```

Using the hook it is not necessary to cancel the subscription, it is done automatically when the widget is disposed.

## Built-in Events

Velvet provides some built-in events that you can listen to or dispatch.

| Event Name                             | Triggered                                              |
|----------------------------------------|----------------------------------------------------------|
| `EnvReadEvent`                           | Event triggered when the environment is read.            |
| `VelvetPluginAfterBoot`                  | Event triggered after the Velvet plugin is booted.       |
| `VelvetPluginBeforeBoot`                 | Event triggered before the Velvet plugin is booted.      |
| `VelvetPluginBeforeRegister`             | Event triggered before the Velvet plugin is registered.  |
| `VelvetPluginAfterRegister`              | Event triggered after the Velvet plugin is registered.   |
| `VelvetPluginManagerAfterBoot`           | Event triggered after the Velvet plugin manager is booted.|
| `VelvetPluginManagerBeforeBoot`          | Event triggered before the Velvet plugin manager is booted.|
| `VelvetPluginManagerBeforeRegister`      | Event triggered before the Velvet plugin manager is registered. |
| `VelvetPluginManagerAfterRegister`       | Event triggered after the Velvet plugin manager is registered. |
| `HideLoadingEvent`                       | Event triggered when the loading screen is hidden.       |
| `LocaleLoadedFromOs`                     | Event triggered when the locale is loaded from the operating system. |
| `LocaleLoadedFromStore`                  | Event triggered when the locale is loaded from the store. |