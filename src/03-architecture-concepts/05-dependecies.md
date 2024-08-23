---
title: Dependencies
---

# Dependencies

The Velvet framework is designed to be as decoupled as possible. This means that the components of the framework should be able to be used independently of each other. However, there are some dependencies that are strongly coupled. These dependencies are necessary for the framework to function properly.

::: info
Every dependency listed here are exported by the Velvet package, so you don't need to worry about importing them from other sources.
:::

## Dependencies

### Flutter

The Velvet framework is built on top of the Flutter framework. Flutter is a UI toolkit that allows developers to create beautiful and responsive applications for multiple platforms using a single codebase. Velvet relies on Flutter to handle the user interface of the application.

### GoRouter

GoRouter is a package that provides a declarative and flexible way to handle routing in Flutter applications. Velvet uses GoRouter to manage the navigation and routing within the application. It allows developers to define routes and handle navigation between different screens.

### Riverpod

> Riverpod is a reactive caching and data-binding framework
>
> -- <cite>Remi Rousselet, Riverpod's Author</cite>

The power of Rivepod is that can be used for many aspects:
- as IoC;
- as api request caching;
- as global state management;
- as a way to share data between widgets;

Velvet future releases may wrap Riverpod to provide a more seamless experience. Currently is highly recommended to use Riverpod with Velvet and, so, to learn how to use it consulting the official documentation [here](https://riverpod.dev/docs/introduction/getting_started).

### Flutter Hooks

Flutter Hooks is a package that provides a set of reusable hooks for Flutter applications. Hooks are a way to reuse stateful logic across different components in a Flutter application. Velvet leverages Flutter Hooks to manage the state of the application and share logic between different components.
