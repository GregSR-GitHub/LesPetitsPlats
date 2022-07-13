class App {
    constructor () {
      this.urlData = './data/recipes.js'
      this.section = document.querySelector('.recipes_section')
    }
  
    init () {
      // Récupère les données des recettes
      recipes.forEach((recipe) => {
        const recipeData = new Recipe(recipe);
        const recipeCardDOM = new RecipeCard(recipeData).createCard()
        this.section.appendChild(recipeCardDOM)
        this.updateListArray(recipeData)
      })
      this.displayAllList()
    }

    update () {
      // Efface les recettes précédement affichée et les listes
      this.section.innerHTML = ''
      allIngredients = []
      allAppliances = []
      allUstensils = []
      updateRecipesByTags()
      const finalRecipesData = getRecipesbySearch()
      console.log(finalRecipesData)
      // Récupère les données des recettes
      finalRecipesData.forEach((recipe) => {
        const recipeData = new Recipe(recipe);
        const recipeCardDOM = new RecipeCard(recipeData).createCard()
        this.section.appendChild(recipeCardDOM)
        this.updateListArray(recipeData)
      })
      if(finalRecipesData.length<=0){
        const noRecipeMessage = noRecipe()
        this.section.appendChild(noRecipeMessage)
      }
      this.displayAllList()
    }

    displayAllList () {
      document.getElementById('appliances_list').innerHTML = displayList(allAppliances ,'appliances')
      document.getElementById('ingredients_list').innerHTML = displayList(allIngredients ,'ingredients')
      document.getElementById('ustensils_list').innerHTML = displayList(allUstensils ,'ustensils')
    }

    updateListArray (data) {
        initIngredientsList(data.ingredients)
        initApplianceList(data.appliance)
        initUstensilsList(data.ustensils)
    }
  }
  
  const myApp = new App()
  myApp.init()