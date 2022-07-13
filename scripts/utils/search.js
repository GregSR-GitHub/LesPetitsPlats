const searchInput = document.getElementById('main_search')

searchInput.addEventListener("input", searchRecipe)

function searchRecipe(){  
    myApp.update()
}

function getRecipesbySearch(){
    const searchData = searchInput.value.split(/[\s,]+/)
    console.log(searchData)
    let foundRecipebySearch = foundRecipes
    
    if(searchInput.value.length>=3){
        searchData.forEach((word) => {
            let searchArray = []
            word = word.toLowerCase()
            foundRecipebySearch.forEach((recipe) => {
                let allText = recipe.description + recipe.name + recipe.appliance
                recipe.ingredients.forEach((ingredientData) => {
                    allText = allText + ingredientData.ingredient
                })
                recipe.ustensils.forEach((ustensil) => {
                    allText = allText + ustensil
                })
                allText = allText.toLowerCase()
                if(allText.search(word)>=0){
                    searchArray.push(recipe)
                }
            })
            foundRecipebySearch = searchArray
        })
    }
    return foundRecipebySearch
}