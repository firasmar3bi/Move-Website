import React, { useEffect, useState } from 'react'
import Movies from './component/Movies/Movies'
import Register from './component/Register/Register'
import Login from './component/Login/Login'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import PageNotFound from './component/PageNotFound/PageNotFoud';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import jwt from 'jwt-decode'
import ProtectedRouting from './component/protectedrouter/protectedrouter'

export default function App() {
  
  let [users , setUser] = useState(null)
  function getToken(){
    let token = localStorage.getItem('token');
    let decode = jwt(token)
    setUser(decode)
  }
  const routes = createBrowserRouter ([
    {path : '', element : <Layout users={users}  setUser={setUser}/>,
    children: [
    {index: true , element : <Home />},
    {path : 'Movies' , element :<ProtectedRouting> <Movies /> </ProtectedRouting>},
    {path : 'Register' , element :<Register />},
    {path : 'Login' , element :<Login getToken={getToken} />},
    {path : '*' , element :<PageNotFound />} 
  ]
  }])

    useEffect(()=>{
      if(localStorage.getItem('token')){
        getToken()
      }else{
        setUser(null)
      }
    },[])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
