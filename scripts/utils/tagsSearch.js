const tagSearchBtn = document.querySelectorAll('.btn')
const tagSearchInput = document.querySelectorAll('.text-control')
const tagSearchIngredientsInput = document.querySelector('#ingredients_search')
const tagSearchAppliancesInput = document.querySelector('#appliances_search')
const tagSearchUstensilsInput = document.querySelector('#ustensils_search')

tagSearchBtn.forEach((btn) => btn.addEventListener("click", delayDropdownFocus));
tagSearchInput.forEach((btn) => btn.addEventListener("click", displatDropdown));
tagSearchIngredientsInput.addEventListener("input", searchTagIngredients);
tagSearchAppliancesInput.addEventListener("input", searchTagAppliances);
tagSearchUstensilsInput.addEventListener("input", searchTagUstensils);

function DropdownFocus(btn){
    let input = btn.parentElement.children[1]
    if(input){
        input.focus()
    }else{
        btn.focus()
    }
}

function delayDropdownFocus(e){
    setTimeout(function() {DropdownFocus(e.target)}, 500);
}

function displatDropdown(e){
    let btn = e.target.parentElement.children[0]
    $(btn).dropdown('toggle')
    setTimeout(function() {DropdownFocus(e.target)}, 500);
}

function searchTagIngredients(){
    const Input = tagSearchIngredientsInput.value.toLowerCase()
    let searchIngredientsArray = []
    console.log(Input)
    allIngredients.forEach((ingredient) => {
        if(ingredient.includes(Input)){
            console.log(ingredient)
            searchIngredientsArray.push(ingredient)
        }
      })
    document.getElementById('ingredients_list').innerHTML = displayList(searchIngredientsArray ,'ingredients')
    }

function searchTagAppliances(){
    const Input = tagSearchAppliancesInput.value.toLowerCase()
    let searchAppliancesArray = []
    console.log(Input)
    allAppliances.forEach((appliance) => {
        if(appliance.includes(Input)){
            console.log(appliance)
            searchAppliancesArray.push(appliance)
        }
      })
    document.getElementById('appliances_list').innerHTML = displayList(searchAppliancesArray ,'appliances')
    }

function searchTagUstensils(){
    const Input = tagSearchUstensilsInput.value.toLowerCase()
    let searchUstensilsArray = []
    console.log(Input)
    allUstensils.forEach((ustensil) => {
        if(ustensil.includes(Input)){
            console.log(ustensil)
            searchUstensilsArray.push(ustensil)
        }
      })
    document.getElementById('ustensils_list').innerHTML = displayList(searchUstensilsArray ,'ustensils')
    }

async function updateRecipesByTags(){
    let searchByTagsArray = []
    //Ne conserve que les recettes correspondant aux tags ingrédients sélectionnés
    allIngredientsTags.forEach((tag) => {
        searchByTagsArray = []
        foundRecipes.forEach((recipe) => {
            recipe.ingredients.forEach((ingredients) => {
                if(ingredients.ingredient.toLowerCase() == tag){
                    console.log(tag)
                    searchByTagsArray.push(recipe)
                }
            })
        })
        foundRecipes = searchByTagsArray
    })
    //Ne conserve que les recettes correspondant aux tags appareils sélectionnés
    allAppliancesTags.forEach((tag) => {
        searchByTagsArray = []
        foundRecipes.forEach((recipe) => {
                if(recipe.appliance.toLowerCase() == tag){
                    console.log(tag)
                    searchByTagsArray.push(recipe)
                }
        })
        foundRecipes = searchByTagsArray
    })
    //Ne conserve que les recettes correspondant aux tags ustensils sélectionnés
    allUstensilsTags.forEach((tag) => {
        searchByTagsArray = []
        foundRecipes.forEach((recipe) => {
            recipe.ustensils.forEach((ustensil) => {
                if(ustensil.toLowerCase() == tag){
                    console.log(tag)
                    searchByTagsArray.push(recipe)
                }
            })
        })
        foundRecipes = searchByTagsArray
    })
}