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

::: info We are working on!
We are working on adding this feature in future versions of Velvet. Stay tuned for updates!
:::

Velvet does not currently provide an official method for binding environment variables directly to configurations.

However, you can integrate with third-party libraries or use native Dart features to achieve this, for example:

1. Dart native `String.fromEnvironment`
2. `flutter_dotenv`
3. `envied`
