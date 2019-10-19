document.addEventListener('DOMContentLoaded', () => {
    const recipeId = localStorage.getItem("storedId");
    const api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + recipeId + "/information";
    const apiHeader = {"method": "GET",	
                        "headers": {
                        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "x-rapidapi-key": "345055b289msh186be75226c3a7cp1532c5jsn3e8081ea78ee"
                        }};

    getDetails()
        .catch(err => {console.log(err)})

    async function getDetails() {
        const response = await fetch(api,apiHeader);
        const request = await response.json();
        const title = request.title;
        const img = request.image;
        const prep = request.preparationMinutes;
        const cooking = request.cookingMinutes;
        const servings = request.servings;
        const inst = request.instructions;
        const sName = request.sourceName;
        const sUrl = request.sourceUrl;
        const ingredientList = [];
        const ingredients = request.extendedIngredients
            ingredients.forEach(function(i){
                ingredientList.push(i.original);
            });        

        popDetails();
        
        function popDetails(){
            const rdContainer = document.getElementById("rdcont");
            rdContainer.innerHTML += `
                <div class="dishheader">
                    <img src="${img}" alt="Illustration of dish">
                    <h1>${title}</h1>
                </div>
                <div class="flexcont">
                    <div class="info">
                        <h3>Preperation Time: ${prep} min.</h3>
                        <h3>Cooking Time: ${cooking} min.</h3>
                        <h3>Serves: ${servings} People</h3>
                    </div>
                    <div class="list">
                        <h2>Ingredients</h2>
                        <ul id="inglist"></ul>
                    </div>
                    <div class="inst">
                        <h2>Instructions</h2>
                        <p>${inst}</p>
                    </div>
                    <div class="source">
                        <h3>Original Recipe: <a href="${sUrl}">${sName}</a></h3>
                    </div>            
                </div>           
                `
        setTimeout(() => rdContainer.scrollIntoView({behavior: "smooth"}), 1000);
        }                 
              
        popIngredients();

        function popIngredients() {
            const ingList = document.getElementById("inglist");
            ingredientList.forEach(function (i) {
                ingList.innerHTML += `
                    <li>${i}</li>
                    `;
            });
        }
    }
})



