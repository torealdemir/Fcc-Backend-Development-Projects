# Exercise Tracker

This is the boilerplate for the Exercise Tracker project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker

Exercise Tracker API
This is a simple full-stack JavaScript exercise tracker API built using Node.js and Express.js. It allows users to create profiles, log their exercises, and view exercise logs with optional filtering by date range and limit.

Project Features:
Create new users.
Add exercises for users.
Retrieve a list of all users.
Retrieve a user's exercise log with support for date filtering and limiting results.
Technologies Used:
Node.js: JavaScript runtime environment.
Express.js: Web framework for handling API routes.
CORS: Middleware for cross-origin resource sharing.
dotenv: Loads environment variables from a .env file.
Installation:
Clone the repository:

bash
Kodu kopyala
git clone https://github.com/your-username/exercise-tracker.git
cd exercise-tracker
Install dependencies:

bash
Kodu kopyala
npm install
Create a .env file (optional, for port configuration):

plaintext
Kodu kopyala
PORT=3000
Start the server:

bash
Kodu kopyala
node index.js
Access the API:
The app runs on http://localhost:3000 (or the specified port in the .env file).

API Endpoints:
1. Create a New User
Endpoint: POST /api/users
Request Body:
json
Kodu kopyala
{ "username": "example_user" }
Response:
json
Kodu kopyala
{
  "_id": "1",
  "username": "example_user"
}
2. Get All Users
Endpoint: GET /api/users
Response:
json
Kodu kopyala
[
  {
    "_id": "1",
    "username": "example_user"
  }
]
3. Add an Exercise to a User
Endpoint: POST /api/users/:_id/exercises

Request Body:

json
Kodu kopyala
{
  "description": "Running",
  "duration": 30,
  "date": "2024-01-01"
}
Note: The date field is optional. If omitted, the current date will be used.

Response:

json
Kodu kopyala
{
  "_id": "1",
  "username": "example_user",
  "description": "Running",
  "duration": 30,
  "date": "Mon Jan 01 2024"
}
4. Get a User's Exercise Log
Endpoint: GET /api/users/:_id/logs

Query Parameters (optional):

from: Filter exercises from this date (format: yyyy-mm-dd).
to: Filter exercises up to this date (format: yyyy-mm-dd).
limit: Limit the number of exercises returned.
Example Request:

http
Kodu kopyala
GET /api/users/1/logs?from=2024-01-01&to=2024-01-10&limit=2
Response:

json
Kodu kopyala
{
  "_id": "1",
  "username": "example_user",
  "count": 2,
  "log": [
    {
      "description": "Running",
      "duration": 30,
      "date": "Mon Jan 01 2024"
    },
    {
      "description": "Swimming",
      "duration": 45,
      "date": "Wed Jan 03 2024"
    }
  ]
}
Testing the API:
You can use tools like Postman or cURL to test the endpoints.

License:
This project is licensed under the MIT License. Feel free to use and modify it as needed.