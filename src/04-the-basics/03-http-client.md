---
title: Velvet Http
---

# HTTP Client

Velvet provides a HTTP client built on top of Dio, offering a structured approach to making HTTP requests and handling responses. By encapsulating requests and responses within classes, Velvet simplifies API interactions and enforces a clear contract for request structure and response handling.

::: info
Velvet’s HTTP client is built on top of Dio, a powerful HTTP client for Dart and Flutter. Dio provides a rich set of features, including interceptors, request cancellation, and response parsing, which are leveraged by Velvet to enhance the HTTP client’s capabilities.

For more information on Dio, refer to the [Dio documentation](https://pub.dev/packages/dio).
:::

## Making Requests

Each HTTP request in Velvet is represented by a class that extends `VelvetHttpRequest<Parsed, Raw>`. This class defines the specifics of the request, including the path, method, and how to map the response data.

### Request Structure

Classes extending `VelvetHttpRequest<Parsed, Raw>` must define the following:

The `Parsed` type represents the desired object type to be returned from the request, while the `Raw` type represents the raw response data type.
For example, if the response is a list of `Product`, the `Parsed` type would be `List<Product>`, and the `Raw` type would be `List<Map<String, dynamic>>`.

```dart
class ProductGetAllHttpRequest<List<Product>>, List<Map<String, dynamic>> {
  //
}
```

of course, the `Parsed` and `Raw` types can be any type you want and to make it more clear, you can define them as a separate type or use some existing class that extends `VelvetHttpRequest<Parsed, Raw>`, for example the `VelvetHttpRequestHandlingListResponse<T>` or `VelvetHttpRequestHandlingMapResponse<T>`.

```dart
class ProductGetAllHttpRequest extends VelvetHttpRequestHandlingListResponse<Product> {
  //
}
```

- **`rawPath`**: The endpoint path for the request.
- **`method`**: The HTTP method to be used (e.g., GET, POST).
- **`itemMapper`**: A function that maps the response data to the desired object.

**Example:**

```dart
class UserMeShowHttpRequest
    extends VelvetHttpRequestHandlingMapResponse<User> {
  UserMeShowHttpRequest();

  @override
  String get rawPath => '/v1/users/me';

  @override
  HttpRequestMethodEnum get method => HttpRequestMethodEnum.get;

  @override
  get itemMapper => User.fromJson;
}
```

## Handling Responses

Responses are managed using the `HttpResponse` class, which wraps the raw response from Dio and provides methods to convert it into the desired object. This class also manages exceptions related to response parsing.

**Usage Example:**

```dart
final response = await httpClient.request(UserMeShowHttpRequest());
final parsed = response.toObject();
```

### Response Parsing

The `toObject` method of `HttpResponse` converts the response into a typed object and handles parsing errors, providing detailed debug information if needed.

## Custom Handling and Bad Responses

Velvet supports custom request and response handling through two key interfaces:

- **`HttpRequestCustomHandlingContract`**: Implement this interface for custom handling of request responses, allowing you to define non-standard response management.

- **`HttpRequestBadResponseHandlerContract`**: Use this interface to handle bad responses (e.g., HTTP errors) for specific requests, enabling custom error handling strategies.

**Example:**

```dart
class CustomHttpRequest
    extends HttpRequestContract<CustomResponseType, Map<String, dynamic>>
    implements HttpRequestCustomHandlingContract<CustomResponseType, Map<String, dynamic>> {
  
  @override
  HttpResponse<CustomResponseType, Map<String, dynamic>> handle(
    Dio dio,
    Options options,
  ) {
    // Custom handling logic here
  }
}
```

## Exception Handling

The `Http` class manages exceptions during requests using a default exception handler but also allows for custom exception handling for individual requests.

**Example:**

```dart
HttpRequestException _handleException(
  HttpRequestContract request,
  DioException exception,
) {
  return _exceptionHandler.handleException(request, exception);
}
```

## List of Available Classes Extending `HttpRequestContract`

Velvet includes various classes that extend `HttpRequestContract`, each tailored for different response types and request handling needs:

- **`HttpRequestListContract<T>`**: For requests returning a list of items. It maps each item in the list to a specified type.
- **`HttpRequestMapContract<T>`**: For requests returning a map of key-value pairs. It maps the response to a specified type using a provided function.
- **`HttpRequestNoContentContract<T>`**: For requests that do not return any content. Useful for DELETE, POST, PUT, or PATCH requests where no response body is expected.

These classes facilitate the handling of various response structures and ensure that requests are managed consistently.
