import React from 'react'
import Movies from './component/Movies/Movies'
import Register from './component/Register/Register'
import Login from './component/Login/Login'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import PageNotFound from './component/PageNotFound/PageNotFoud';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function App() {
  
  const routes = createBrowserRouter ([
    {path : '', element : <Layout />,
  children: [
    {index: true , element : <Home />},
    {path : 'Movies' , element :<Movies />},
    {path : 'Register' , element :<Register />},
    {path : 'Login' , element :<Login />},
    {path : '*' , element :<PageNotFound />} 
  ]
  }])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
