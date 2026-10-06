# Assignment 5: React Custom Hooks (`useFetch`)

## Overview
This project demonstrates the implementation of a custom React hook named `useFetch` to handle API data fetching, loading states, and error management cleanly and efficiently.

## Features
- **Custom Hook (`useFetch`)**: Encapsulates `useState` and `useEffect` to fetch data from any valid endpoint.
- **State Handling**: Dynamically manages `data`, `loading`, and `error` states.
- **UI Grid Component**: Displays photos/products in a clean dark-themed responsive layout.
- **API Endpoint**: Fetches data from `https://api.escuelajs.co/api/v1/products`.

## Folder Structure
```text
src/
 ├── useFetch.js  # Custom Hook logic
 ├── App.js        # Main UI Component
 ├── App.css       # Stylesheet
 └── index.js      # App Entry Point