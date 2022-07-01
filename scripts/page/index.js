class IndexPage {
    constructor () {
      this.urlData = './data/recipes.js'
      this.section = document.querySelector('.recipes_section')
    }
  
    init () {
      // Récupère les données des photographes
      recipes.forEach((recipe) => {
        const recipeData = new Recipe(recipe);
        const recipeCardDOM = new RecipeCard(recipeData).createCard()
        this.section.appendChild(recipeCardDOM)
      })
      console.log(recipes)
    }
  }
  
  const page = new IndexPage()
  page.init()