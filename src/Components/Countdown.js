// build a timer to count down froma  specific time
import React, { useEffect, useState } from "react";

const Countdown = () => {

    const [time, setTime] = useState(60);

    useEffect(()=>{
        if(time > 0){
            const timer = setTimeout(() => {setTime(time - 1)}, 1000)
            return () => clearTimeout(timer);
        }
    }, [time])

    return (
        <div>
            <h2>Timer starts here :- { time } </h2>
        </div>
    )
}

export default Countdown;