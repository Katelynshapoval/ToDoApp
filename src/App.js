import "./App.css";
import AddToDo from "./AddToDo";
import { useState, useEffect } from "react";
import DisplayTodos from "./DisplayTodos";

function App() {
  // All the "ToDo" plans are stores in todos
  const [todos, setTodos] = useState([]);
  const [change, setChange] = useState({});
  // Used to get the todos from the database,
  // so the plans are displayed after reloading the page
  useEffect(() => {
    fetch("http://localhost:3000/plans")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  // Deleting a todo after clicking on a button
  const deleteItem = (item) => {
    const items = [...todos];
    const requestOptions = {
      method: "DELETE",
    };
    // Delete the item using its id
    fetch(`http://localhost:3000/plans/${item.id}`, requestOptions).then(
      (response) => {
        // If the operation was successful
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setTodos(items);
        }
      }
    );
  };
  // Adding an item after pressing enter
  const addItem = (item) => {
    let items = [...todos];
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: item["content"] }),
    };
    // This code fetches data from the specified URL, converts it to JSON, and
    // updates the 'todos' state variable with the received data.
    fetch("http://localhost:3000/plans", requestOptions)
      // When the response is received, convert it to JSON format
      .then((response) => response.json())
      // After converting to JSON, execute the following code with the received data
      .then((data) => {
        items.push(data);
        setTodos(items);
      });
  };

  const editItem = (item) => {
    setChange({});
    const items = [...todos];
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: item["content"] }),
    };
    fetch(`http://localhost:3000/plans/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items[idx] = item;
          setTodos(items);
        }
      }
    );
    setChange({});
  };

  return (
    <div className="App">
      <p>ToDo App</p>
      <AddToDo editItem={editItem} change={change} addItem={addItem} />
      <DisplayTodos
        editItem={(item) => setChange(item)}
        deleteItem={deleteItem}
        todos={todos}
      />
    </div>
  );
}

export default App;
