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
        for(let i=0; i<searchData.length;i++) {
            let word = searchData[i]
            let searchArray = []
            word = word.toLowerCase()
            for(let i=0; i<foundRecipebySearch.length;i++) {
            let recipe = foundRecipebySearch[i]
                //Création d'un variable contennant toutes les informations de la recette
                let allText = recipe.description + recipe.name + recipe.appliance
                for(let i=0; i<recipe.ingredients.length;i++) {
                    allText = allText + recipe.ingredients[i].ingredient
                }
                for(let i=0; i<recipe.ustensils.length;i++) {
                    allText = allText + recipe.ustensils[i]
                }
                allText = allText.toLowerCase()
                //Cherche la présence du mot recherché dans la recette
                if(allText.indexOf(word)>=0){
                    searchArray.push(recipe)
                }
            }
            foundRecipebySearch = searchArray
        }
    }
    return foundRecipebySearch
}