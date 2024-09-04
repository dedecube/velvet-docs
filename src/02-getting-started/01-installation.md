---
title: Installation
---

# Installation

## Meet Velvet

Velvet is a Flutter framework designed to streamline your app development process with an expressive and intuitive syntax. It offers a solid foundation, allowing you to focus on bringing your vision to life while Velvet takes care of the heavy lifting.

Velvet shines with its standout features, including robust state management, seamless data persistence, a powerful API client service, a versatile command-line interface (CLI), and an extensive plugin system. These tools work together to give you everything you need to build high-quality, feature-rich applications with ease.

Whether you're new to Flutter or a seasoned pro, Velvet adapts to your skill level, helping you get started quickly and scale as your projects grow. We're excited to see the innovative apps you'll create with Velvet's powerful framework.

## Why Velvet?

Velvet is crafted to simplify and enhance your Flutter development experience, offering a streamlined approach to building powerful applications. While Flutter is a robust platform, it can sometimes involve repetitive tasks or complex configurations. Velvet tackles these challenges by providing a suite of tools and features that manage these intricacies for you, letting you concentrate on creating exceptional apps.

A key advantage of Velvet is its flexibility. Velvet comes with powerful built-in features like state management, persistence, and an API client service, but it never confines you to a single approach. For instance, Velvet provides an abstract layer built on Dio for API handling, which simplifies network requests and error management. However, if you prefer to implement your own API client, Velvet seamlessly integrates with alternative solutions. This makes Velvet an ideal choice for developers who value the convenience of a framework while retaining the freedom to use their preferred tools and libraries.

In essence, Velvet is designed to simplify the more complex aspects of Flutter development while offering a flexible, adaptable framework that fits your workflow. Whether you choose to leverage Velvet's built-in features or bring in your own tools, Velvet supports your development process, empowering you to create without constraints.

## Creating a New Project

Currently, we are provided a single way to create a new Velvet project.

1. Create a flutter project with the following command:

```bash
flutter create --org com.example --project-name my_project my_project
```

2. Add `velvet_cli` to your project by adding the following dependencies to your `pubspec.yaml` file:

```yaml
flutter pub add dev:velvet_cli
```

3. Run the following command to generate the Velvet project structure:

```bash
flutter pub run velvet_cli install
```

That's it! You've successfully created a new Velvet project. You can now explore the project structure and start building your app with Velvet.