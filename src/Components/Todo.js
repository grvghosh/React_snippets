// todo application with add and remove function.

import React from "react";
import { useState } from "react";
const Todo = () => {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input])
            setInput('');
        }
    }
    const removeTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);  // Assuming you're using a state hook like `setTodos`
    };
    return (
        <div>
            <input type='text' 
            onChange={(e) => setInput(e.target.value)}
            value={input}  // This binds the input field to the state
             ></input>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;



// onClick={addTodo}: Calls addTodo without arguments, so it's passed directly.
// onClick={() => removeTodo(index)}: Calls removeTodo with the index argument, so it's wrapped in an arrow function to delay the call until the button is clicked.
// This difference in syntax is based on whether the function you want to call requires any arguments or not.