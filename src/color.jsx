import './color.css'
import React, { useState } from 'react'

function Color() {
    const [color, setColor] = useState("#ffffff")
   
     const handleColorChange = (e) =>{
            setColor(e.target.value)
     }
    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Pick Color</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default Color