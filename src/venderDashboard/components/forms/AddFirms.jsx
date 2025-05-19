import React, { PureComponent } from 'react'

export class AddFirms extends PureComponent {
    render() {
        return (
            <div>
                <div className="firmSection">
                    <form className="tableForm">
                        <h1>Add Firm</h1>
                        <label>Firm Name</label>
                        <input type="text" />
                        <label>Area</label>
                        <input type="text" />
                        <div className="checkinp">
                            <label>Category</label>
                            <div className="inputsContainer">
                            <div className="checkboxContainer">
                                <label>Veg</label>
                                <input type="checkbox" value="Veg" />
                            </div>
                                <div className="checkboxContainer">
                                    <label>Non-Veg</label>
                                    <input type="checkbox" value="Non-Veg" />
                                </div>
                            </div>
                            </div>
                           <div className="checkinp">
                            <label>Region</label>
                            <div className="inputsContainer">
                            <div className="checkboxContainer">
                                <label>South-Indian</label>
                                <input type="checkbox" value="South-Indian" />
                            </div>
                                <div className="checkboxContainer">
                                    <label>North-Indian</label>
                                    <input type="checkbox" value="North-Indian" />
                                </div>
                                <div className="checkboxContainer">
                                <label>Chinese</label>
                                <input type="checkbox" value="Chinese" />
                            </div>
                                <div className="checkboxContainer">
                                    <label>Bakery</label>
                                    <input type="checkbox" value="Bakery" />
                                </div>
                            </div>
                            </div>
                            <label>Oferr</label>
                            <input type="text" />
                            <label>Firm Image</label>
                            <input type="file" />
                            <div className="btnSubmit">
                                <button>Submit</button>
                            </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default AddFirms
