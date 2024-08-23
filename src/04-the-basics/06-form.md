---
title: Form
---

# Form

This documentation will guide you through creating and managing forms using the Velvet Framework. We'll start with simple concepts and gradually explore more advanced features, providing examples along the way.

## Creating a Form

To start building forms with the Velvet Framework, you need to understand the fundamental hooks provided: `useInput` and `useForm`. These hooks allow you to manage the state of individual input fields and the form as a whole.

### Example: Simple Form
Let's start with a basic example. Assume you want to create a login form with two fields: username and password.

```dart
typedef UseMyFormReturn = ({
  required UseTextInputReturn username,
  required UseTextInputReturn password,
  required UseFormReturn form,
});

UseMyFormReturn useMyForm() {
  final username = useTextInput(
    rules: [
      RequiredRule(), // A rule ensuring the input is not empty
    ],
  );

  final password = useTextInput(
    rules: [
      RequiredRule(),
      MinLengthRule(8), // Ensures password is at least 8 characters long
    ],
  );

  final form = useForm(
    [username, password], // List of input fields
    () async {
      // Perform login logic here
    },
  );

  return (
    username: username,
    password: password,
    form: form,
  );
}
```

### Implementing in a Widget

```dart
class LoginForm extends HookConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final (:form, :username, :password) = useMyForm();

    return Scaffold(
      appBar: AppBar(
        title: Text('Login Form'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              onChanged: username.onChanged,
              decoration: InputDecoration(
                labelText: 'Username',
                errorText: username.error.value,
              ),
            ),
            SizedBox(height: 16),
            TextField(
              onChanged: password.onChanged,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Password',
                errorText: password.error.value,
              ),
            ),
            SizedBox(height: 32),
            ElevatedButton(
              onPressed: form.submit,
              child: form.isSubmitting.value
                  ? CircularProgressIndicator(color: Colors.white)
                  : Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}
```

## The `useInput` Hook

The `useInput` hook is a fundamental building block for managing the state and validation of individual form inputs.
Wrapping it, it possibile to define another input hooks like `useTextInput`, `useCheckboxInput`, `useSelectInput`, etc.

For example, Velvet provides already a `useTextInput` hook that wraps the `useInput` hook and provides addionally a TextInputController.

### Usage

Here's how you can use the `useInput` hook in your form:

```dart
final username = useInput<String>(
  rules: [
    RequiredRule(), // Ensures the field is not empty
    MinLengthRule(3), // Ensures the input has at least 3 characters
  ],
);
```

This hook returns an object that includes:
- **value**: The current value of the input.
- **error**: Any validation error message.
- **isValid**: A boolean indicating if the current value passes all validation rules.
- **focusNode**: A focus node to manage focus.
- **validate**: A function to trigger validation manually.

### Options

The `useInput` hook accepts several options to customize its behavior:

- **`rules`**: A list of validation rules applied to the input.
- **`initialValue`**: The initial value of the input.
- **`name`**: A name for the input field, useful for debugging and error handling.
- **`options`**: An `InputOptions` object that controls behavior like when to validate or clear errors.

Example of using `InputOptions`:

```dart
final username = useInput<String>(
  rules: [
    RequiredRule(),
  ],
  options: InputOptions(
    shouldValidateOnChange: true, // Validates input on every change
    shouldClearErrorOnFocus: true, // Clears error when input gains focus
  ),
);
```

---

## The `useForm` Hook

The `useForm` hook manages the state and behavior of an entire form, including form submission, validation, and error handling.

### Usage

Here's an example of how to use the `useForm` hook:

```dart
final form = useForm(
  [username, password], // The inputs managed by the form
  () async {
    // Your form submission logic, e.g., calling an API
  },
  onSuccess: () {
    // Logic to execute after a successful submission
  },
);
```

The `useForm` hook returns:
- **`isSubmitting`**: A boolean indicating if the form is currently submitting.
- **`isValid`**: A boolean indicating if all inputs in the form are valid.
- **`submit`**: A function to trigger form submission.
- **`validate`**: A function to manually trigger validation on all inputs.

### Options

`useForm` also accepts an `options` parameter to configure its behavior:

- **`shouldValidateImmediately`**: Whether to validate all inputs as soon as the form is initialized.
- **`shouldValidateImmediatelyQuietly`**: If true, performs an initial validation without showing errors.

Example:

```dart
final form = useForm(
  [username, password],
  () async {
    // Form submission logic
  },
  options: FormOptions(
    shouldValidateImmediately: true, // Validates form on initialization
  ),
);
```

## Custom Input Validations

### Creating Custom Rules

In many cases, you’ll need to implement custom validation logic that goes beyond the standard rules. This is where custom rules come into play.

### Example of a Custom Rule

Here's an example of creating a custom validation rule that checks if a string contains a specific word:

```dart
class ContainsWordRule extends Rule<String> {
  final String word;

  ContainsWordRule(this.word);

  @override
  String? validate(String value) {
    if (!value.contains(word)) {
      return 'The input must contain the word $word.';
    }
    return null;
  }
}
```

You can then use this custom rule in your `useInput` hook:

```dart
final customInput = useTextInput(
  rules: [ContainsWordRule('flutter')],
);
```

## Handling Errors

### Exception Handling with ExceptionMatcher

Forms often need to handle errors that occur during submission or validation. The framework provides the `ExceptionMatcher` to manage this.

### Configuring ExceptionMatcher

You can configure `ExceptionMatcher` to catch specific exceptions and map them to user-friendly messages. For example:

```dart
final customInput = useTextInput(
  exceptionToMessageResolverFactories: [
    () => ExceptionToMessageResolver<FormatException>(
          (e) => 'Invalid format.',
        ),
  ],
);
```

This will resolve `FormatException` to a specific error message.

### Using Default ExceptionMatcher

By default, the framework provides a mechanism to match exceptions to messages using the `defaultInputExceptionMatcherFactory`. This can be customized in your `FormConfigContract` implementation.

## Customizing Form Behavior

### FormOptions for Custom Behavior

`FormOptions` provides ways to customize form behavior, such as whether to validate immediately or validate quietly:

```dart
final form = useForm(
  [username, password],
  submitForm,
  options: FormOptions(
    shouldValidateImmediately: false,
    shouldValidateImmediatelyQuietly: true,
  ),
);
```

- `shouldValidateImmediately`: Controls if the form should validate all inputs as soon as it's created.
- `shouldValidateImmediatelyQuietly`: When set to true, the validation is done without showing error messages.

## Debugging Forms

### Precompiled Values

For debugging purposes, you can initialize forms with precompiled values. This can be configured in your `FormConfigContract` implementation.

```dart
class CustomFormConfig implements FormConfigContract {
  @override
  Map<String, dynamic> get precompiledValues => {
    'username': 'debug_user',
    'password': 'debug_pass',
  };
}
```

This allows the form fields to be initialized with these values when debugging.

### Handling Exceptions

You can customize how exceptions are handled by overriding the `defaultInputExceptionMatcherFactory` method in your `FormConfigContract` implementation
or by providing a custom implementation of `ExceptionMatcher` in the useForm hook.

```dart
@override
ExceptionMatcherFactory get defaultInputExceptionMatcherFactory =>
  (exceptionToMessageResolverFactories, error) {
    return (exception) {
      if (kDebugMode) {
        print('Exception caught: $exception');
      }
      // Handle exception as usual
    };
  };
```

This will print exceptions to the console in debug mode.

## Clearing and Resetting Forms

### Clearing Errors on Input Change

You can configure inputs to automatically clear errors when the user starts typing again by setting `shouldClearErrorOnChange` in `InputOptions`:

```dart
final input = useTextInput(
  options: InputOptions(shouldClearErrorOnChange: true),
);
```

### Resetting Form State

If you need to reset the form to its initial state, including clearing all inputs and errors, you can implement a reset function:

```dart
void resetForm() {
  username.value.value = '';
  password.value.value = '';
  form.validate(quietly: true);
}
```

This function clears all inputs and re-validates the form quietly, ensuring the form returns to its initial state.
