import React, { useState } from 'react'
import style from './GroceryList.module.css';
export const GroceryList = ({name,status,id,deleteItem}) => {
  const [stat,setStat]=useState(status)
  const statusChange=()=>{
    setStat(!stat);
  }
  return (
    <li className={stat?style.not_completed:style.completed}>
    <input type="checkbox" onChange={statusChange}/>
    {name}
    {/* {status?"  completed":"  not completed"} */}
    <button onClick={()=>{deleteItem(id)}}>Delete</button></li>
  )
}

