// change background color

import React, {useState} from "react";

const ChangeBgColor = () => {

    const [backgroundColor, setBackgroundColor] = useState('yellow');

    const handleClick = () => {
        const newColor = backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
        setBackgroundColor(newColor);
    }

    return (
        <div onClick={handleClick} style={{
            backgroundColor,
            width: '260px',
            height: '50px',
            cursor: 'pointer'
        }}>
            Click to change background!
        </div>
    )
}

export default ChangeBgColor;