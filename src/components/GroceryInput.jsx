import React, { useState } from 'react'

export const GroceryInput = ({handleAdd}) => {
    const [value,setValue] = useState("");
  return (
    <div>
        <input type="text" placeholder='Enter Item' value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
        <button onClick={()=>{handleAdd(value);setValue("")}}>Add</button>
    </div>
  )
}
