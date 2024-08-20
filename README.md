# DailyDocket

## Overview

DailyDocket is a full-stack web application designed to help users manage their tasks efficiently. Built with Django REST Framework for the backend and React for the frontend, this application provides a seamless experience for creating, listing, updating, and deleting tasks. It also includes basic user authentication for secure access.

## Features

- **Task Creation:** Users can create new tasks with a title, description, and optional due date.
- **Task Listing:** Users can view all tasks and filter them by status (completed or incomplete) and due date.
- **Task Updating:** Users can edit existing tasks to update their title, description, due date, and status.
- **Task Deletion:** Users can delete tasks they no longer need.
- **Search Functionality:** Users can search tasks by title or description.
- **Authentication:** Basic user authentication to ensure secure access.

## Backend

### API Endpoints

1. **Create a Task**

   - **Endpoint:** `/tasks/`
   - **Method:** POST
   - **Parameters:**
     - `title` (required): The title of the task.
     - `description` (optional): A description of the task.
     - `due_date` (optional): The due date of the task in `YYYY-MM-DD` format.

2. **List Tasks**

   - **Endpoint:** `/tasks/`
   - **Method:** GET
   - **Optional Parameters:**
     - `status`: Filter tasks by status (`completed` or `incomplete`).
     - `due_date`: Filter tasks by due date in `YYYY-MM-DD` format.

3. **Update a Task**

   - **Endpoint:** `/tasks/<task_id>/`
   - **Method:** PUT
   - **Parameters:**
     - `title` (optional): The title of the task.
     - `description` (optional): A description of the task.
     - `due_date` (optional): The due date of the task in `YYYY-MM-DD` format.
     - `status` (optional): Update the status of the task (boolean).

4. **Delete a Task**
   - **Endpoint:** `/tasks/<task_id>/`
   - **Method:** DELETE

### Data Model

- `id`: Unique identifier for the task.
- `title`: Title of the task.
- `description`: Description of the task.
- `due_date`: Due date of the task.
- `status`: Boolean indicating if the task is completed.

### Authentication

The application uses Django's built-in authentication system for basic user authentication. Users must log in to access task management features.

## Frontend

### User Interface

- **Task List View:** Displays all tasks with their title, description, due date, and status.
- **Task Management:** Allows users to add new tasks, edit existing tasks, and mark tasks as completed or incomplete.
- **Search Functionality:** Enables users to filter tasks based on title or description.

### State Management

The frontend uses React's state management to handle and update the list of tasks dynamically.

### API Integration

The frontend communicates with the backend through API calls to perform CRUD operations:

- **Fetch Tasks:** Retrieve the list of tasks from the backend.
- **Create Task:** Send a request to add a new task.
- **Update Task:** Send a request to update an existing task.
- **Delete Task:** Send a request to remove a task.

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Foxtrot-14/ToDo.git
   cd ToDo
   ```

2. **Backend Setup**

   - Navigate to the backend directory.

   ```bash
   cd todobackend
   ```

   - Create a virtual environment and install dependencies:
     ```bash
     python3 -m venv env
     source env/bin/activate  # On Windows use `venv\Scripts\activate`
     pip install -r requirements.txt
     ```
   - Run migrations and start the server:
     ```bash
     python3 manage.py migrate
     python3 manage.py runserver
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory.
   ```bash
   cd UI
   ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
