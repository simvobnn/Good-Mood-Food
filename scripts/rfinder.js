function rFinder() { 
    const cuisine = 'cuisine=' + document.getElementById("cuisine").value;
    const diet = '&diet=' + document.querySelector('[name="diet"]:checked').value;
    const checked = document.querySelector('[name="intolerances"]').value;
    const intolerances = '&intolerances='; 

    for (let i = 0; i < checked.length; i++) {
        if (checked[i].checked === true) {
            intolerances += checked[i].value + '%2C';
        }
    }                
    const number = "&number=18";
    const offset = "&offset=";
    window.offsetBy = 0;
    const type = "&type=" + document.getElementById("type").value;
    const limitLicense = "&limitLicense=";
    const instReq = "&instructionsRequired=true";
    const ingredients = "&query=" + document.getElementById("ingredient").value
    
    const api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?";
    const apiHeader = {"method": "GET",	
                        "headers": {
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "x-rapidapi-key": "345055b289msh186be75226c3a7cp1532c5jsn3e8081ea78ee"
                        }};
    const apiQuery = api + cuisine + diet + intolerances + number + type + offset + window.offsetBy + limitLicense + instReq + ingredients;                   
    
    getRecipes()        
        .catch(err => {console.log(err)})

        async function getRecipes() {
            const response = await fetch(apiQuery,apiHeader);
            const request = await response.json();
            const recipes = request.results;
            recipes.forEach(function(recipe) {
                let recipesContainer = document.getElementById("recipecont");
                recipesContainer.innerHTML +=`
                <div class="recipe" id="${recipe.id}">
                    <h2>${recipe.title}</h2>
                    <img src="${request.baseUri + recipe.image}" alt="Illustration of dish" onclick="reDir(${recipe.id})">
                    <h3>Servings: ${recipe.servings}</h3>
                    <h3>Ready in: ${recipe.readyInMinutes}</h3>
                </div>
                `
                setTimeout(() => recipesContainer.scrollIntoView({behavior: "smooth"}), 500);                
            });                         
        };    
}
