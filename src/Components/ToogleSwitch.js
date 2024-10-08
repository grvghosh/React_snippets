// Implement a toogle switch

import React from 'react';
import { useState } from 'react';

const ToogleSwitch = () => {
    const [toogle, setToogle] = useState(false)

    const changeToogle = () => {
        setToogle(!toogle)
    }
    return (
        <div>
            <label>
                <input type = {'checkbox'} onChange={changeToogle} />
                <p>{toogle ? "On" : "Off"}</p>
            </label>
        </div>
    )
}

export default ToogleSwitch;