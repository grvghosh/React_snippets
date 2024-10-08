//List component to display a list of items!

import React from "react";

const ListCompo = () => {

    const list = ["item1", "item2", "item3", "item4", "item5", "item6"]

    return (
        <div>
            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ListCompo;