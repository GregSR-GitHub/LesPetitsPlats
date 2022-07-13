tagsSection = document.querySelector('#tags_section')

class Tag{
    constructor(name, type){
        this._name = name
        this._type = type
    }

    createTag(){
        const wrapper = document.createElement('button')
        wrapper.classList.add('tag', 'btn', 'mx-1','btn-sm', 'bg-' + this._type)
        let tagHTML = this._name + ' <i class="bi bi-x-circle"></i>'
        wrapper.innerHTML = ' ' + tagHTML + ' '
        if(this._type=='ingredients'){
            allIngredientsTags.push(this._name)
        }else if(this._type=='appliances'){
            allAppliancesTags.push(this._name)
        }else{
            allUstensilsTags.push(this._name)
        }
        this.closeTag(wrapper)
        return wrapper
    }

    closeTag(tagLink){
        const that = this
        tagLink.addEventListener('click', function () {
            if(that._type == 'ingredients'){
                let tagIndex = allIngredientsTags.indexOf(that._name)
                allIngredientsTags.splice(tagIndex, 1)
                console.log(allIngredientsTags)
            }else if(that._type == 'appliances'){
                let tagIndex = allAppliancesTags.indexOf(that._name)
                allAppliancesTags.splice(tagIndex, 1)
                console.log(allAppliancesTags)
            }else{
                let tagIndex = allUstensilsTags.indexOf(that._name)
                allUstensilsTags.splice(tagIndex, 1)
                console.log(allUstensilsTags)
            }
        foundRecipes = recipes
        myApp.update()
        tagLink.remove()
        })

    }
}

function displayTag(name, type){
    let allTags = allIngredientsTags
    if(type == "ingredients"){
        allTags = allIngredientsTags
    }else if(type == "appliances"){
        allTags = allAppliancesTags
    }else{
        allTags = allUstensilsTags
    }

    if(allTags.includes(name)){
        console.log(name + ' est déja crée.')
    }else{
    const tag = new Tag(name, type)
    const tagCard = tag.createTag()
    tagsSection.appendChild(tagCard)
    myApp.update()
    
    }
}