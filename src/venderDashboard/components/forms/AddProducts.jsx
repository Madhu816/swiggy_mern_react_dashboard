import React from 'react'

const AddProducts = () => {
  return (
    <div>
         <div className="productSection">
                    <form className="tableForm">
                        <h1>Add Product</h1>
                        <label>Product Name</label>
                        <input type="text" />
                        <label>Price</label>
                        <input type="text" />
                        <label>Category</label>
                        <input type="text" />
                        <label>Best Seller</label>
                        <input type="text" />
                        <label>Description</label>
                        <input type="text" />
                        <label>Image</label>
                        <input type="file" />
                        <div className="btnSubmit">
                            <button>Submit</button>
                        </div>
            </form>
        </div>
      
    </div>
  )
}

export default AddProducts
