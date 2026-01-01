import React from 'react';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirms from '../components/forms/AddFirms'
import AddProducts from '../components/forms/AddProducts'
import Welcome from '../components/Welcome'
import AllProduct from '../components/AllProduct'
import UserDetails from '../components/UserDetails';
import { useState,useEffect } from 'react';
const LandingPage = () => {
  const [login,setlogin]=useState(false)
  const [register,setregister]=useState(false)
  const [showFirm,setshowFirm]=useState(false)
  const [showProduct,setshowProduct]=useState(false)
  const [showWelcome,setshowWelcome]=useState(false)
  const [showAllProducts,setShowAllProducts]=useState(false);
  const [showLogout,setShowLogout]=useState(false);
  const [showFirmTitle,setShowFirmTitle]=useState(true); //if firmname is there remove firmprodus
  const [showUserDetails, setShowUserDetails] = useState(false);


  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
      setShowLogout(true);
      setshowWelcome(true);
    }
  },[]);

  //if firmTitle is there then remove
  useEffect(()=>{
    const firmname=localStorage.getItem('firmname');
    if(firmname){
      setShowFirmTitle(false);
      setshowWelcome(true);
    }
  },[])

  //when click on the logout remove enter data
  const logoutHandler=()=>{
    confirm("Are you sure to logout..")
    localStorage.removeItem('loginToken');
    localStorage.removeItem('firmId');
    localStorage.removeItem('firmname');
    localStorage.removeItem("venderId");  
    setShowLogout(false);
    setShowFirmTitle(true); 
    setshowWelcome(false);
    setShowUserDetails(false);
  }
  
  let handleLogin=()=>{
    setlogin(true);
    setregister(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);
    setShowUserDetails(false);
  }
  let handleRegister=()=>{
    setregister(true);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);
    setShowUserDetails(false);
  }

   let handleFirms=()=>{
    if(showLogout){
    setregister(false);
    setlogin(false);
    setshowFirm(true);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);
    setShowUserDetails(false);
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
    setShowUserDetails(false);
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
    setShowUserDetails(false);
  }
    let handleAllProducts=()=>{
    if(showLogout){
    setregister(false);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowUserDetails(false);
    setShowAllProducts(true);
    }else{
      alert("Please Login First");
      setlogin(true);
    }
  }

  let handleUserDetails = () => {
  if (showLogout) {
    setregister(false);
    setlogin(false);
    setshowFirm(false);
    setshowProduct(false);
    setshowWelcome(false);
    setShowAllProducts(false);
    setShowUserDetails(true);
  } else {
    alert("Please Login First...");
    setlogin(true);
  }
};


  return (
    <>
        <section className="landingSection">
        {/* //Sending the the data using props.. */}
        <NavBar OnLoginClick={handleLogin} OnRegister={handleRegister} showLogout={showLogout}
        logoutHandler={logoutHandler}/>
        
        <div className="collectionSection">
        <SideBar OnAddFirms={handleFirms} OnProducts={handleProducts} onAllProducts={handleAllProducts}
        firmTitle = {showFirmTitle} onUserDetails = {handleUserDetails}/>
        {/* when its true then its opens */}
        {login && <Login  handleWelcome={handleWelcome} setShowLogout={setShowLogout} />}
        {register && <Register handleLogin={handleLogin} setShowLogout={setShowLogout} />}
        {showFirm  && <AddFirms/>}
        {showProduct && <AddProducts/>}
        {showWelcome && <Welcome/>}
        {showAllProducts && <AllProduct/>}
        {showUserDetails && <UserDetails />}

        </div>
        </section>
    </>
  )
}

export default LandingPage
