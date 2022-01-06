import React, { useEffect } from 'react'
import {
    useParams,
    Link
} from 'react-router-dom'
import "./recipedetails.css"

var count = 1;
var ingredients = [];
var youTube

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
    }, [id])
        
    const youTubeModify = (url) => {
        var url = url.replace(/watch\?v=/g, 'embed/');
        youTube =url
    }   
        
    return (
        <div className='recipe-details'>
            {recipe.strYoutube ? youTubeModify(recipe.strYoutube) : null}
            <h1>{recipe.strMeal}</h1>
            <img src={`${recipe.strMealThumb}/preview`} alt={recipe.strMeal} style={{height:'150px', paddingRight:'2rem'}}/>
            <h3>Ingredients</h3>
            <ul>
                {Object.entries(recipe).forEach((key) => {
                    if (key[0] === `strIngredient${count}` && (key[1] !== '' && key[1] !== ' ' && key[1] !== null)) {
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
            <div className='Instructions'>
            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>
            </div>
            <h3>Video</h3>
            <iframe width="560" height="315" src={youTube} title={recipe.strMeal} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    )
}

export default RecipeDetails
