class App {
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
        initIngredientsList(recipeData.ingredients)
        initApplianceList(recipeData.appliance)
        initUstensilsList(recipeData.ustensils)
      })
      console.log(allUstensils)
      document.getElementById('appliances_list').innerHTML = displayList(allAppliances ,'appliances')
      document.getElementById('ingredients_list').innerHTML = displayList(allIngredients ,'ingredients')
      document.getElementById('ustensils_list').innerHTML = displayList(allUstensils ,'ustensils')
    }
  }
  
  const myApp = new App()
  myApp.init()