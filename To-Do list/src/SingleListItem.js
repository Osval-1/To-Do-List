import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const SingleListItem = ({id,item,deleteItem,editItem}) => {
  return (<>
    <div>
    {item}
    </div>
    <div className="d-flex justify-content-end  w-25 text-">
    <button className="btn btn-primary mx-1" onClick={()=>editItem(id)}>
      <AiFillEdit />
    </button>
    <button className="btn btn-danger" onClick={()=>deleteItem(id)}>
      <AiFillDelete />
    </button>
  </div>
  </>
  )
}

export default SingleListItem