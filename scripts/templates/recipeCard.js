class RecipeCard{
    constructor(recipe) {
        this._recipe = recipe
    }

    createCard() {
        const wrapper = document.createElement('div')
        wrapper.classList.add('card-wrapper', 'col-md-6', 'col-lg-4', 'my-3')
        let ingredientList = ''
         this._recipe.ingredients.forEach((ingredient) => {
            const ingredientData = new Ingredient(ingredient);
            ingredientList = ingredientList + `<li><span class="font-weight-bold">${ingredientData.name}</span> ${ingredientData.quantity} </li>`
         })

        const recipeCard =`<div class="card">
                    <div class="card-header img-recipe"></div>
                    <div class="card-body bg-gray px-3 pt-3 pb-0">
                        <p class="card-title d-flex justify-content-between"><span class="d-inline-block">${this._recipe.name}</span>
                        <span class="font-weight-bold d-inline-block" style="min-width:90px"><i class="bi bi-clock"></i> ${this._recipe.time} min</span></p>
                        <div class="row card-recipe">
                            <ul class="col list-unstyled">${ingredientList}</ul>
                            <p class="col pl-0">${this._recipe.descriptionPreview}</p>
                        </div>
                    </div>
                </div>`
        wrapper.innerHTML = recipeCard
        return wrapper
    }
}

function noRecipe() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('norecipes', 'col-12')

    const norecipeCard =`<p class="bg-gray px-3 pt-3 pb-0">« Aucune recette ne correspond à votre critère... vous pouvez
    chercher « tarte aux pommes », « poisson », etc.</p>`
    wrapper.innerHTML = norecipeCard
    return wrapper
}