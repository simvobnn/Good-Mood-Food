async function reDir(clicked_id){
    const recipeId = await clicked_id;
    localStorage.setItem("storedId",recipeId);
    window.location.href = "recipe.html";    
}