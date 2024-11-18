# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

# Timestamp Microservice

This project is a **Timestamp Microservice** built as part of the [freeCodeCamp Backend Development Projects](https://www.freecodecamp.org/learn/). The microservice accepts a date as a parameter in different formats and returns the corresponding Unix timestamp and UTC string.

## Features

- **Date Parsing**: Supports both Unix timestamps and date strings.
- **API Endpoints**:
  - **GET /api/:date**: Accepts a Unix timestamp or date string and returns a JSON object containing the Unix timestamp and the UTC string.
  - **GET /api**: Returns the current Unix timestamp and UTC string.

## Installation

To run the project locally, follow these steps:

### 1. Clone the Repository
Clone the repository using the following command:

git clone https://github.com/torealdemir/Fcc-Backend-Development-Projects.git

### 2. Switch to the `timestamp-microservice` Branch
Navigate to the repository and switch to the `timestamp-microservice` branch:

cd Fcc-Backend-Development-Projects
git checkout timestamp-microservice

### 3. Install Dependencies
Make sure you have Node.js installed, then run the following command to install the required dependencies:

npm install

### 4. Start the Application
Run the application with the following command:

npm start

By default, the server will be hosted at `http://localhost:3000`.

## API Usage

### 1. **GET /api/:date**

Send a request with either a Unix timestamp or a valid date string to receive the corresponding Unix timestamp and UTC time.

- **Request Example (Unix Timestamp):**

  GET /api/1451001600000

  **Response:**

  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }

- **Request Example (Date String):**

  GET /api/December%2025%2C%202015

  **Response:**

  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }

### 2. **GET /api**

Send a request without any date to receive the current Unix timestamp and UTC time.

- **Request Example:**

  GET /api

  **Response:**

  {
    "unix": 1634626800000,
    "utc": "Sun, 17 Oct 2021 15:00:00 GMT"
  }

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
