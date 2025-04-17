# Task Manager API

A RESTful API for managing tasks with user authentication and authorization.

## Features

- **User Authentication**: Register and login with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Authorization**: Users can only access and modify their own tasks
- **Error Handling**: Comprehensive error responses

## Technologies Used

- **Node.js** & **Express.js**: Server framework
- **PostgreSQL**: Database
- **pg-promise**: PostgreSQL interface
- **Passport.js**: Authentication middleware
- **JWT**: JSON Web Tokens for secure authentication
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager-api.git
cd task-manager-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up PostgreSQL database:
```sql
CREATE DATABASE TasksBackend;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  image_url VARCHAR(255),
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  priority VARCHAR(20),
  status VARCHAR(20),
  image_url VARCHAR(255),
  date TIMESTAMP,
  additional_notes TEXT,
  deadline TIMESTAMP
);
```

4. Create a `.env` file in the root directory:
```
PORT=3001
SECRET=YourSecretKeyHere
```

5. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/Login` | Login and get JWT token |

### Users

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | `/users` | Get all users | Required |
| GET | `/users/:id` | Get user by ID | Not Required |

### Tasks

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| GET | `/tasks` | Get all tasks | Not Required |
| GET | `/tasks/:id` | Get tasks by user ID | Required + Owner |
| POST | `/tasks` | Create a new task | Required |
| PUT | `/tasks/:id` | Update a task | Required + Owner |
| DELETE | `/tasks/:id` | Delete a task | Required + Owner |

## Authentication

This API uses JWT for authentication. When logging in, you'll receive a token that should be included in subsequent requests as a Bearer token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

## Project Structure

```
backend/
├── Config/             # Configuration files
│   ├── auth.js         # Authentication middleware
│   ├── database.js     # Database connection
│   └── passport.js     # Passport JWT strategy
├── controllers/        # Route controllers
├── models/             # Database models
├── routes/             # API routes
├── .env                # Environment variables
└── app.js              # Main application file
```

## Error Handling

The API provides consistent error responses:

```json
{
  "success": false,
  "error": "Error message"
}
```

Successful responses follow this pattern:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

## Frontend Integration

To connect your frontend to this API:

1. Use Axios or Fetch API for requests
2. Store the JWT token in localStorage after login
3. Include the token in the Authorization header for authenticated requests
4. Handle different HTTP status codes for appropriate user feedback

## License

[MIT License](LICENSE)
