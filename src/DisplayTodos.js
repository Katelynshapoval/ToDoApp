import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { useState } from "react";

function DisplayTodos({ todos, deleteItem, editItem }) {
  // true if one of the todos is marked as completed, second value is todo's id
  const [fade, setFade] = useState([false, 0]);
  // After the checkmark was clicked and animation was displayed, item is deleted
  const todoCompleted = (item) => {
    setFade([false, 0]);
    deleteItem(item);
  };
  //  Display the todo on the screen
  const showToDo = (item) => {
    return (
      <div className="todo">
        <p
          // If checkbox is clicked, change class to play animation
          className={fade && item.id === fade[1] ? "fade" : ""}
          onAnimationEnd={() => todoCompleted(item)}
        >
          {item["content"]}
        </p>

        <button
          onClick={() => {
            deleteItem(item);
          }}
        >
          <AiOutlineDelete className="icons" />
        </button>
        <button
          onClick={() => {
            editItem(item);
          }}
        >
          <AiOutlineEdit className="icons" />
        </button>
        <button onClick={() => setFade([true, item.id])}>
          <GiCheckMark className="icons" />
        </button>
      </div>
    );
  };
  // For every todo execute the function which will display it
  return <div className="todos">{todos.map(showToDo)}</div>;
}

export default DisplayTodos;
