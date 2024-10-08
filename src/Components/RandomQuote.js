import React from "react";

const RandomQuote = () => {

    let quotes = ['a', 'bc', 'fde', 'gyuhguj', 'gfrfd', 'wiiwksksk', 'juuyw7w7wj', '9876543', 'hgfde45678ijhg']
    //console.log(Math.floor((Math.random() * quotes.length)))
    let quote = quotes[Math.floor((Math.random() * quotes.length))]
    return (
        <div>
            {quote}
        </div>
    )
}
export default RandomQuote;