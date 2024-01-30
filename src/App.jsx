import "./App.css";
import Card from "./Components/Card";
import Data from "./data";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(Data);
  const handleDelete = (index) => {
    // Create a new array without the item to delete
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(newData);
  };

  const cardComponents = data.map((element, index) => (
    <Card
      key={index}
      title={element.title}
      desc={element.description}
      onDelete={() => handleDelete(index)}
    />
  ));

  return (
    <>
      <section className="app-body">{cardComponents}</section>
    </>
  );
}

export default App;
