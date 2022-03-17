import React, { useState } from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'
import {v4} from 'uuid';
export const Grocery = () => {
    const [list,setList] = useState([]);
    const handleAdd=(name)=>{
        const payload={
            name,
            status: false,
            id: v4()
        };
        setList([...list,payload]);
    }
    const deleteItem=(id)=>{
        const updatedList=list.filter((elem)=>elem.id!==id);
        setList(updatedList);
    }
  return (
    <div>
        <GroceryInput handleAdd={handleAdd}/>
        <ul>
            {
                list.map((item,id)=>(
                    <GroceryList {...item} key={id} deleteItem={deleteItem}/>
                ))
            }
        </ul>
    </div> 
  )
}
