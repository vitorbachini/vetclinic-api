# VetClinic API

### Description

This is an API for managing tutors and their pets. It was developed using Node.js, Express, TypeScript, and MongoDB. The API allows you to create, read, update, and delete tutors and pets, associating pets with their respective tutors. This API is for educational purposes.

### Prerequisites

To run this project on your computer, you need to have these applications installed.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

First you need to clone this repository [here](https://github.com/vitorbachini/vetclinic-api.git).

Set up your MongoDB Instace [here](https://cloud.mongodb.com/).

Create an .env file and add your variables. (.env-example for help).

Then you need to:

### Install all dependencies

npm install

### Build the app

npm run build

### Run the app

npm run start

## API Documentation

The API documentation is generated using Swagger and can be accessed at 
`http://localhost:3000/api-docs`. (you need to change the PORT if not using 3000)

## API Endpoints

### Tutors

#### POST /tutor

Create a new tutor.

- #### Requisition 

- ##### Requisiton Body (JSON)
{
  "name": "Tutor Name",
  "phone": "123456789",
  "email": "email@example.com",
  "birthDate": "1999-01-01",
  "cep": "12345-678"
}

#### GET /tutors

Get all tutors.

#### PATCH /tutor/:tutorId

- #### Parameters
- 'tutorId': Id of the tutor to be updated

- ##### Requisiton Body (JSON)
{
  "email": "email@example.com"
} (any property can be passed)

#### DELETE /tutor/:tutorId

- #### Parameters
- 'tutorId': Id of the tutor to be deleted

### Pets

#### POST /pet/:tutorId

Create a new pet and associate with a tutor.

- #### Parameters
- 'tutorId': Id of the tutor responsable for the pet

- #### Requisition 

- ##### Requisiton Body (JSON)
{
  "name": "Pet Name",
  "species": "Dog",
  "carry": "M",
  "weight": "3",
  "birthDate": "2012-01-01"
}

#### PATCH /pet/:petId/tutor/:tutorId

- #### Parameters
- 'petId': Id of the pet to be updated
- 'tutorId': Id of the tutor

- ##### Requisiton Body (JSON)
{
  "name": "Example"
} (any property can be passed)

#### DELETE /pet/:petId/tutor/:tutorId

- #### Parameters
- 'petId': Id of the pet to be deleted
- 'tutorId': Id of the tutor

## Project Structure

├── src
│   ├── controllers      # API Controllers
│   ├── db               # Database
│   ├── middlewares      # Middlewares
│   ├── models           # Mongoose Models
│   ├── routes           # Api Routes
│   ├── validation       # JOI Validations
│   ├── app.ts           # App Configuration
│   ├── server.ts        # Server Configuration
│   ├── swagger.json     # Swagger Configuration
└── package.json         # NPM and Scripts Configuration
