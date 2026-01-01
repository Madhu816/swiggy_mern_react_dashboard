import React from 'react'

//pasing props
const NavBar = ({OnLoginClick,OnRegister,showLogout,logoutHandler}) => {
    const firmName=localStorage.getItem('firmname');
    return (
        <div className="navSection">
            <div className="company">Vender-DashBoard</div>
            <div className="firmname">
                {firmName? <h4>FirmName : {firmName}</h4>:"Home-Page"}
            </div>
                <div className="userAuth">
                    {!showLogout ?<>
                    <span onClick={OnLoginClick}>Login/</span>
                    <span onClick={OnRegister}>Register</span>
                    </> :<span onClick={logoutHandler}>Logout</span>
                    }

                </div>
        </div>
    )
}

export default NavBar
