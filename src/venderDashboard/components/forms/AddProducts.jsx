import React from 'react'
import { useState } from 'react'
import { API_URL } from '../data/ApiPath';

const AddProducts = () => {
  let [productName, setProductName] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState([]);
  const [file,setFile]=useState(null);
  let [bestSeller, setBestSeller] = useState(false);
  let [description, setDescription] = useState("");

    const handleCategoryChange=(event)=>{
        const value=event.target.value;
        if(category.includes(value)){
            setCategory(category.filter((item)=>item!==value))
        }
        else{
            setCategory([...category,value])
        }
    }
    const handleBestSeller=(event)=>{
    const value=event.target.value==="true";
    setBestSeller(value);
    }
    const handleImageUpload=(event)=>{
        const selectdImage=event.target.files[0];
        setFile(selectdImage);

    }


  const handleProduct = async (event) => {
    event.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      const firmId = localStorage.getItem("firmId");
      if (!loginToken || !firmId) {
        return console.log("user not authentication");
      }
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('price', price);
      formData.append('image', file);
      formData.append('bestSeller', bestSeller);
      formData.append('description', description);

      category.forEach((value) => {
        formData.append('category', value)
      })

      // const response=await fetch(`http://localhost:3000/product/addproduct/${firmId}`,{
      const response = await fetch(`${API_URL}/product/addproduct/${firmId}`, {

        method:"POST",
        body:formData
      })
      const data=await response.json();
      if(response.ok){
        console.log(data);
        alert("Product addedd Sucessfully")
        setProductName("");
        setPrice("");
        setCategory([]);
        setBestSeller(false);
        setFile(null);
        setDescription("")
      }
   
    } catch (error) {
      console.log(error);
      alert("Failed to add product");

    }
  }

  return (
    <div>
      <div className="productSection">
        <form className="tableForm" onSubmit={handleProduct}>
          <h1>Add Product</h1>
          <label>Product Name </label>
          <input type="text" value={productName} onChange={(event)=>setProductName(event.target.value)} />
          <label>Price</label >
          <input type="text" value={price} onChange={(event)=>setPrice(event.target.value)}/>

          <div className="checkinp">
            <label>Category</label>
            <div className="inputsContainer">
              <div className="checkboxContainer">
                <label>Veg</label>
                <input type="checkbox" value="veg" checked={category.includes('veg')} onChange={handleCategoryChange}/>
              </div>
              <div className="checkboxContainer">
                <label>Non-Veg</label>
                <input type="checkbox" value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange} />
              </div>
            </div>
          </div>
          <div className="checkinp">
            <label>BestSeller</label>
            <div className="inputsContainer">
              <div className="checkboxContainer">
                <label>Yes</label>
                <input type="radio" value="true" checked={bestSeller===true} onChange={handleBestSeller}/>
              </div>
              <div className="checkboxContainer">
                <label>No</label>
                <input type="radio" value="false" checked={bestSeller===false}  onChange={handleBestSeller}/>
              </div>
            </div>
          </div>
          <label>Description</label>
          <input type="text" value={description} onChange={(event)=>setDescription(event.target.value)}/>
          <label>Image</label>
          <input type="file" onChange={handleImageUpload}/>
          <div className="btnSubmit">
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default AddProducts
