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
        allTags.push(this._name)
        this.closeTag(wrapper)
        return wrapper
    }

    closeTag(tagLink){
        const that = this
        tagLink.addEventListener('click', function () {
        let tagIndex = allTags.indexOf(that._name)
        allTags.splice(tagIndex, 1)
        console.log(allTags)
        tagLink.remove()
        })

    }
}

function displayTag(name, type){

    if(allTags.includes(name)){
        console.log(name + ' est déja crée.')
    }else{
    const tag = new Tag(name, type)
    const tagCard = tag.createTag()
    tagsSection.appendChild(tagCard)
    }
}