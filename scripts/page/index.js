class IndexPage {
    constructor () {
      this.urlData = './data/recipes.js'
      this.section = document.querySelector('.recipes_section')
    }
  
    async init () {
      // Récupère les données des photographes
      recipes.forEach((recipe) => {
        const recipeData = new Recipe(recipe);
        const recipeCardDOM = new RecipeCard(recipeData).createCard()
        this.section.appendChild(recipeCardDOM)
        updateIngredientsList(recipeData.ingredients)
        updateApplianceList(recipeData.appliance)
        updateUstensilsList(recipeData.ustensils)
      })
      console.log(allUstensils)
      document.getElementById('appliancesList').innerHTML = displayList(allAppliances)
      document.getElementById('ingredientsList').innerHTML = displayList(allIngredients)
      document.getElementById('ustensilsList').innerHTML = displayList(allUstensils)
    }
  }
  
  const page = new IndexPage()
  page.init()