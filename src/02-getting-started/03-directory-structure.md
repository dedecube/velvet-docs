---
title: Directory Structure
---

# Directory Structure

## The `root` Directory

#### android

The `android` directory is a well-known directory for Flutter users.
This directory contains all stuff about android build.

#### assets

The `assets` directory houses all images, icons, translation that will be bundled within application.

#### ios

The `ios` directory is a well-known directory for Flutter users.
This directory contains all stuff about ios build.

#### lib

The `lib` directory contains the core code of your application. We'll explore this directory in more detail soon; however, almost all of the files in your application will be in this directory.

#### test
The `test` directory contains your automated tests.

## The `lib` Directory

The majority of your application is housed in the `lib` directory.

By default, each velvet project is setup with three flavors: prestage, stage and production.
Every flavor has its own main file that wrap the main.dart file located at root of `lib` director.
The lib is populated, out-the-box, with some directories that are explained below.
However, over time, a variety of other directories will be generated inside the lib directory as you use the pfy commands to generate classes. 

#### bootstrap

The `bootstrap` directory contains all of bootstrap functions for your application. Each function, is a riverpod provider, that bootstrap your application initializing some services, performing checks and tasks to prepare your application for a cleanest and secure app initialization before the first interaction of user.
For example, a bootstrap function can lock device orientation, check if user is logged in, add interceptor to api client, and so on.

#### config

The `config` directory, as the name implies, contains all of your application's configuration files.
It's a great idea to read through all of these files and familiarize yourself with all of the options available to you.

#### features

The `features` directory contains the business logic of your entire application. Each feature is a directory that contains all the necessary files to implement a feature. 

#### presentation

The `presentation` directory contains all the UI code of your application. It's divided into multiple subdirectories, each representing a different aspect of the UI.

## Common Structure of a Feature

As mentioned, the features directory contains multiple subdirectories, each representing a feature.

While each feature can have a custom structure, it's recommended to follow a common base structure.
Developers are free to add new directories and files as needed.

#### contracts
This subdirectory holds the interface definitions or abstract classes that define the contracts between different parts of the application. Contracts ensure that each feature adheres to a predefined structure, allowing for easy substitution and mocking during testing.

#### repositories
Repositories are responsible for data management, providing a clean API for data access. They serve as an intermediary between the data sources (like APIs, databases, or local storage) and the rest of the application. This directory includes classes and interfaces that handle data fetching, caching, and persistence.

#### hooks
The hooks subdirectory contains custom hooks or reusable logic that can be used within the feature. These hooks encapsulate complex logic, making it easier to share stateful logic between components or handle side effects.

#### middlewares
Middlewares manage the flow of data and actions within the application. They are typically used in state management to intercept actions, perform asynchronous tasks, or modify actions before they reach the reducer or state. This directory contains the middleware logic specific to the feature.

#### notifiers
Notifiers are responsible for managing and broadcasting state changes or events to the rest of the application. They might work with observers or event listeners to ensure that all parts of the app react appropriately to changes in the feature's state. This subdirectory includes classes or services dedicated to notification logic.

#### providers
Providers serve as dependency injection points for the feature. They manage the lifecycle and availability of dependencies, such as services, repositories, or controllers, ensuring that the necessary instances are available where needed within the feature.

#### storables
Storables refer to entities or data models that need to be persisted or cached within the feature. This directory typically includes classes that define the structure and behavior of these models, as well as the logic for saving, retrieving, and managing stored data.

#### use_cases
Use cases define the business logic for the feature. They encapsulate specific actions or operations that can be performed within the feature, often representing a single, well-defined task. This directory contains classes or functions that implement the core functionality of the feature, focusing on how data is processed and manipulated to achieve specific outcomes.

## Common Structure of a Presentation 