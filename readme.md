# Hotel and Residence Marketplace API

## Description

This project is an API for a marketplace of hotels and residences, built using NestJS and following the principles of Clean Architecture.

## Project Structure

The project is organized according to the Clean Architecture by Uncle Bob (Robert C. Martin), with clear separation of concerns between different layers:

```
src
├── application
│ ├── dtos
│ ├── interfaces
│ └── use-cases
├── domain
│ ├── entities
│ └── repositories
├── infrastructure
│ ├── database
│ ├── repositories
│ └── services
├── presentation
│ ├── controllers
│ └── interceptors
└── main.ts
```


## Installation

1. Clone the repository:

```sh
git clone https://github.com/anse-dev/hotel-residence-marketplace.git

cd hotel-residence-marketplace

```
2. Install dependencies:

```
npm install

```
3. Create a .env file at the root of the project to store environment variables such as database connection details.
`env`

## Running the Application

```
npm run start
```

The API will be available at http://localhost:3000.