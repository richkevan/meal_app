import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const AlphaMealList = () => {
    const { letter } = useParams()
    const [meals, setMeals] = React.useState([])

    useEffect(() => {
        const fetchData = async (firstLetter) => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
                .then((response) => response.json())
                .then((data) => {
                    setMeals(data.meals)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        fetchData(letter)
    }, [letter])
    return (
        <div>
            <h3>{letter.toUpperCase()}</h3>
            <ul className='recipeList'>
            {meals !== null ?
                Object.keys(meals).map((meal) => {
                return (
                    <Link to={`/meals/id=${meals[meal].idMeal}`} key={meals[meal].idMeal}>
                    <li>
                        <img src={meals[meal].strMealThumb} alt={meals[meal].strMeal} style={{height:'150px', paddingRight:'2rem'}}/>
                        <h5>{meals[meal].strMeal}</h5>
                    </li>
                    </Link>
                )
            }):
            <li>No Recipes Available</li>}
            </ul>
        </div>
    )
}

export default AlphaMealList
