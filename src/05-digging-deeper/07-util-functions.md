---
title: Util Functions
---

# Util Functions

[[toc]]

## Introduction

Velvet provides a set of utility functions that can help you write cleaner and more maintainable code.
Here is the list of functions organized in alphabetical order:

## Available Functions

Here is a table with three items per row, each linking to the corresponding function:

#### `config`

The `config` function allows you to get a configuration object.

```dart
final myConfig = config<MyConfigContract>();
```

#### `container`

::: warning
Currently, the `container` is a getter and not a function.
:::

The `container` function allows you to get the global container.

```dart
final myService = container.get<MyServiceContract>();
```

#### `env`

The `env` function allows you to get an environment object.

```dart
final myEnv = env('MY_ENV_KEY');
```

Also available:
- `envInt`
- `envBool`
- `envDouble`
- `envString`, same as `env`

#### `event`

The `event` function allows you to dispatch an event.

```dart
event(ExampleEvent('Hello, World!'));
```

#### `kernel`

The `kernel` function allows you to get the kernel object.

```dart
final myKernel = kernel();
```

#### `kernelContext`

The `kernelContext` function allows you to get the kernel context.

```dart
final myKernelContext = kernelContext();
```

#### `listen`

The `listen` function allows you to listen for an event.

```dart
listen<ExampleEvent>((event) {
  print(event.message);
});
```

#### `logger`

The `logger` function allows you to get a logger object.

```dart
final myLogger = logger();
```

```dart
logger().info('Hello, World!');
```

#### `navigatorContext`

The `navigatorContext` function allows you to get the navigator context.

```dart
final myNavigatorContext = navigatorContext();
```

#### `navigatorKey`

The `navigatorKey` function allows you to get the navigator key.

```dart
final myNavigatorKey = navigatorKey();
```

#### `riverpodContainer`

The `riverpodContainer` function allows you to get the riverpod container.

```dart
final myProvider = riverpodContainer().read(myProvider);
```

#### `translate`

The `translate` function allows you to translate a key.

```dart
final translation = translate('my_key');

final translationWithArgs = translate('my_key', args: {'arg1': 'value1', 'arg2': 'value2'});
```