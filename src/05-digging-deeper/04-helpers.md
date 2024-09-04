---
title: Helpers
---

# Helpers

## Introduction

Velvet provides a set of helper functions to make your life easier.
Most of these functions are available using dart extensions.


## Installation

If you are using velvet_framework, you don't need to install this package separately. It is already included in the framework.

Add this to your `pubspec.yaml` file:

```yaml
dependencies:
  velvet_support: ^1.0.0
```

Then, run:

```bash
flutter pub get
```

## String Extensions

### Bounds

The `BoundsOnStringExtension` extension provides a way to limit the length of a string.

#### after

Extract the text after a substring.

```dart
final text = 'Hello, World!';
final result = text.after('Hello, '); // 'World!'
```

#### afterLast

Extract the text after the last occurrence of a substring.

```dart
final text = 'Hello, as always, World!';
final result = text.afterLast(', '); // 'World!'
```

#### before

Extract the text before a substring.

```dart
final text = 'Hello, World!';
final result = text.before(', Worlds'); // 'Hello'
```

#### beforeLast

Extract the text before the last occurrence of a substring.
    
```dart
final text = 'Hello, as always, World!';
final result = text.beforeLast(', '); // 'Hello, as always'
```

#### between

Extract the text between two substrings.

```dart
final text = 'Hello, World!';
final result = text.between('Hello, ', '!'); // 'World'
```

#### betweenFirst

Extract the text between the first occurrence of two substrings.
    
```dart
final text = 'Hello, as always, but never goodbye, World!';
final result = text.betweenFirst(', ', ', '); // 'as always'
```

### Cases

The `CasesOnStringExtension` extension provides a way to convert the case of a string.

#### camel

Convert the string to camel case.

```dart
final text = 'hello_world';
final result = text.camel(); // 'helloWorld'
```

#### firstLower

Convert the first character of the string to lower case.

```dart
final text = 'HelloWorld';
final result = text.firstLower(); // 'helloWorld'
```

#### firstUpper

Convert the first character of the string to upper case.

```dart
final text = 'helloWorld';
final result = text.firstUpper(); // 'HelloWorld'
```

#### isLower

Check if the string is in lower case.

```dart
final text = 'helloWorld';
final result = text.isLower(); // false
```

```dart
final text = 'helloworld';
final result = text.isLower(); // true
```

#### kebab

Convert the string to kebab case.

```dart
final text = 'helloWorld';
final result = text.kebab(); // 'hello-world'
```

#### snake

Convert the string to snake case.

```dart
final text = 'helloWorld';
final result = text.snake(); // 'hello_world'
```

#### studly

Convert the string to studly case.

```dart
final text = 'hello_world';
final result = text.studly(); // 'HelloWorld'
```

#### upperWords

Convert the first character of each word in the string to upper case.

```dart
final text = 'hello world';
final result = text.upperWords(); // 'Hello World'
```

### Checks

The `ChecksOnStringExtension` extension provides a way to check the content of a string.

#### doesContains

Check if the string contains a substring.

```dart
final text = 'Hello, World!';
final result = text.doesContains('Hello'); // true
```

#### doesContainsAny

Check if the string contains any of the provided substrings.

```dart
final text = 'Hello, World!';
final result = text.doesContainsAny(['Hello', 'Goodbye']); // true
```

```dart
final text = 'Hello, World!';
final result = text.doesContainsAny(['Pizza', 'Goodbye']); // false
```

#### doesContainsAll

Check if the string contains all of the provided substrings.

```dart
final text = 'Hello, World!';
final result = text.doesContainsAll(['Hello', 'World']); // true
```
    
```dart
final text = 'Hello, World!';
final result = text.doesContainsAll(['Hello', 'Goodbye']); // false
```

#### doesEndsWith

Check if the string ends with a substring.

```dart
final text = 'Hello, World!';
final result = text.doesEndsWith('World!'); // true
```

#### doesEndsWithAny

Check if the string ends with any of the provided substrings.

```dart
final text = 'Hello, World!';
final result = text.doesEndsWithAny(['World!', 'Pizza']); // true
```

## Map Extensions

### DotNotation

The `DotNotationOnMapExtension` extension provides a way to get and set values in a map using dot notation.

#### get

Get a value from a map using dot notation.

::: info
Documentation for the `get` method is not available yet.
Showing to you, tests for the `get` method.
:::

```dart
expect(map.get<String>(key: 'my.example', defaultValue: null), 'hello');
expect(
  map.get<List>(key: 'my.list', defaultValue: null),
  ['item1', 'item2'],
);
expect(map.get<String>(key: 'my.list.0', defaultValue: null), 'item1');
expect(map.get<String>(key: 'my.list.1', defaultValue: null), 'item2');
expect(map.get<String>(key: 'my.list.2', defaultValue: null), null);
expect(
  map.get<String>(key: 'my.list.{first}', defaultValue: null),
  'item1',
);
expect(map.get<String>(key: 'my.list.{last}', defaultValue: null), 'item2');
```

#### set

Set a value in a map using dot notation.

::: warning
Documentation for the `set` method is not available yet.
Showing to you, tests for the `set` method.
:::

```dart
map.set(key: 'my.new.key', value: 'new value');
expect(map.get<String>(key: 'my.new.key', defaultValue: null), 'new value');

map.set(key: 'my.new.list.0', value: 'item0');
map.set(key: 'my.new.list.1', value: 'item1');
expect(
  map.get<List?>(key: 'my.new.list', defaultValue: null),
  ['item0', 'item1'],
);
```
