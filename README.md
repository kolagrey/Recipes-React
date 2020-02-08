# Recipes By Dolapo Grey (Demo Purposes Only)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Then

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />


## State Management & Offline Storage

### Redux & Redux Thunk

State management is Redux with Redux Thunk for async actions. However, the recipe page uses local state, with axios call to the Recipes API if offline data is not available. 

### Local Storage
I implemented "offline storage" using localStorage. You can hook anything you want to replace local storage or write your own just for kicks :-P


## UI

Designed using [Bulma](https://bulma.io).