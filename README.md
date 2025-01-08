# Movie Management Application

This project is a full-stack movie management application built with **NestJS** (backend), **Prisma** (ORM), and **React** (frontend). The app allows users to search for movies, view details, and manage a list of favorite movies.

## Features

- Search for movies using the **OMDb API**.
- Manage a list of favorite movies with **CRUD** operations.
- Database integration with **PostgreSQL** using **Prisma**.
- Modular backend with **NestJS**.
- React-based frontend with a clean and responsive UI.

## Technologies Used

- **NestJS**: Backend framework.
- **Prisma**: ORM for interacting with PostgreSQL.
- **React**: Frontend UI framework.
- **OMDb API**: Movie data API.
- **PostgreSQL**: Relational database.
- **Docker**: Containerization for the application.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (for managing dependencies)
- **Docker** (for running the database in containers)

## Getting Started

## Frontend
1.Install dependencies:

    npm install

2.Start the development server:

    npm start 


## Backend
    docker-compose up -d
    npm run db:dev:restart   # OR yarn db:dev:restart
    npm run start:dev        # OR yarn start:dev
