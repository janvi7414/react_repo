import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamsComp from './components/ParamsComp';


//created routes
const route = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
     {
      path: "/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
     {
      path: "/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>
    },
    {
      // here text after /students/" " is called params or it is the value of id var as per ParamsComp 
      // this is route parameter or url parameter
      // query parameter 
      path: "/student/:id",
      element: 
      <div>
        <Navbar/>
        <ParamsComp/>
      </div>
    }
  ]
);

function App() {
 

  return (
  <div>
    <RouterProvider router={route}>
      <Navbar/>
    </RouterProvider>
  </div>
  )
}

export default App

/*latest we use createRouter DOM */

/*  step 1: import route dom as
           "import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';" 
           and run cmd "npm i react-router-dom" them "npm run dev"
    step 2: creating multiple routes
    step 3: provide context to the application using <RouterProvider></>
      */
