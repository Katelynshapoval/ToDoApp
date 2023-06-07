import { useState, useEffect } from "react";

function AddToDo({ addItem, change, editItem }) {
  // Determine whether the user wants to edit a todo
  // (if change attribute is not empty)
  let changeExists = Object.keys(change).length !== 0;
  // Activates only when "change" changes. Is the most important
  // code for editing a todo.
  // When a user clickes on change (DisplayTodos), the variable
  // "change" sets to item that needs to be changed, which makes this
  // file rerender since it's using change
  useEffect(() => {
    if (changeExists) {
      setData(change.content);
    }
  }, [change]);
  // To store the current todo task in the search bar
  const [data, setData] = useState("");
  // If "enter" is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (changeExists) {
        change.content = data.trim();
        editItem(change);
        // data.trim() removes extra spaces from both sides of the string.
        // I use it to prevent todos like those: "     ", "  k   h"
      } else if (data !== "" && data.trim() !== "") {
        addItem({ content: data.trim() });
      }
      setData("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setData(e.target.value)}
        placeholder="What do you want to do?"
        type="text"
        value={data}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}

export default AddToDo;
