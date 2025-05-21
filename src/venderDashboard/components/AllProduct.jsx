import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { API_URL } from './data/ApiPath'

const AllProduct = () => {
    let [products,setProduct]=useState([]);

    const productHandler=async()=>{
        const firmId=localStorage.getItem('firmId');
        try {
            // const response=await fetch(`http://localhost:3000/product/${firmId}/products`);
            const response = await fetch(`${API_URL}/product/${firmId}/products`);
            const newProductData=await response.json();
            setProduct(newProductData.product);
            console.log(newProductData.product);
            
        } catch (error) {
            console.log(error);
            alert("failed to fetch product")
            
        }
    }

    useEffect(()=>{
        productHandler();
        console.log("this is useEffect")

    },[]);

    const deleteProductById=async(productId)=>{
        try {
            // const response=await fetch(`http://localhost:3000/product/${productId}`,{
            const response = await fetch(`${API_URL}/product/${productId}`, {
                method:"DELETE"
            })
            if(response.ok){
                setProduct(products.filter(product=>product._id!==productId))
                confirm("Are you sure to Delete");
                alert("Product is Deleted Sucessfully");
            }
        } catch (error) {
            console.log("Failed to Delete")
            alert("Failed to delete");

            
        }

    }

  return (
    <div>
        {!products?(
            <p>there is no product added</p>
        ):(
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ProductName</th>              
                        <th>Price</th>
                        <th>Image</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((item)=>{
                        return(
                            <>
                            <tr key={item._id}>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>
                                {item.image && (
                                    // <img src={`http://localhost:3000/uploads/${item.image}`}
                                    <img src={`${API_URL}/uploads/${item.image}`} 
                                    alt={item.productName}
                                    style={{width:"50px", height:"50px"}}/>

                                )}
                            </td>
                            <td>
                                <button onClick={()=>deleteProductById(item._id)}>Delete</button>
                            </td>
                            </tr>

                            </>
                        )
                    })}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default AllProduct
