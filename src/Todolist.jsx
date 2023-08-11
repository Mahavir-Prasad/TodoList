import React, { useState } from "react";
import './index.css';

function Todolist(){
   const[newItem, setItem] = useState('');
   const[items, setItems] = useState([]);

   function itemEvent(event){
        setItem(event.target.value);    
   }
   function listOfItems(){
    setItems((oldItems) =>{
        return [...oldItems, newItem];
    })
    setItem('') ; 
   }
   const deleteItems = (id)=>{
    setItems((oldItems) =>{
        return oldItems.filter((arrElem, index) =>{
            return index !== id;
        });
    })
   }
return(
<>
<div className="main_div">
    <div className="center_div">
        <h1> ToDo List </h1>
        <input type="text" placeholder="Add an Items" onChange={itemEvent} value={newItem}/>
        <button onClick={listOfItems}> + </button>
        <ol>
            {items.map((itemval, index) => {
                return(
                <>  
                    <div className="todo_style">
                    <button className="fa-times" onClick={() =>{ deleteItems(index) }}> - </button>
                        <li>{itemval}</li>
                    </div>
                </>
                ) 
            })}
        </ol>
    </div>
</div>
</>
)
}
export default Todolist;

