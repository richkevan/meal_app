import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [search, setSearch] = React.useState('');
    let history = useNavigate();
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const redirect = (e) => {
        e.preventDefault();
       setSearch(e.target.value)
        window.location.replace = `/search/${search}`
    }

    return (
        <div>
            <h1>Recipe App</h1>
            <p>This is a recipe app that allows you to search for recipes from the Free Meal DB API</p>
            <form onSubmit={redirect}>
            <input type="search" placeholder="Search for a recipe" onChange={handleChange}/>
            <Link to={`/search/${search}`}>
            <button type="submit">Search</button>
            </Link>
            </form>
        </div>
    )
}

export default Home