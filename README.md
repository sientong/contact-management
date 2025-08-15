# Contact Management System

A simple Node.js application for managing contacts using Redis and JWT. Redis is used to store token which provides a fast and efficient way to handle user sessions, while JWT (JSON Web Tokens) is used for secure authentication.

## Features

- Add, update, delete, and view contacts.
- Search contacts by name or email.
- RESTful API endpoints for integration.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/contact-management.git
    ```
2. Navigate to the project directory:
    ```bash
    cd contact-management
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Access the application at `http://localhost:3000`.

## Scripts

- `npm start` - Start the application.
- `npm test` - Run tests.
- `npm run dev` - Start the application in development mode.

## API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | /api/contacts  | Get all contacts     |
| POST   | /api/contacts  | Add a new contact    |
| PUT    | /api/contacts/:id | Update a contact |
| DELETE | /api/contacts/:id | Delete a contact |