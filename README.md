# VetClinic API

## Description

This is an API for managing tutors and their pets. It was developed using Node.js, Express, TypeScript, and MongoDB. The API allows you to create, read, update, and delete tutors and pets, associating pets with their respective tutors. This API is for educational purposes.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Build the app:

    ```bash	
    npm run build
    ```

4. Create a `.env` file in the root directory of the project and add the following environment variables (see .env-example for help):

    ```env
    PORT=your-port
    MONGODB_URI=your-mongodb-uri
    ```

## Running the Application

1. Start the application:

    ```bash
    npm run start
    ```

2. The server will start on `http://localhost:your-port` (the default value for port is 3000). You can access the API documentation at `http://localhost:your-port/api-docs`.

## API Endpoints

## Tutors Endpoints

### Create a Tutor

- **URL:** `POST /api/v1/tutor`
- **Description:** Creates a new tutor.
- **Request Body:**

    ```json
      {
      "name": "Tutor Name",
      "phone": "123456789",
      "email": "email@example.com",
      "birthDate": "1999-01-01",
      "cep": "12345-678"
    }
    ```

### Get All Tutors

- **URL:** `GET /api/v1/tutors`
- **Description:** Returns and displays all tutor information.

### Update Tutor

- **URL:** `PATCH /api/v1/tutor/:id`
- **Description:** Updates a tutor's information.
- **Request Body (Example):**

    ```json
      {
      "name": "Tutor Name",
      "phone": "123456789",
      "email": "email@example.com",
      "birthDate": "1999-01-01",
      "cep": "12345-678"
    }
    ```

### Delete Customer

- **URL:** `DELETE /api/v1/tuor/:id`
- **Description:** Deletes a tutor by ID.
- **Response:** `204 No Content`

## Pets Endpoints

### Create a Pet

- **URL:** `POST /api/v1/pet/:tutorId`
- **Description:** Creates a new pet.
- **Request Body:**

    ```json
      {
      "name": "Pet Name",
      "species": "Dog",
      "carry": "M",
      "weight": "3",
      "birthDate": "2012-01-01"
    }
    ```

### Update Pet

- **URL:** `PATCH /api/v1/pet/:petId/tutor/:tutorId`
- **Description:** Updates a pet's information.
- **Parameters:**
  - 'petId': Id of the pet to be updated
  - 'tutorId': Id of the tutor
- **Request Body (Example):**

    ```json
      {
      "name": "Pet Name",
      "species": "Dog",
      "carry": "M",
      "weight": "3",
      "birthDate": "2012-01-01"
    }
    ```

### Delete Pet

- **URL:** `DELETE /api/v1/pet/:petId/tutor/:tutorId`
- **Description:** Deletes a pet by ID.
- **Parameters:**
  - 'petId': Id of the pet to be updated
  - 'tutorId': Id of the tutor
- **Response:** `204 No Content`
