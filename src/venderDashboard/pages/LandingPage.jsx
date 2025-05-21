import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirms from '../components/forms/AddFirms'
import AddProducts from '../components/forms/AddProducts'
import Welcome from '../components/Welcome'
import AllProduct from '../components/AllProduct'

import { useState,useEffect } from 'react'
const LandingPage = () => {
  const [login,setlogin]=useState(false)
  const [register,setregister]=useState(false)
  const [showFirm,setshowFirm]=useState(false)
  const [showProduct,setshowProduct]=useState(false)
  const [showWelcome,setshowWelcome]=useState(false)
  const [showAllProducts,setShowAllProducts]=useState(false);
  const [showLogout,setShowLogout]=useState(false);
  const [showFirmTitle,setShowFirmTitle]=useState(true);

  useEffect(()=>{
    const loginToken=localStorage.getItem('loginToken');
    if(loginToken){
      setShowLogout(true);
      setshowWelcome(true);
    }
  },[]);
  useEffect(()=>{
    const firmname=localStorage.getItem('firmname');
    if(firmname){
      setShowFirmTitle(false);
      setshowWelcome(true);
    }

  },[])

  const logoutHandle=()=>{
    confirm("Are you sure to logout..")
    localStorage.removeItem('loginToken');
    localStorage.removeItem('firmId');
    localStorage.removeItem('firmname');
    setShowLogout(false);
    setShowFirmTitle(true);
    setshowWelcome(false);
  }
  


  
  let handleLogin=()=>{
    setlogin(true);
    setregister(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);

  }
  let handleRegister=()=>{
    setregister(true);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);
  
  }

   let handleFirms=()=>{
    if(showLogout){
    setregister(false);
    setlogin(false);
    setshowFirm(true);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);
    }else{
      alert("Please Login First");
      setlogin(true);
    }


  }
    let handleProducts=()=>{
    if(showLogout){
    setregister(false);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(true);
    setshowWelcome(false);
    setShowAllProducts(false);
    }else{
      alert("Please Login First");
      setlogin(true);
    }

  }
    let handleWelcome=()=>{
    setregister(false);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(true);
    setShowAllProducts(false);
  }
    let handleAllProducts=()=>{
    if(showLogout){
    setregister(false);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(true);
    }else{
      alert("Please Login First");
      setlogin(true);
    }
  }


  return (
    <>
        <section className="landingSection">
        <NavBar OnLoginClick={handleLogin} OnRegister={handleRegister} showLogout={showLogout}
        logoutHandle={logoutHandle}/>
        <div className="collectionSection">
        <SideBar OnAddFirms={handleFirms} OnProducts={handleProducts} onAllProducts={handleAllProducts}
        showFirmTitle={showFirmTitle}/>
        {login && <Login  handleWelcome={handleWelcome} setShowLogout={setShowLogout} />}
        {register && <Register handleLogin={handleLogin} setShowLogout={setShowLogout} />}
        {showFirm && showLogout && <AddFirms/>}
        {showProduct && showLogout && <AddProducts/>}
        {showWelcome && <Welcome/>}
        {showAllProducts && <AllProduct/>}
        </div>
        </section>
    </>
  )
}

export default LandingPage
