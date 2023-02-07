import { useState } from "react";
import SingleListItem from "./SingleListItem";

function App() {
  const [listItems, setListItems] = useState([]);
  const [currentItem, SetCurrentItem] = useState("");
  const [editID, setEditID] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    SetCurrentItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEditing && currentItem){
      setListItems(listItems.map(listItem=>{
        if(listItem.id === editID){
          return {...listItem,item:currentItem}
        }
      }))
      setIsEditing(false);
    }
    else if (currentItem ) {
      setListItems([
        ...listItems,
        { id: new Date().toString(), item: currentItem },
      ]);
    }
    SetCurrentItem("");
  };
  const clearItem = () => {
    SetCurrentItem('')
    setIsEditing(false)
    setListItems([]);
  };
  const deleteItem = (id) => {
    const newList = listItems.filter((item) => item.id !== id);
    setListItems(newList);
    setIsEditing(false)
    SetCurrentItem('')
  };
  const editItem = (id) => {
    if(isEditing){
     setIsEditing(false)
     SetCurrentItem('')
     return
    }
    setEditID(id)
    setIsEditing(!isEditing)
    const newCurrentItem = listItems.filter((item) => item.id === id);
    SetCurrentItem(newCurrentItem[0].item)
  };
  return (
    <main>
      <div className="container w-md-50 h-50 position-absolute top-50 start-50 translate-middle">
        <div className="card">
          <h1 className="card-header text-center">To Do</h1>
          <div className="card-body">
            <div className="d-flex ">
              <input
                type="text"
                className="form-control m-1"
                value={currentItem}
                onChange={handleChange}
              />
              <button className="btn btn-primary" onClick={handleSubmit}>
                {isEditing?'Edit'
                :'add'}
              </button>
            </div>
            <hr />
            {listItems.length > 0 &&
              listItems.map((items) => {
                const { id, item } = items;
                return (
                  <div
                    className=" d-flex my-3 p-1 justify-content-between bg-light"
                    key={id}
                  >
                    <SingleListItem
                      item={item}
                      id={id}
                      deleteItem={deleteItem}
                      editItem={editItem}
                    />
                  </div>
                );
              })}
            <div className="text-center">
              <button className=" btn btn-danger w-25" onClick={clearItem}>
                clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
