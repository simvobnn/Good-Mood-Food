document.addEventListener("DOMContentLoaded", () => {
    const api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=";
    const apiHeader = {"method": "GET",	
                        "headers": {
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "x-rapidapi-key": "345055b289msh186be75226c3a7cp1532c5jsn3e8081ea78ee"
                        }};
    const number =  "9";
    const apiQuery = api + number

    getRecipes()        
    .catch(err => {console.log(err)})
    
    async function getRecipes() {
        const response = await fetch(apiQuery,apiHeader);
        const request = await response.json();
        const recipes = request.recipes;
        recipes.forEach(function(recipe) {
            let recipesContainer = document.getElementById("recipecont");
            recipesContainer.innerHTML +=`
            <div class="recipe" id="${recipe.id}">
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="Illustration of dish" onclick="reDir(${recipe.id})">
                <h3>Servings: ${recipe.servings}</h3>
                <h3>Ready in: ${recipe.readyInMinutes}</h3>
            </div>
            `
            setTimeout(() => recipesContainer.scrollIntoView({behavior: "smooth"}), 500);                
        });                         
    };    
});