import React, { PureComponent } from 'react'
import { useState } from 'react'
import { API_URL } from '../data/ApiPath';

const AddFirms=({product})=> {
    const [firmname,setFirmname]=useState("");
    const [area,setArea]=useState("");
    const [category,setCategory]=useState([]);
    const [region,setRegion]=useState([]);
    const [offer,setOffer]=useState();
    const [file,setFile]=useState(null);

    const handleCategoryChange=(event)=>{
        const value=event.target.value;
        if(category.includes(value)){//if category already exits just remove it
            setCategory(category.filter((item)=>item!==value))
        }
        else{
            setCategory([...category,value])
        }
    }
        const handleRegionChange=(event)=>{
        const value=event.target.value;
        if(region.includes(value)){
            setRegion(region.filter((item)=>item!==value))
        }
        else{
            setRegion([...region,value])
        }
    }
    //images
    const handleImageUpload=(event)=>{
        const selectdImage=event.target.files[0]; // [0] - taken only 1-file
        setFile(selectdImage);// assingn the image

    }



    const handleFirmsSubmit=async(event)=>{
        event.preventDefault();
        try {

            //get the token
            const loginToken=localStorage.getItem("loginToken");
            if(!loginToken){
                console.error("User not authentication")
            }
            const formData=new FormData();
            formData.append('firmname',firmname);
            formData.append('area',area);
            formData.append('offer',offer);
            formData.append('image',file);

            //multiple category and regions
            category.forEach((value)=>{
                formData.append('category',value)
            })
            region.forEach((value)=>{
                formData.append('region',value)
            })

            // const response=await fetch(`http://localhost:3000/firm/add`,{
            const response = await fetch(`${API_URL}/firm/add`, {

                method:"POST",//send the token
                headers:{
                    'token':`${loginToken}`
                },
                body:formData
            });
            const data=await response.json();
            if(response.ok){
                console.log(data);
                localStorage.setItem("firmId", data.firmId);
                localStorage.setItem("firmname", data.firmname);

                setFirmname("");
                setArea("");
                setCategory([]);
                setRegion([]);
                setOffer("");
                setFile(null);
                alert("Firm Add sucessfully");
                product();

            }else if(data.message==="vender can have only one firm"){
                alert("Only 1 firm can be added 🏢.");
            }else{
                alert("Failed to add Firm");
            }
            // console.log(data.firmId)
            // const firmId=data.firmId;
            // localStorage.setItem('firmId',firmId);
            
        } catch (error) {
            console.log(error);
            alert("Failed to add product");
            
        }
    }


        return (
            <div>
                <div className="firmSection">
                    <form className="tableForm" onSubmit={handleFirmsSubmit}>
                        <h1>Add Firm</h1>
                        <label>Firm Name :</label>
                        <input type="text" name="firmname"  value={firmname} onChange={(event)=>setFirmname(event.target.value)} placeholder="Enter Your Restarent Name..."/>
                        <label>Area :</label>
                        <input type="text"  name="area" value={area} onChange={(event)=>setArea(event.target.value)}placeholder="Enter Your Restarent Location..."/>
                        <div className="checkinp">
                            <label>Category :</label>
                            <div className="inputsContainer">
                            <div className="checkboxContainer">
                                <label>Veg</label>
                                <input type="checkbox" value="veg" checked={category.includes('veg')} onChange={handleCategoryChange}/>
                            </div>
                                <div className="checkboxContainer">
                                    <label>Non-Veg</label>
                                    <input type="checkbox" value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange}/>
                                </div>
                            </div>
                            </div>
                           <div className="checkinp">
                            <label>Region :</label>
                            <div className="inputsContainer">
                            <div className="checkboxContainer">
                                <label>South-Indian</label>
                                <input type="checkbox" value="south-indian" checked={region.includes('south-indian')}  onChange={handleRegionChange}/>
                            </div>
                                <div className="checkboxContainer">
                                    <label>North-Indian</label>
                                    <input type="checkbox" value="north-indian" checked={region.includes('north-indian')}  onChange={handleRegionChange}/>
                                </div>
                                <div className="checkboxContainer">
                                <label>Chinese</label>
                                <input type="checkbox" value="chines" checked={region.includes('chines')}  onChange={handleRegionChange}/>
                            </div>
                                <div className="checkboxContainer">
                                    <label>Bakery</label>
                                    <input type="checkbox" value="bakery" checked={region.includes('bakery')}  onChange={handleRegionChange}/>
                                </div>
                            </div>
                            </div>
                            <label>Oferr :</label>
                            <input type="text" name="offer" value={offer} onChange={(event)=>setOffer(event.target.value)} placeholder="Enter Offer Represent.."/>
                            <label>Firm Image</label>
                            <input type="file"  onChange={handleImageUpload}/>
                            <div className="btnSubmit">
                                <button type='submit'>Submit</button>
                            </div>
                    </form>
                </div>
            </div >
        )
    
}

export default AddFirms
