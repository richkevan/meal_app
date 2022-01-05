import React, { useEffect } from 'react'
import {
    useParams
} from 'react-router-dom'

var count = 1;
var ingredients = [];

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = React.useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data.meals[0])
            }
            )
        }
        fetchData()
        console.log(recipe)
    }, [id])
        
        
        
    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{height:'150px', paddingRight:'2rem'}}/>
            <h3>Ingredients</h3>
            <ul>
                {Object.entries(recipe).forEach((key) => {
                    if (key[0] === `strIngredient${count}` && (key[1] !== '' && key[1] !== ' ')) {
                        ingredients.push(recipe[`strMeasure${count}`]+" "+ recipe[`strIngredient${count}`])
                        count++;
                    }
                })}
                {ingredients.map((ingredient, index) => {
                    return (
                        <li key={index}>{ingredient}</li>
                    )
                })}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>
            <h3>Video</h3>
            <iframe width="560" height="315" src={recipe.strYoutube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default RecipeDetails
