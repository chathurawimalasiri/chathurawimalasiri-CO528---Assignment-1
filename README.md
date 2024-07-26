# CO528---Assignment-1

# Student Management System

## Overview
The Student Management System is a Node.js-based application that allows users to manage student data. It provides a REST API for creating, reading, updating, and deleting student records. The system is designed with MongoDB for database management and Docker for containerization, ensuring a scalable and reproducible development environment.

## Features
- CRUD Operations: Create, read, update, and delete student records.
- Dockerized: Easily deploy and run the application using Docker.
- API Documentation: Simple and well-documented REST API for integration.

## Tech Stack
- Backend: Node.js
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
   git clone https://github.com/chathurawimalasiri/CO528---Assignment-1.git
   cd  CO528---Assignment-1
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
```

3. Access the Application.
   Open your browser and navigate to http://localhost:8080 to interact with the API.