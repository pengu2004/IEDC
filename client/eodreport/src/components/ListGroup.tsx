import React from "react";
import { useState } from "react";
interface Props{
  items:string[],
  title:string,
  SelectedItem:(item:string)=>void
}

function ListGroup({items,title,SelectedItem}:Props) {
  const [Selectedindex,setSelectedindex]=useState(-1)


  return (
    <>
      <h1>{title}</h1>

      {items.length == 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li className={Selectedindex===index?"list-group-item active":"list-group-item "} key={item} onClick={()=>{setSelectedindex(index);SelectedItem(item)}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
