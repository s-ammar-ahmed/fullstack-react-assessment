# React-Redux User Management App

This is a React application utilizing Redux for state management. It allows users to be added, updated, or deleted. The app also features a multi-step form, lazy loading for components, and data fetching from an external API.

### Features:

- **User Management**: Add, update, and delete users.
- **Multi-step Form**: Collect user input in a step-by-step process.
- **Lazy Loading**: Lazy-load components for better performance.
- **API Data Fetching**: Fetch data from an external API and display it in a list.

## Setup

### 1. **Install Dependencies**

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 2. **Run the Application**

To start the development server:

```bash
npm start
```

### 3. **File Structure Overview**

- **App.js**: Main component that sets up routing.
- **store.js**: Configures the Redux store and reducers.
- **userSlice.js**: Redux slice for managing user actions.
- **ApiList.js**: Fetches and displays data from an API.
- **UserList.js**: Displays and manages the list of users (add, edit, delete).
- **MultiStepForm.js**: A multi-step form for user input.
- **LazyComponent.js**: A component demonstrating lazy loading.

### 4. **Key Components**

- **ApiList**: Fetches and displays paginated data from a JSON placeholder API.
- **UserList**: Displays users with edit and delete functionality.
- **MultiStepForm**: A step-by-step form that adds new users.
- **LazyComponent**: Demonstrates lazy-loading an image component.

### 5. **Routes**

The app uses React Router for navigation with the following routes:

- `/`: Displays API data.
- `/users`: Displays a list of users and provides management options.
- `/form`: Displays a multi-step form to add a user.
- `/lazy`: Demonstrates lazy loading of components.

## Conclusion

This app showcases essential features like user management, multi-step forms, lazy loading, and API interaction. It is a good starting point for understanding state management using Redux in React.
