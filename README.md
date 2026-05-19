# Employee Management System

A full-stack Employee Management application built with the MERN stack (MongoDB, Express, React, Node.js) and Vite. This application allows users to create, view, edit, and manage employee records.

## Tech Stack

### Backend
- **Node.js** & **Express**: For building the RESTful API server.
- **MongoDB** & **Mongoose**: For the database and object data modeling.
- **Bcryptjs**: For secure password hashing (if authentication is present).
- **Cors** & **Dotenv**: For cross-origin resource sharing and environment variable management.

### Frontend
- **React 19** & **Vite**: For a fast and modern frontend development experience.
- **Tailwind CSS**: For utility-first styling and responsive UI.
- **React Router**: For handling client-side routing.
- **React Hook Form**: For efficient and flexible form validation.
- **Zustand**: For lightweight state management.
- **Axios**: For making API requests to the backend.

## Project Structure

The repository contains two main directories:
- `backend/` - Contains the Express server, Mongoose models, and API routes.
- `frontend/` - Contains the React UI, components, and state management logic.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running locally or a MongoDB Atlas connection string.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with your environment variables (e.g., `PORT`, `MONGO_URI`).
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Usage

After starting both servers, navigate to the frontend URL provided by Vite (typically `http://localhost:5173`) in your browser to interact with the Employee Management System.
