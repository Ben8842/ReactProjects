
  
import React, { useEffect, useReducer } from "react";
import ItemsContext from "./context/items-context";
import itemsReducer from "./reducers/items";
import AddItemForm from "./components/AddItemForm";
//import "./App.css";
import ItemList from "./components/ItemList";

function todo() {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      itemsDispatch({ type: "POPULATE_ITEMS", items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider value={{ items, itemsDispatch }}>
      <div className="App">
        <header className="App-header">
          To Do items
          <ItemList />
          <AddItemForm />
        </header>
      </div>
    </ItemsContext.Provider>
  );
}

export default todo;

