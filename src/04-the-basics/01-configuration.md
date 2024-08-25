---
title: Configuration
---

# Configuration

In Velvet, configurations allow you to manage settings and options for services and plugins in a structured way. A configuration is represented by a class that extends the `VelvetConfig` class, which currently serves as a marker interface. Configurations can be registered globally, enabling different parts of your application to access shared settings.

## Why Use Configurations?

Configurations centralize the management of settings across your application, providing a clear and consistent way to handle options for services, plugins, and other components. By using configurations, you can ensure that your services and plugins are easily configurable, maintainable, and extensible. Additionally, configurations registered in the main application can override those registered by plugins, giving you control over application behavior.

## Creating a Configuration

To create a configuration, define a class that implements a configuration contract, typically an abstract class or interface that extends `VelvetConfig`. Here’s an example:

1. Define a configuration contract, in `lib/contracts/my_config_contract.dart`:
```dart
abstract class MyConfigContract extends VelvetConfig {
  String get apiUrl;
}
```

2. Implement the configuration class, in `lib/configs/my_config.dart`:
```dart
class MyConfig extends VelvetConfig implements MyConfigContract {
  @override
  String get apiUrl => 'https://api.example.com';
}
```
3. To use the configuration, register it with the `VelvetConfigManager` in your application setup.

## Registering Configurations

Configurations are registered using the `VelvetConfigManager`. This is done similarly to how you register services in the IoC container. You can register configurations either within plugins or in the main application setup.

### Registering Configurations in Plugins

Plugins can register their configurations during their setup phase:

```dart
class MyPlugin extends VelvetPlugin {
  @override
  Future<void> register() async {
    configManager.register<MyConfigContract>(MyConfig());
  }

  @override
  Future<void> boot() async {
    // Plugin boot logic
  }
}
```

### Registering Configurations in the Main Application

Configurations can also be registered directly in the main application.
This is often done to override default configurations provided by plugins:

```dart
void main() {
  createVelvetApp()
    ..withConfig((configManager) {
      configManager
        ..register<MyConfigContract>(MyConfig());
    })
    ..run();
}
```

## Configuration Initialization Order

During application startup, Velvet first registers configurations provided by plugins, followed by those defined in the main application. This ensures that configurations in the main application can override plugin-provided defaults if necessary. This two-step registration process provides flexibility and control over the final configuration state of your application.

## Accessing Configurations

Once registered, configurations can be accessed from anywhere within your application using the `config` method:

```dart
final myConfig = config<MyConfigContract>();
print(myConfig.apiUrl);  // Outputs: 'https://api.main.com'
```

This access method allows you to retrieve the appropriate configuration for your services or components, ensuring they are configured according to the application's needs.

## Binding Environment Variables to Configurations

Velvet has some built-in support for binding environment variables to configurations. This feature will allow you to define configurations that can be overridden by environment variables, making it easier to manage settings across different environments.

It also support loading configurations from `.env` files, which can be useful for managing environment-specific settings in your application.

## Getting a environment variable

To get a value from a configuration, you can use the `env` method:

```dart
env('API_URL');

// or with a default value

env('API_URL', 'https://api.example.com');
```

Are also available the `envInt`, `envDouble`, `envBool` and `envList` methods.

## How Velvet load environment variables

Velvet loads environment in two different ways:
- On debug mode, from the `.env` file in the root of your project, using the `flutter_dotenv` package.
- On release mode, from the system environment variables.

### Why two different ways?

To provide a better development experience, Velvet uses the `.env` file to load environment variables in debug mode. This allows you to define environment-specific settings in a single file, making it easier to manage configurations across different environments.

The flutter_dotenv package works by reading the `.env` file that it will be included in the assets of your project. The approach to include the `.env` is not the best, but it is fine to use in development mode.

Using flutter_dotenv, Velvet provide a sort of "hot reload" for environment variables, allowing you to update the `.env` file and see the changes reflected in your application without restarting it. This is done by re-read the `.env` file every time the KernelWidget is reassembled. It also trigger an entire refresh of every registred configuration.

In release mode, Velvet using the String.fromEnvironment method to get the environment variables. This method is provided by the Dart SDK and allows you to access environment variables set by the system. So it is important to add `--dart-define-from-file=.env` when building your application. We also suggest to obfuscate your application to discourage the reverse engineering of your application (this is not a guarantee of security and do not encrypt the env variables).

### Using another approach

If you want to use another approach to load environment variables, like usage of `envied` package, you must opt-out from the `.env` file loading.

```dart
main () {
  createVelvetApp()
    ..withConfig((configManager) {
      configManager
        ..register<MyConfigContract>(MyConfig());
    })
    ..optOutFromEnvLoading()
    ..run(loadEnv: false);
}
``` 
