import React from 'react'

const NavBar = ({OnLoginClick,OnRegister,showLogout,logoutHandle}) => {
    const firmName=localStorage.getItem('firmname');
    return (
        <div className="navSection">
            <div className="company">Vender-DashBoard</div>
            <div className="firmname">
                <h4>FirmName:{firmName}</h4>
            </div>
                <div className="userAuth">
                    {!showLogout ?<>
                    <span onClick={OnLoginClick}>Login/</span>
                    <span onClick={OnRegister}>Register</span>
                    </> :<span onClick={logoutHandle}>Logout</span>

                    }

                </div>
        </div>

    )
}

export default NavBar
