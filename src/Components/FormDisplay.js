import React, { useState } from 'react';

const FormDisplay = () => {

    const [input, setInput] = useState("")

    return (
        <div>
            <input value = {input} onChange={(e) => setInput(e.target.value)} />
            <h2>The text typed will show here: {input}</h2>
        </div>
    )
}

export default FormDisplay;

//This component will take a form input and display the same in real time.