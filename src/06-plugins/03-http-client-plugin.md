---
title: HTTP Client Plugin
---

# HTTP Client Plugin

The HTTP plugin allows you to register a global HTTP client that can be used to make HTTP requests.
Velvet provides a base class `VelvetHttp`, this plugin provides a concrete implementation of this class.

## Installation

To install the HTTP plugin, run the following command:

```bash
flutter pub add http_client_velvet_plugin
```

Update the `main.dart` file to include the plugin:

```dart
import 'package:http_client_velvet_plugin/http_client_velvet_plugin.dart';  // [!code focus]

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) {  // [!code focus]
        pluginManager.addPlugin(HttpClientVelvetPlugin()); // [!code focus]
    })  // [!code focus]
    ..run();
}
```

Add in your `.env` file the following configuration:

```dotenv
HTTP_CLIENT_BASE_URL=
```

## Usage

To use the HTTP client, you can inject it into your class:

```dart
void someMethod() {
 container.httpClient.request(/** ... */);
}
```

## Configuring the HTTP Client

The plugin is only responsible for creating the HTTP client and provide an extension to the `container` to access it.

If you need to configure the HTTP client, you can do so by chaining a `withBoot` method in the `main.dart` file or creating another plugin if you want to separate the concerns.

```dart
import 'package:http_client_velvet_plugin/http_client_velvet_plugin.dart';  // [!code focus]

void main() {
  createVelvetApp()
    ..withPlugins((pluginManager) {
        pluginManager.addPlugin(HttpClientVelvetPlugin());
    })
    ..withBoot(() {  // [!code focus]
      container.httpClient.dioInstance.addInterceptor(YourInterceptor());  // [!code focus]
    });  // [!code focus]
    ..run();
}
```

or creating a new plugin:

```dart
import 'package:http_client_velvet_plugin/http_client_velvet_plugin.dart';

class MyHttpClientPlugin extends VelvetPlugin {
  @override
  void boot(Container container) {
    container.httpClient.dioInstance.addInterceptor(YourInterceptor());
  }
}
```
