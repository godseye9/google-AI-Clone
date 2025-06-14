# 🛠️ React Google AI cloud Replica App

This is a simple React application demonstrating how to redirect a user from the **Home page** to the **Dashboard** after clicking a **Sign In** button. It's built with **React**, and **React Router**.

### Install node modules

Run npm i command to install all the necessary node modules

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

my-app/
├── node_modules/
├── public/
│ ├── index.html
│ └── ...
├── src/
| ├── Assets/
| │ ├── aiBackground.svg
| │ ├── CardBackground.jpg
| │ ├── CardImageHover.jpg
| │ ├── CustomIcon.jsx
| │ ├── download.svg
| │ ├── filledChevron.jsx
| │ ├── googleAI.svg
| │ └── hatAI.jpg
| │
| ├── Components/
| │ ├── DashboardNav.jsx
| │ ├── Footer.jsx
| │ ├── Navbar.jsx
| │ ├── SeachInput.jsx
| │ ├── SettigsPanel.jsx
| │ └── SideBar.jsx
| │
| ├── Data/
| │ └── dummyData.js
| │
| ├── Pages/
| │ ├── Dashboard.jsx
| │ └── HomePage.jsx
│ ├── App.js
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json

## ✨ Features

- 📍 Home page with Sign In button
- 🔀 Navigation using React Router
- 🧭 Redirect to dashboard on click

## limitations or design deviations :

Few Icons couldn't be found and couldn't achieve mobile responsiveness due to time constraint

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
