import React, { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    {
      id: Math.random(),
      title: "Do Something",
    },
  ];

  const [data, setData] = useState(initialState);
  const [onAddItem, setOnAddItem] = useState("");
  const [onChangeName, setOnChangeName] = useState("");

  const onDeleteItem = (id) => {
    const newArr = data.filter((item) => item.id !== id);
    setData(newArr);
  };

  const onEditItem = (id) => {
    const edit = data.map((item) => {
      if (item.id === id) {
        return { ...item, isEdit: true };
      }
      return item;
    });
    setData(edit);
  };

  const onConfirm = (id) => {
    const newItem = data.map((item) => {
      if (!onChangeName.length && item.id === id) {
        setOnChangeName("");
        return { ...item, isEdit: false };
      }
      if (item.id === id) {
        return { ...item, title: onChangeName, isEdit: false };
      }
      return item;
    });
    setData(newItem);
    setOnChangeName("");
  };

  const onAddUser = () => {
    if (!onAddItem.length) {
      return;
    }

    const newUser = {
      id: Math.random(),
      title: onAddItem,
      idEdit: false,
    };

    setOnAddItem("");
    setData([...data, newUser]);
  };

  const view = data.map(({ id, title, isEdit }) => {
    return (
      <div key={id} className="card">
        {isEdit ? (
          <div>
            <input
              defaultValue={title}
              onChange={(e) => setOnChangeName(e.target.value)}
            />
            <button onClick={() => onConfirm(id)}>confirm</button>
          </div>
        ) : (
          <div>
            <input defaultValue={title} disabled />
            <button onClick={() => onDeleteItem(id)}>X</button>
            <button onClick={() => onEditItem(id)}>Edit</button>
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Add new User"
        value={onAddItem}
        onChange={(e) => setOnAddItem(e.target.value)}
      />
      <button onClick={onAddUser}>Add</button>
      <div>Todo App</div>
      {view}
    </>
  );
}

export default App;
