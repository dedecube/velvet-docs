---
title: Logging
---

# Logging

Logging is a critical part of any application. It allows you to track the flow of your application, debug issues, and monitor performance.

Velvet provides a simple and flexible logging system that you can use to log messages at different levels. You can also customize the logging behavior to suit your needs.

## Logging a message

To log a message, you can use the `logger` function provided by Velvet. The `logger` function returns the default logger instance, which you can use to log messages at different levels.

Here's an example of how to log a message at the `info` level:

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  logger().info('Hello, world!');
}
```

The `logger` function returns a `Logger` instance that provides methods to log messages at different levels. The available log levels are:

- `debug`: This level is used for debugging messages.
- `info`: This level is used for general information messages.
- `warning`: This level is used for warnings that do not require immediate attention.
- `error`: This level is used for errors that do not require immediate attention.
- `critical`: This level is used for critical errors that require immediate attention.

## Logger Channels

### Introduction

Velvet logging is based on "channels". Each channel represents a specific way of writing log information.
For example, the LoggingLoggerChannel writes log using logging package with print, the TalkerLoggerChannel writes log using talker package.

### Create a custom logger channel

You can create you own channel by extending the `VelvetLoggerChannel` class and then use it configuring the logger.

```dart
import 'package:velvet_framework/velvet_framework.dart';

class MyLoggerChannel extends VelvetLoggerChannel {
  @override
  void debug(
    String message, [
    Object? error,
    StackTrace? stackTrace,
  ]) {
    // Implement your debug logic here
  }

  @override
  void info(
    String message, [
    Object? error,
    StackTrace? stackTrace,
  ]) {
    // Implement your info logic here
  }

  @override
  void warning(
    String message, [
    Object? error,
    StackTrace? stackTrace,
  ]) {
    // Implement your warning logic here
  }

  @override
  void error(
    String message, [
    Object? error,
    StackTrace? stackTrace,
  ]) {
    // Implement your error logic here
  }

  @override
  void critical(
    String message, [
    Object? error,
    StackTrace? stackTrace,
  ]) {
    // Implement your critical logic here
  }
}
```

### Configure the logger

To use your custom logger channel, you need to add channel in the logger configuration.

The logger configuration is tipically located in config folder, but could not exists, so you need to create it.

```dart
import 'package:velvet_framework/velvet_framework.dart';

import 'package:flutter/foundation.dart';
import 'package:velvet_framework/core/logger/channels/talker_velvet_logger_channel.dart';
import 'package:velvet_framework/core/logger/contracts/velvet_logger_config_contract.dart';
import 'package:velvet_framework/core/logger/velvet_logger_channel.dart';

class LoggerConfig implements VelvetLoggerConfigContract {
  @override
  bool get isEnabled => kDebugMode;

  @override
  List<VelvetLoggerChannel> get channels => [
        TalkerVelvetLoggerChannel(),
      ];
}
```

As you can see, the `LoggerConfig` class implements the `VelvetLoggerConfigContract` interface, which defines two properties:
- `isEnabled`: A boolean value that indicates whether logging is enabled.
- `channels`: A list of `VelvetLoggerChannel` instances that define how log messages are written.

::: warning Level Config
We are working to implement the level configuration in the logger configuration. So that you can define which level of log you want to write in each channel.
:::

So, you can use multiple channels to write log messages in different ways. This means, for example, that you can write log messages to the console and send an notification on a Discord channel at the same time.

Then you need to use the `LoggerConfig` in the Velvet app.

```dart
import 'package:velvet_framework/velvet_framework.dart';

void main() {
  createVelvetApp()
    ..useLoggerConfig(LoggerConfig()) // [!code focus]
    ..run();
}
```