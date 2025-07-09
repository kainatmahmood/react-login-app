# React Login App

A simple React application demonstrating user login, authentication, protected routes, and session management using localStorage.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [How It Works](#how-it-works)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Overview

This React Login App provides a straightforward login system with authentication. It uses React Router for navigation and protects routes to ensure only logged-in users can access certain pages. The login state persists across page refreshes by saving it in the browser’s localStorage.

This project is ideal for beginners learning about React authentication and route protection.

---

## Features

- User login with username and password  
- Form validation and error handling  
- Authentication state saved in localStorage  
- Protected routes accessible only to authenticated users  
- Redirects unauthorized users to the login page  
- Simple logout functionality  
- Responsive and clean user interface  

---

## Technologies Used

- React  
- React Router DOM  
- JavaScript (ES6+)  
- HTML5 & CSS3  
- localStorage API  

---

## Installation

1. Clone the repository:
   
   git clone https://github.com/kainatmahmood/react-login-app.git
   
2.Navigate into the project directory: 

cd react-login-app

3.Install the dependencies:

npm install

4.Start the development server:

npm run dev

5.Visit the app in your browser:

http://localhost:3000

## Usage
Enter a username and password to log in.

After successful login, you'll be redirected to a protected page.

The login state is saved using localStorage, so the user stays logged in even after refreshing the page.

To log out, click the logout button, which will remove the login data and redirect you to the login page.

Note: This app uses hardcoded credentials for demo purposes. You can edit the credentials or extend the app with real authentication logic later.

## Folder structure
react-login-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md

## How It Works
Login.jsx
Contains the login form UI, handles input states, and stores the login status in localStorage.

ProtectedRoute.jsx
Checks if the user is logged in. If not, it redirects them to the login page. Otherwise, it renders the protected content.

Navbar.jsx
Displays navigation links, and conditionally shows the vendor/admin page based on user role (if implemented).

App.jsx
Sets up routing using React Router. Wraps secure pages with ProtectedRoute.

localStorage
Used to store and persist the login state (loggedIn = true), which keeps the user logged in until logout.

## License
This project is licensed under the MIT License.
See the LICENSE file for more information.
