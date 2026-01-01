import React from 'react'

const SideBar = ({OnAddFirms,OnProducts,onAllProducts,firmTitle,onUserDetails}) => {
  return (
    <div>
        <div className="sideBar">
            <ul>
              {firmTitle?<li onClick={OnAddFirms}>Add Firm</li> :" "}
                <li onClick={OnProducts}>Add Product</li>
                <li onClick={onAllProducts}>All Product</li>
                <li onClick={onUserDetails}>User Detail</li>
            </ul>
        </div>
    </div>
  )
}
export default SideBar
