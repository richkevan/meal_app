import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./categories.css"

const Category = () => {
    const { category } = useParams()
    const [meals, setMeals] = React.useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.meals)
            })
            .catch((error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [category])

    return (
        <div>
           <h3>{category}</h3>
           <ul className='recipeList'>
            {meals.map((meal) => {
                return (
                    <Link to={`/meals/id=${meal.idMeal}`} key={meal.idMeal}>
                    <li>
                        <img src={meal.strMealThumb} alt={meal.strMeal}  style={{height:'150px', paddingRight:'2rem'}}/>
                        <h5>{meal.strMeal}</h5>
                    </li>
                    </Link>
                )
            })}
           </ul>
        </div>
    )
}

export default Category
