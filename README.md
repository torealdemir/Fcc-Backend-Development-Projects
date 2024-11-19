# Request Header Parser Microservice

This is the boilerplate for the Request Header Parser Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice

# Request Header Parser Microservice

This project is a Request Header Parser Microservice for freeCodeCamp. It is built using Node.js, Express, and other essential dependencies. The goal of this microservice is to extract information from incoming HTTP request headers and return that data as a JSON response.

## Features
- Extracts and returns the user's IP address
- Extracts and returns the user's preferred language
- Extracts and returns the user's software details (from the `User-Agent` header)
- Supports CORS (Cross-Origin Resource Sharing) for remote testing by freeCodeCamp

## Endpoints

### `/api/hello`
Returns a simple greeting.

**Response:**

```json
{
  "greeting": "hello API"
}
