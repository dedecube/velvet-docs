---
title: Directory Structure
---

# Directory Structure

The directory structure of a Velvet project is similar to that of a standard Flutter project.

Velvet projects have some additional directories and files that are specific to the framework. Each directory and file has a specific purpose and is used to organize your project in a logical and efficient manner but it is entirely up to you how you want to structure your project. However, it is recommended to follow the structure provided by the framework to ensure consistency and maintainability, for example just for use the cli commands to generate classes.  

::: tip Brainstorming
We are discussing about the possibility to provide a velvet.yaml in which define the preferred structure (monolith, clean-architecture, and so on) to help the cli to generate the classes in the right place and understand your wants and needs.
:::

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

#### config

The `config` directory, as the name implies, contains all of your application's configuration files.
It's a great idea to read through all of these files and familiarize yourself with all of the options available to you.

#### routes.dart

The `routes.dart` file contains all of the routes in your application. This file is used to navigate between screens.

#### main.dart

The `main.dart` file is the entry point of your application. This file is responsible for creating the `VelvetApp` instance and running it.

## Next directories

::: warning Documentation in progress
Every projects could have a different structure, in future we will provide a list of the most common directories that you could find in a Velvet project.
:::
