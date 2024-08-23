---
title: Routing
---

# Routing

The Velvet framework uses the [GoRouter](https://pub.dev/packages/go_router) package to handle navigation.

## Why GoRouter?

The GoRouter package is a declarative router for Flutter that allows you to define your routes in a simple and concise way and it is an official package by [Flutter](https://flutter.dev).

The GoRouter package provides a way to define typed routes, which allows you to pass data between routes in a type-safe way.
Velvet come out-of-the-box with the GoRouter package pre-configured and ready to use with typed system enabled.

::: details Typed System in Velvet with a tricky solution
The typed system is implemented in a tricky way to allow each route to be in its own file. This way, the code is more organized and easier to maintain.

The GoRouter package provides a way to define typed routes, which allows you to pass data between routes in a type-safe way.
This requires the use of the build_runner and that every route, declared as individual classes, should be placed in the same file.

Instead of, declare each route in a single file, in Velvet, each route is a class and it is placed in its own file.

**But how to make it work if GoRouter expects a single file with all routes?** The tricky solution is to use the dart `part` directive to include all routes in a single file.
:::

## Type-Safe Routing

Every route in Velvet is a class that extends the `VelvetRoute` class.

```dart
part of 'routes.dart';

class UserDetailsRoute extends VelvetRoute {
  UserDetailsRoute({required this.userId});

  final int userId;

  @override
  build(BuildContext context, GoRouterState state) {
    return UserDetailsPage(userId: userId);
  }
}
```

In the `routes.dart` file, you define the tree of routes.

```dart
import 'package:flutter/widgets.dart';
import 'package:velvet_framework/velvet_framework.dart';
import 'package:velvet_basic_app/pages/home_page.dart';
import 'package:velvet_basic_app/pages/user_details_page.dart';

part 'home_route.dart';
part 'user_details_route.dart';
part 'routes.g.dart';

@TypedShellRoute<Routes>(
  routes: [
    TypedGoRoute<HomeRoute>(path: '/home'),
    TypedGoRoute<UserDetailsRoute>(path: '/user/details/:userId'),
  ],
)
class Routes extends ShellRouteData {}
```

When building using build_runner, it will performed a validation between the paths and the arguments of route constructors. If there is a mismatch, the build will fail. This way, you can ensure that the routes are type-safe.

Additionaly, the typed system allow:
- to not care about the route name avoiding the usage of enums or hard-coded string;
- to not perform path parameters replacement manually;
- to not care about the route arguments order;
- to not care about the route arguments type;

## The routes.dart file

The `lib/presentation/routes.dart` file is the main file where are defined all routes of your application.

```dart
import 'package:flutter/widgets.dart';
import 'package:velvet_basic_app/pages/home/home_page.dart';

part '../pages/home/home_route.dart';
part 'routes.g.dart';

@TypedShellRoute<Routes>(
  routes: [
    TypedGoRoute<HomeRoute>(path: '/home'),
  ],
)
class Routes extends ShellRouteData {}
```

As you can see, the `Routes` class is annotated with the `@TypedShellRoute` annotation, which is used to define the routes of your application.
The build_runner will generate the `routes.g.dart` file that contains the routes configuration.

As routes increase, the routes.dart file can become large due to the number of imports and parts, but the tree of routes will be always organized and easy to maintain.

## Creating a New Route

To create a new route, use the `make:route` command.

```shell
flutter pub run velvet_cli make:route
```

The command will ask you for the name. You can provide the name as path-like string, for example `home`, `home/details`, `home/details/1`, etc.

For example, if you provide `user/list` as the name, the command will do the following:

- Create `lib/presentation/routes/user/list_route.dart` file with boilerplate code;
- Create `lib/presentation/routes/user/list_page.dart` file with boilerplate code;
- Modify `lib/presentation/routes.dart` file to import the page and add the route as part.

Then you need to define the route in the `lib/presentation/routes.dart` file.

## Navigating to a Route

For each `TypedGoRoute` route will be generated an extension that contains some methods to navigate to that route.

```dart
HomeRoute().go(context);
```

```dart
UserDetailsRoute(userId: 1).go(context);
```

## Middleware (Guards, Redirects)

On many occasions, you may need to execute some code before navigating to a route, for example, to check if the user is authenticated or has the necessary permissions to access the route. To do this, it is possibile to create a `Middleware` and add it to the route.

### Creating a Middleware

To create a new middleware, use the `make:middleware` command.

```shell
flutter pub run velvet_cli make:middleware
```

The command will ask you for the name. You can provide the name as path-like string, for example `is_authenticated`, `is_admin`, etc.

For example, if you provide `is_authenticated` as the name, the command will generate the `lib/presentation/routes/middlewares/is_authenticated_middleware.dart` file with boilerplate code.

```dart
import 'package:flutter/material.dart';
import 'package:velvet_framework/velvet_framework.dart';

class IsAuthenticatedMiddleware extends VelvetMiddleware {
  @override
  Future<VelvetMiddlewareOperation> handle(
    BuildContext context,
    GoRouterState state,
    Next next,
  ) async {
    final isAuthenticated = true; // Check if the user is authenticated

    if (!isAuthenticated) {
      return VelvetMiddlewareOperation.redirect(
        const LoginRoute().location,
      );
    }

    return next();
  }
}
```

### Adding a Middleware to a Route

```dart
part of 'routes.dart';

class UserDetailsRoute extends VelvetRoute {
  UserDetailsRoute({required this.userId});

  final int userId;

  @override // [!code focus]
  List<VelvetRouteGuard> get guards => [ // [!code focus]
    IsAuthenticatedRouteGuard(), // [!code focus]
  ]; // [!code focus]

  @override
  build(BuildContext context, GoRouterState state) {
    return UserDetailsPage(userId: userId);
  }
}
```

Every guard will be executed in the order they are defined.
