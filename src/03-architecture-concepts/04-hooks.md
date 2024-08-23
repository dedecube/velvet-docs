---
title: Hooks
---

# Hooks

In Velvet, hooks allow you to encapsulate reusable logic and manage state efficiently within your Flutter widgets. Implemented using the flutter_hooks package, hooks enable a functional approach to managing lifecycle events and state in a more declarative and modular manner.

## Why Hooks?
Hooks simplify the management of state and side effects in Flutter widgets, reducing boilerplate code and enhancing code readability. By using hooks, you can avoid deeply nested widget trees and make your stateful logic more reusable and composable. They offer a functional way to handle lifecycle events, state, and other effects without relying on traditional stateful widgets.

## Creating a Hook

A hook is a **top-level function** that uses existing hooks from the **flutter_hooks** package to manage state or side effects. 

::: tip What is a top-level function?
A top-level function is a function defined outside of a class or method. It is accessible globally within the file and can be called from anywhere in the code.
:::

Hooks are defined outside the widget tree and can be reused across multiple widgets. To create a custom hook, define a function that utilizes existing hooks from **flutter_hooks**. Custom hooks encapsulate specific pieces of logic that can be reused across different widgets.

Here’s an example of a simple custom hook that manages a counter:

```dart
import 'package:flutter_hooks/flutter_hooks.dart';

typedef UseCounterReturn = ({
  int count,
  void Function() increment
});

UseCounterReturn useCounter() {
  final count = useState(0);
  
  void increment() => count.value++;
  
  return (count: count, increment: increment);
}
```

## Using Hooks in Widgets

Once you have defined your custom hook, you can use it within a functional widget. Hooks are called inside the body of a widget and can be used to manage state or perform side effects. Here’s an example of using the useCounter hook in a widget:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class CounterWidget extends HookWidget {
  @override
  Widget build(BuildContext context) {
    final (:count, :increment) = useCounter();
    
    return Scaffold(
      appBar: AppBar(title: Text('Counter')),
      body: Center(
        child: Text('Count: ${count}'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          increment(); // Increment the counter
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
```

## Flutter Hooks

The flutter_hooks package offer a range of lifecycle hooks to manage side effects.

These include:

useEffect: Runs a function when specific dependencies change.
useMemoized: Memoizes a value to optimize performance.
useCallback: Memoizes a callback to avoid unnecessary re-renders.
useState: Manages a piece of state.

[Discover more hooks and explore their functionality](https://pub.dev/packages/flutter_hooks) .

## Velvet Hooks

In addition to the hooks provided by flutter_hooks, Velvet offers custom hooks to streamline your development process. These hooks are designed to work seamlessly with the Velvet framework, providing additional functionality and features to enhance your app development experience.

Velvet offers several custom hooks to address common needs:

### `useEffectOnce`

This hook executes a callback function once when the component is mounted. It's useful for running initialization code or side effects that should only occur once.

**Usage Example:**

```dart
useEffectOnce(() {
  // Code to run once when the component is mounted
});
```

### `useProvider`

This hook integrates with Riverpod to read a provider’s value from the context. It provides a way to access and manage state from providers within your widget.

**Usage Example:**

```dart
final myValue = useProvider(myProvider);
```

### `useForm`

`useForm` manages form state, including validation and submission. It returns a set of utilities for handling form input states and submitting the form, which simplifies form management.

**Usage Example:**

```dart
final usernameInput = useInput<String>(rules: [RequiredStringRule()]);
final passwordInput = useInput<String>(rules: [RequiredStringRule(), MinLengthRule(6)]);

final form = useForm(
  [usernameInput, passwordInput],
  () async {
    // Handle form submission
  },
  onSuccess: () {
    // Handle success
  },
);
```

### `useInput`

`useInput` manages the state and validation of a text input field. It provides a `TextEditingController`, `FocusNode`, and validation utilities, helping you handle input fields more effectively.

**Usage Example:**

```dart
final inputState = useInput<String>(
  rules: [RequiredStringRule()],
  initialValue: 'Initial Value',
);

TextField(
  controller: inputState.controller,
  focusNode: inputState.focusNode,
  decoration: InputDecoration(
    errorText: inputState.error,
  ),
);
```

### `useEventListener`

This hook subscribes to Velvet events and executes a callback when the event is dispatched. It automatically disposes of the subscription when the component is unmounted.

**Usage Example:**

```dart
useEventListener<MyEvent>((event) {
  // Handle the event
});
```

## Lifecycle and Event Handling

Hooks like `useEffectOnce` and `useEventListener` are crucial for managing lifecycle events and reacting to changes in your application. By using these hooks, you can handle initialization, cleanup, and event subscription in a more declarative way.

Integrating hooks into your Flutter application allows you to write cleaner, more maintainable code, and provides a more flexible approach to managing state and side effects.