import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const AlphaMeals = () => {
    const [letter, setLetter] = React.useState('')
    

    return (
        <div>
           {alphabet.map((letter) => {
                return (
                    <Link to={`/meals/str=${letter}`} key={letter}>
                     <button onClick={() => setLetter(letter)}>{letter.toUpperCase()}</button>
                    </Link>
                )
           })}
           <Outlet/>
        </div>
    )
}

export default AlphaMeals
