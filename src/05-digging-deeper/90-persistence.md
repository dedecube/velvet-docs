---
title: Persistence
---

# Persistence

## Storable

::: warning
This page is currently a draft. The current version is not reviewed yet, not complete, not final, and subject to change.
:::

A **Storable** in our codebase represents a reusable class that provides a consistent way to manage data persistence. Storables handle the storage and retrieval of data, encapsulating the underlying mechanisms, whether it's shared preferences, a local database, or another storage solution. By extending the `Storable` class, developers can create specific implementations for different types of data, ensuring a standardized interface for data operations.

## Creating a Storable Class

To create a storable class, follow these steps:

1. **Extend the Storable Class**
   - Start by creating a class that extends `Storable<T>`, where `T` is the type of data you want to store. Implement the `get` and `set` methods to define how the data should be retrieved and saved.

   ### Example
   ```dart
   class OnboardingStorable extends Storable<bool> {
     @override
     Future<bool?> get({bool? defaultValue}) async {
       return store.simple.getBool(key, defaultValue: defaultValue);
     }

     @override
     Future<void> set(bool data) async {
       return store.simple.setBool(key, data);
     }
   }
   ```

   In this example, `OnboardingStorable` handles the storage of a boolean value, indicating whether the user has completed onboarding. The `get` method retrieves the value, and the `set` method saves it.

2. **Using the Storable Class**
   - Once the storable class is defined, you can create instances of it and use its methods to store and retrieve data.

   ### Example
   ```dart
   final onboardingStorable = OnboardingStorable();

   await onboardingStorable.set(true);

   final isOnboarded = await onboardingStorable.get();

   print(isOnboarded); // true
   ```

   In this example, the `OnboardingStorable` instance is used to save and retrieve the onboarding status.

## Default Key Usage

By default, storables use a predefined key for storage. This means that multiple instances of the same storable class will share the same storage key, leading to consistent data access across the application.

### Example
```dart
final onboardingStorable1 = OnboardingStorable();
final onboardingStorable2 = OnboardingStorable();

await onboardingStorable1.set(true);

final onboarding1 = await onboardingStorable1.get();
final onboarding2 = await onboardingStorable2.get();

print(onboarding1); // true
print(onboarding2); // true - because it uses the same key
```

In the above example, both `onboardingStorable1` and `onboardingStorable2` refer to the same underlying data because they share the same default key.

## Custom Key Usage

If you need different instances of the same storable class to store data under different keys, you can override the `key` getter. This allows for more granular control over data storage, ensuring that different instances do not interfere with each other's data.

### Example
```dart
class OnboardingStorable extends Storable<bool> {
  final String _key;

  OnboardingStorable(this._key);

  @override
  get key => _key;
}
```

In this implementation, `OnboardingStorable` takes a `_key` parameter in its constructor, allowing each instance to use a unique key for storage.

