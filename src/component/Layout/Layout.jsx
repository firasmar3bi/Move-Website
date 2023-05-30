import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";


export default function Layout({users,setUser}) {
  
  let Navigate = useNavigate();
  
  function logout(){
    localStorage.removeItem('token');
    setUser(null)
    Navigate('/Login')
  }
  return (
    <>
      <Navbar users={users} logout={logout}/>
      
        <Outlet></Outlet>

      <Footer />  
    </>
  )
}
