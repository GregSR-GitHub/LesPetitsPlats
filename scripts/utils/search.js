const searchInput = document.getElementById('main_search')

searchInput.addEventListener("input", searchRecipe)

function searchRecipe(){
    const searchData = searchInput.value.split(/[\s,]+/)
    console.log(searchData)
    }