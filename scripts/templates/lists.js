function updateApplianceList(appliance){
    if(!allAppliances.includes(appliance)){
        allAppliances.push(appliance)
    }
}

function updateIngredientsList(ingredients){

    ingredients.forEach((ingredientData) =>{
       if(!allIngredients.includes(ingredientData.ingredient)){
        allIngredients.push(ingredientData.ingredient)
       } 
    })
}

function updateUstensilsList(ustensils){

    ustensils.forEach((ustensil) =>{
       if(!allUstensils.includes(ustensil)){
        allUstensils.push(ustensil)
       } 
    })
}

function displayList(data){
    let ListHTML = ''
    let nbItem = 0
    data.forEach((appliance) =>{
        
        if(nbItem>=30){
            ListHTML = ListHTML + `<a class="dropdown-col dropdown-item px-2" style="display:none" href="#">${appliance}</a>`
        }else{
           ListHTML = ListHTML + `<a class="dropdown-col dropdown-item px-2" href="#">${appliance}</a>`
        nbItem++ 
        }
    })
    return ListHTML
}