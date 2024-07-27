# CO528---Assignment-1

# Student Management System

## Overview
The Student Management System is a full-stack application that allows users to manage student data. The backend is built with Node.js and provides a REST API for creating, reading, updating, and deleting student records. The frontend, built with React, offers an intuitive user interface for interacting with the backend services. MongoDB is used for database management, and Docker is used for containerization, ensuring a scalable and reproducible development environment.

<img src="https://wpschoolpress.com/wp-content/uploads/2023/03/student-management-system.png" alt="Student Management System" width="500"/>

## Features
- CRUD Operations: Create, read, update, and delete student records.
- Dockerized: Easily deploy and run the application using Docker.
- API Documentation: Simple and well-documented REST API for integration.
- Frontend Interface: User-friendly React-based UI for managing students.

## Tech Stack
- Backend: Node.js
- Frontend: React
- Database: MongoDB
- Containerization: Docker
- Environment Management: dotenv

## Getting Started
To get started with the Student Management System, follow these steps:

### Prerequisites
- Docker
- Docker Compose

### Clone the Repository
```bash
   git clone https://github.com/chathurawimalasiri/chathurawimalasiri-CO528---Assignment-1
   cd  chathurawimalasiri-CO528---Assignment-1
```
### Docker Setup

1. Build and Run the Application.
```bash
   docker-compose up --build
```

2. Check the Log to ensure that both services are running correctly.
```bash
   docker-compose logs app
   docker-compose logs mongo
   docker-compose logs frontend
```

3. Access the Application.
   Open your browser and navigate to http://localhost:8080 to interact with the API.
   
4. Stop the Application
```bash
   docker-compose down
```  
### Note:
Using `docker-compose down` is a good practice because it stops and removes all containers, networks, and volumes defined in your `docker-compose.yml`, ensuring a clean and consistent environment. This prevents resource wastage, avoids network and port conflicts, and maintains an isolated and controlled development setup, making it easier to debug, test, and manage your application effectively.

## Directory Structure

```
   chathurawimalasiri-CO528---Assignment-1/
      ├── backend/
      │   ├── server.js
      │   ├── .env
      │   ├── config/
      │   │   └── db.js
      │   ├── models/
      │   │   └── student.js
      │   ├── routes/
      │   │   └── students.js
      │   ├── package.json
      │   └── Dockerfile
      ├── frontend/
      │   ├── src/
      │   │   ├── components/
      │   │   ├── App.js
      │   │   ├── index.js
      │   ├── public/
      │   ├── package.json
      │   └── Dockerfile
      ├── .dockerignore
      └── docker-compose.yml
```
