# ToDo App using React

This repository contains a ToDo App built using React. The app allows users to add, edit, and delete ToDo plans. It interacts with a backend server to manage the ToDo plans.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
  - [Displaying ToDo Plans](#displaying-todo-plans)
  - [Adding ToDo Plans](#adding-todo-plans)
  - [Editing and Deleting ToDo Plans](#editing-and-deleting-todo-plans)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Backend Server](#backend-server)
- [Getting Started with Create React App](#getting-started-with-create-react-app)

## Introduction

The "ToDo App using React" project demonstrates the creation of a ToDo application using the React framework. The app communicates with a backend server to perform CRUD (Create, Read, Update, Delete) operations on ToDo plans. Users can view, add, edit, and delete plans within the application.

## Features

### Displaying ToDo Plans

The app fetches ToDo plans from the backend server when loaded. The fetched plans are displayed using the `DisplayTodos` component.

### Adding ToDo Plans

Users can add new ToDo plans using the `AddToDo` component. The plans are sent to the backend server for storage.

### Editing and Deleting ToDo Plans

Users can edit and delete existing ToDo plans. The `editItem` function allows users to edit plans, and the `deleteItem` function allows users to delete plans. Changes are reflected on the backend server.

## Usage

1. Ensure that you have the necessary dependencies installed.
2. Open the terminal and navigate to the project directory.
3. Run the application using the command: `npm start`.
4. The app will be accessible at `http://localhost:3000`.

## Code Explanation

The provided React code showcases how to create a ToDo app using React components and state management. Key functions include:

- Fetching ToDo plans from the backend using the `fetch` API.
- Adding new plans using the `addItem` function.
- Editing existing plans using the `editItem` function.
- Deleting plans using the `deleteItem` function.

The app is structured with components like `AddToDo` for adding plans and `DisplayTodos` for displaying plans. The `useState` and `useEffect` hooks are used for state management and fetching data.

## Backend Server

The backend server for this ToDo app should include endpoints for performing CRUD operations on ToDo plans. The server should handle requests to fetch, add, edit, and delete plans. Ensure that the backend server is up and running before using the app.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
