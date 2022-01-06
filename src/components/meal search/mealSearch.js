import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './mealSearch.css'


const MealSearch = () => {
    const [mealSearch, setMealSearch] = React.useState('');
    const [mealSearchResults, setMealSearchResults] = React.useState([]);
    const { search } = useParams()

    useEffect(() => {
        const fetchSearch = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(response => response.json())
            .then(data => {setMealSearchResults(data.meals)})
        }
        fetchSearch();
        console.log(mealSearchResults, search)
    }, [])

    const onChange = (e) => {
        setMealSearch(e.target.value);
        console.log(mealSearch);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const getMeals = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`)
            .then((response) => response.json())
            .then(data => {setMealSearchResults(data.meals)})
        };
        getMeals();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='search' onChange={onChange} placeholder='Search for a meal' />
                <button type='submit' >Search</button>
            </form>
            <div className='meal-search-results'>
            {mealSearchResults !== [] &&
                mealSearchResults.map((meal) => {
                    console.log(meal);
                    return (
                        <div key={meal.idMeal} className='recipeRow'>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default MealSearch
