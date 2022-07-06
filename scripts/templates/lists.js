function initApplianceList(appliance){
    appliance = appliance.replace("'", "\'")
    let newAppliance = appliance.toLowerCase()
    if(!allAppliances.includes(newAppliance)){
        allAppliances.push(newAppliance)
    }
}

function initIngredientsList(ingredients){

    ingredients.forEach((ingredientData) =>{
        let newIngredient = ingredientData.ingredient
        newIngredient = newIngredient.toLowerCase()
       if(!allIngredients.includes(newIngredient)){
        allIngredients.push(newIngredient)
       } 
    })
}

function initUstensilsList(ustensils){

    ustensils.forEach((ustensil) =>{
        let newUstensil = ustensil.toLowerCase()
       if(!allUstensils.includes(newUstensil)){
        allUstensils.push(newUstensil)
       } 
    })
}

function displayList(data, type){
    let ListHTML = ''
    let nbItem = 0
    data.forEach((appliance) =>{
        const name = appliance.replace("'", "\\'")
        if(nbItem<30){
           ListHTML = ListHTML + `<a class="dropdown-item px-2" href="#" onclick="displayTag('${name}','${type}')">${appliance}</a>`
        nbItem++ 
        }
    })

    if(nbItem>20){
        document.getElementById(type+'_list').style.width = '526px'
    } else if (nbItem>10){
        document.getElementById(type+'_list').style.width = '351px'
    }
    return ListHTML
}