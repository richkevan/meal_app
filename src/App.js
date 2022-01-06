import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import Categories from './components/meal categories/categories';
import MealSearch from './components/meal search/mealSearch';
import Category from './components/meal categories/category';
import AlphaMeals from './components/mealsAlpha/mealsAlpha';
import AlphaMealList from './components/mealsAlpha/mealsAlphaList';
import RecipeDetails from "./components/recipe details/recipedetails";

function App() {
  return (
    <div className="App">
      
        <nav className='Nav'>
        <h1>Recipe React</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/meals">Recipes</Link>
            </li>
            <li>
              <Link to="/search">Meal Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} >
            <Route path=":category" element={<Category />} />
          </Route>
          <Route path="/meals" element={<AlphaMeals />} >
            <Route path="str=:letter" element={<AlphaMealList />} />
            <Route path="id=:id" element={<RecipeDetails />} />
          </Route>
          <Route path="/search" element={<MealSearch />} >
            <Route path=":search" element={<MealSearch />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
