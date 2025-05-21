import React from 'react'

const SideBar = ({OnAddFirms,OnProducts,onAllProducts,showFirmTitle}) => {
  return (
    <div>
        <div className="sideBar">
            <ul>
              {showFirmTitle?<li onClick={OnAddFirms}>Add Firm</li> : ""}
                <li onClick={OnProducts}>Add Product</li>
                <li onClick={onAllProducts}>All Product</li>
                <li>User Detail</li>
            </ul>
        </div>
    </div>
  )
}
export default SideBar
