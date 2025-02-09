import "../Styles/Navbar.css"
import jsonArray from "../recipes.json"
import { useParams, Link } from "react-router-dom"
import { useState } from "react";

function MainThing({recipes, setRecipes}) {
 
    const deleteRecipe = recipeId => {
        const filteredRecipe = recipes.filter(recipe => recipe.id !== recipeId);
        return setRecipes(filteredRecipe)
    }
    return (


        <div className="Main-Thing">

            {recipes.map((recipe) => {
                return (

                    <div key={recipe.id} className="first-div">
                        <div className="section">

                            <img src={recipe.image} alt="food" />
                            <h3>{recipe.name}</h3>
                            <p>calories: {recipe.calories} </p>
                            <p>Servings: {recipe.servings}</p>
                            <button className="buttons delete" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                            <Link to={`/Details/${recipe.id}`}><button className="buttons details">Details</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}
export default MainThing