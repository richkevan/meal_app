import React, { useEffect } from 'react'
import {
    Link,
    Outlet
} from 'react-router-dom';
import './categories.css'


const Categories = () => {
    const [categories, setCategories] = React.useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
    
            try {

                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then((response) => response.json())
                .then((data) => {
                setCategories(data.categories)
            })
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            <div className="categories">
                {Object.keys(categories).map((category) => {
                    return (
                            <Link to={`/categories/${categories[category].strCategory}`} key={categories[category].idCategory}>
                                <figure>
                                <img src={categories[category].strCategoryThumb} alt={categories[category].strCategory} />
                                <figcaption>{categories[category].strCategory}</figcaption>
                                </figure>
                            </Link>
                    )
                })}
                </div>
                <Outlet/>
        </div>
    )
}

export default Categories
