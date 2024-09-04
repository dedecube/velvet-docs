---
title: Helpers
---

# Helpers

## Introduction

Velvet provides a set of helper functions to make your life easier.
Most of these functions are available using dart extensions.


## Installation

If you are using velvet_framework, you don't need to install this package separately. It is already included in the framework.

Dart:

```bash
dart pub add velvet_support
```

Flutter:

```bash
flutter pub add velvet_support
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

Check if the string contains a substring. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesContains('Hello'); // true
```

```dart
final text = 'Hello, World!';
final result = text.doesContains('hello' ignoreCase: true); // true
```

#### doesContainsAny

Check if the string contains any of the provided substrings. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesContainsAny(['Hello', 'Goodbye']); // true
```

```dart
final text = 'Hello, World!';
final result = text.doesContainsAny(['Pizza', 'Goodbye']); // false
```

#### doesContainsAll

Check if the string contains all of the provided substrings. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesContainsAll(['Hello', 'World']); // true
```
    
```dart
final text = 'Hello, World!';
final result = text.doesContainsAll(['Hello', 'Goodbye']); // false
```

#### doesEndsWith

Check if the string ends with a substring. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesEndsWith('World!'); // true
```

#### doesEndsWithAny

Check if the string ends with any of the provided substrings. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesEndsWithAny(['World!', 'Pizza']); // true
```

#### doesStartsWith

Check if the string starts with a substring. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesStartsWith('Hello'); // true
```

#### doesStartsWithAny

Check if the string starts with any of the provided substrings. Accepts a ignoreCase flag.

```dart
final text = 'Hello, World!';
final result = text.doesStartsWithAny(['Hello', 'Pizza']); // true
```

### Ensures

The `EnsureOnStringExtension` extension provides a way to ensure the content of a string.

#### ensureStartsWith

Ensure that the string starts with a substring.

```dart
final text = 'World!';
final result = text.ensureStartsWith('Hello, '); // 'Hello, World!'
```

If the string already starts with the provided substring, the original string is returned.

```dart
final text = 'Hello, World!';
final result = text.ensureStartsWith('Hello, '); // 'Hello, World!'
```

#### ensureEndsWith

Ensure that the string ends with a substring.

```dart
final text = 'Hello,';
final result = text.ensureEndsWith(' World!'); // 'Hello, World!'
```

#### ensureDoesNotStartWith
  
Ensure that the string does not start with a substring.

```dart
final text = 'Hello, World!';
final result = text.ensureDoesNotStartWith('Hello, '); // 'World!'
```

#### ensureDoesNotEndWith

Ensure that the string does not end with a substring.

```dart
final text = 'Hello, World!';
final result = text.ensureDoesNotEndWith(' World!'); // 'Hello,'
```

#### ensureWrappedWith

Ensure that the string is wrapped with a substring.

```dart
final text = 'World!';
final result = text.ensureWrappedWith('Hello, ', '!'); // 'Hello, World!'
```


#### ensureNotWrappedWith

Ensure that the string is not wrapped with a substring.

```dart
final text = 'Hello, World!';
final result = text.ensureNotWrappedWith('Hello, ', '!'); // 'World'
```

## Map Extensions

### DotNotation

The extension allows easy access and manipulation of nested map structures using dot notation.

The `DotNotationOnMapExtension` provides the following key functionalities:
- **Get values** from a nested map using dot notation.
- **Set values** in a nested map, automatically creating nested structures as needed.
- Handle edge cases such as non-existent keys, out-of-bounds indices, and different data types.

#### get

**Simple Value Retrieval**

The `get` method allows you to retrieve values from a deeply nested map using dot notation.

Example map:

```dart
Map<String, dynamic> map = {
  'my': {
    'example': 'hello',
    'list': ['item1', 'item2'],
    'nestedList': [
      {'name': 'first'},
      {'name': 'second'},
    ],
  },
  'simpleArray': ['a', 'b', 'c'],
};
```

You can retrieve simple values by specifying the path to the key:

```dart
String? example = map.get<String>(key: 'my.example'); // Returns 'hello'
```

For non-existent keys, you can provide a default value:

```dart
String? nonExistent = map.get<String>(key: 'non.existent.key', defaultValue: 'default'); // Returns 'default'
```

**List Elements Retrieval**

Accessing elements within a list is straightforward:

```dart
List? myList = map.get<List>(key: 'my.list'); // Returns ['item1', 'item2']
String? firstItem = map.get<String>(key: 'my.list.0'); // Returns 'item1'
```

You can also retrieve the first and last elements in a list:

```dart
String? first = map.get<String>(key: 'my.list.{first}'); // Returns 'item1'
String? last = map.get<String>(key: 'my.list.{last}'); // Returns 'item2'
```

**Nested List Elements**

For maps containing nested lists, you can dig deeper into the structure:

```dart
String? firstNestedName = map.get<String>(key: 'my.nestedList.0.name'); // Returns 'first'
```

#### set

The `set` method allows you to set values in a nested map structure. If the necessary structure doesn't exist, it will be created automatically.

**Simple Value Setting**

Setting a new key-value pair in the map is easy:

```dart
map.set(key: 'my.new.key', value: 'new value');
String? newValue = map.get<String>(key: 'my.new.key'); // Returns 'new value'
```

**Setting Values in Lists**

You can add or modify elements in a list:

```dart
map.set(key: 'my.new.list.0', value: 'item0');
map.set(key: 'my.new.list.1', value: 'item1');
List? newList = map.get<List>(key: 'my.new.list'); // Returns ['item0', 'item1']
```

If you set a value at an index that doesn't yet exist, the list will expand, filling in the gaps with `null`:

```dart
map.set(key: 'my.new.list.3', value: 'item3');
List? expandedList = map.get<List>(key: 'my.new.list'); // Returns [null, null, null, 'item3']
```

**Setting Nested Structures**

You can also set values in deeply nested structures:

```dart
map.set(key: 'my.deep.structure.key', value: 'deepValue');
String? deepValue = map.get<String>(key: 'my.deep.structure.key'); // Returns 'deepValue'
```

##### Edge Cases

The `DotNotationOnMapExtension` also handles various edge cases gracefully.

**Setting and Getting Complex Keys**

Keys containing dots are handled correctly, treating them as literal keys rather than separators for nested paths:

```dart
map.set(key: 'key.with.dots', value: 'valueWithDots');
String? valueWithDots = map.get<String>(key: 'key.with.dots'); // Returns 'valueWithDots'
```

**Handling Empty Keys**

Setting and retrieving values with an empty key string is supported, with appropriate default handling:

```dart
map.set(key: '', value: 'emptyKey');
String? emptyKey = map.get<String>(key: '', defaultValue: 'default'); // Returns 'default'
```

**Null Values**

The extension can handle null values, setting them and retrieving them with the correct handling of defaults:

```dart
map.set(key: 'nullableKey', value: null);
String? nullableValue = map.get<String>(key: 'nullableKey', defaultValue: 'default'); // Returns null
```
