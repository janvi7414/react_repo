import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamsComp from './components/ParamsComp';
import Courses from './components/Courses'
import Reports from './components/Reports'
import MockTests from './components/MockTests'
import RouteError from './components/RouteError';


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
      </div>,
      //nested routes 
      //use <Outlets> inside parent nav
      children:[
        //no / in path
        {
          path: 'courses',
          element: 
          <div>
            <Courses/>
          </div>
        },
        {
          path: 'reports',
          element: 
          <div>
            <Reports/>
          </div>
        },
        {
          path: 'mock-tests',
          element: 
          <div>
            <MockTests/>
          </div>
        }
      ]
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
    },
    {
      //this is to handle route other than above
      path: "*",
      element:<RouteError/>
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

    /*Navigation is used to go to the next page without reloading website this is using useNavigate() */
