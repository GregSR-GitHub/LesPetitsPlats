const searchInput = document.getElementById('main_search')
searchInput.addEventListener("input", searchRecipe)

function searchRecipe(){  
    myApp.update()
}

function getRecipesbySearch(){
    let searchData = searchInput.value.split(/[\s,.():;]+/)
    searchData = searchData.map(word => word.toLowerCase())
    let foundRecipebySearch = foundRecipes
    
    if(searchInput.value.length>=3){
        searchData.forEach((word) => {
            foundRecipebySearch = foundRecipebySearch.filter((recipe) => {
                let allText = recipe.description + recipe.name + recipe.appliance
                recipe.ingredients.forEach((ingredientData) => { allText += ingredientData.ingredient })
                recipe.ustensils.forEach((ustensil) => { allText += ustensil })
                allText = allText.toLowerCase()

                return allText.indexOf(word)>=0 // Retourne "true" si le mot est présent dans le texte de la recette.
            })
        })
    }

    return foundRecipebySearch
}