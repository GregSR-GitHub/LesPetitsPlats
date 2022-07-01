class RecipeCard{
    constructor(recipe) {
        this._recipe = recipe
    }

    createCard() {
        const wrapper = document.createElement('div')
        wrapper.classList.add('card-wrapper', 'col-4', 'my-3')
        let ingredientList = ''
        console.log(this._recipe.ingredients)
         this._recipe.ingredients.forEach((ingredient) => {
            const ingredientData = new Ingredient(ingredient);
            ingredientList = ingredientList + `<span class="font-weight-bold">${ingredientData.name}</span> ${ingredientData.quantity} <br>`
         })

        const recipeCard =`<div class="card">
                    <div class="card-header img-recipe"></div>
                    <div class="card-body bg-gray px-3 pt-3 pb-0">
                        <p class="card-title d-flex justify-content-between"><span class="d-inline-block">${this._recipe.name}</span>
                        <span class="font-weight-bold d-inline-block" style="min-width:90px"><i class="bi bi-clock"></i> ${this._recipe.time} min</span></p>
                        <div class="row card-recipe">
                            <p class="col">${ingredientList}</p>
                            <p class="col pl-0">${this._recipe.descriptionPreview}</p>
                        </div>
                    </div>
                </div>`
        wrapper.innerHTML = recipeCard
        return wrapper
    }
}