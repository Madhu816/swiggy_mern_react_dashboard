import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirms from '../components/forms/AddFirms'
import AddProducts from '../components/forms/AddProducts'


import { useState } from 'react'
const LandingPage = () => {
  let [login,setlogin]=useState(false)
  let [register,setregister]=useState(false)
  let [showFirm,setshowFirm]=useState(false)
  let [showProduct,setshowProduct]=useState(false)
  // let [register,setregister]=useState(false)
  // let [register,setregister]=useState(false)

  
  let handleLogin=()=>{
    setlogin(true);
    setregister(false);
    setshowFirm(false);
    setshowProduct(false);

  }
  let handleRegister=()=>{
    setregister(true);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);

  }
   let handleFirms=()=>{
    setregister(false);
    setlogin(false);
    setshowFirm(true);
    setshowProduct(false);
  }
    let handleProducts=()=>{
    setregister(false);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(true);
  }
  return (
    <>
        <section className="landingSection">
        <NavBar OnLoginClick={handleLogin} OnRegister={handleRegister}/>
        <div className="collectionSection">
        <SideBar OnAddFirms={handleFirms} OnProducts={handleProducts}/>
        {login && <Login/>}
        {register && <Register/>}
        {showFirm && <AddFirms/>}
        {showProduct && <AddProducts/>}
        </div>
        </section>
    </>
  )
}

export default LandingPage
