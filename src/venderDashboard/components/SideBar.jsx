import React from 'react'

const SideBar = ({OnAddFirms,OnProducts}) => {
  return (
    <div>
        <div className="sideBar">
            <ul>
                <li onClick={OnAddFirms}>Add Firm</li>
                <li onClick={OnProducts}>Add Product</li>
                <li>All Product</li>
                <li>User Detail</li>
            </ul>
        </div>
    </div>
  )
}
export default SideBar
