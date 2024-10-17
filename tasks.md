# Tasks

## Tips and tricks

- Do not use generative AI for this task to improve your understanding of the topic.
- Implement the tasks in separate feature branches and practice atomic commits.
- If you stuck, feel free to check the background material sections of the in class repositories.
- Query string's params are always strings, but if you create a proper validation it will be converted to numbers if possible.
- You can use either separate type declarations for the routes or the `json-schema-to-ts` type provider.
- If you use the type provider and create a proper schema but the given request property's type is `unknown`, it means that something is wrong with the schema or the type provider is not installed. You can check the schema in an online JSON schema validator.

## Task 1: Create a calculator

Create one endpoint that can handle multiple calculations.

- `GET /api/calculator/basic/add`
- `GET /api/calculator/basic/subtract`
- `GET /api/calculator/basic/multiply`
- `GET /api/calculator/basic/divide`

All endpoints use the query parameters to provide the two operands: `a` and `b`.

The response's body should be a JSON string in this form (example):

```json
{
  "operands": [3, 5],
  "operator": "+",
  "result": 8 
}
```

If the operands are not numbers or `a` or `b` is missing return a `400` 
response code with the Fastify's built-in validation error message.

Make sure you provide the proper reply scheme (serialization).

Taking into account the separation of concerns clean coding principle,
how would you organize the calculation logic?

Taking into account the separation of concerns clean coding principle,
how would you organize JSON schema declarations?

Optionally you can create tests for the endpoints.

## Task 2: Add average

Extend our calculator with some advanced features.

Create a new endpoint:

- POST /api/calculator/advanced/average

The body of the calculator should looks like this (example):

```json
{
  "items": [1, 2, 3]
}
```

If the items are not an array of numbers, respond with `400` status code
with the Fastify's built-in validation error message.

If the operands in the path are not one of `add`, `subtract`, `multiple`, `divide`
respond with `400` status code with the Fastify's built-in validation error message.

The response's body should be a JSON string in this form (example):

```json
{
  "items": [1, 2, 3],
  "average": 2
}
```

Make sure you provide the proper reply scheme (serialization).

Take care of the separation of concerns clean coding principle.

Optionally you can create tests for the endpoints.

