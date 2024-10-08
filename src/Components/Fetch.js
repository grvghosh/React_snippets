// fetch data from an api and display it. we can use useeffect and usestate- then axios maybe

// import React, { useEffect, useState } from "react";

// const Fetch = () => {

//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             //.then(json => console.log(json))
//             .then(json => setData(json))
//     }, [])


//     return (
//         <div>
//             {
//                 data ? (<div>
//                     <h3>{data.id}</h3>
//                     <h3>{data.title}</h3>
//                 </div>)
//                     :
//                     (<div>Data is not available...</div>)
//             }
//         </div>
//     )
// }

// export default Fetch;

///////////////////////////////////////// Now we will do the same thing usingf axios below!!////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import axios from 'axios';

const Fetch = () => {

    const [data, setData] = useState(null);

    const fetchDataAxios = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setData(response.data)
        } catch (error) {
            console.log("error", error)
        } finally {
            console.log("finally block executes")
        }
    }
    useEffect(() => {
        fetchDataAxios()
    }, [])


    return (
        <div>
            {
                data ? (<div>
                    <h3>{data.id}</h3>
                    <h3>{data.title}</h3>
                </div>)
                    :
                    (<div>Data is not available...</div>)
            }
        </div>
    )
}

export default Fetch;


