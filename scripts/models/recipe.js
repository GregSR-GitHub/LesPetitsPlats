class Recipe {
    constructor (data) {
      this._id = data.id
      this._name = data.name
      this._serving = data.serving
      this._ingredients = data.ingredients
      this._time = data.time
      this._description = data.description
      this._appliance = data.appliance
      this._ustensils = data.ustensils
    }
  
    get id () {
      return this._id
    }
  
    get name () {
      return this._name
    }
  
    get serving () {
      return this._serving
    }
  
    get ingredients () {
      return this._ingredients
    }
  
    get time () {
      return this._time
    }

    get description () {
        return this._description
      }

    get descriptionPreview () {
        if(this._description.length > 200){
            return this._description.substring(0,200)+'...'
        }else{
            return this._description
        }
    }
  
    get appliance () {
      return this._appliance
    }

    get ustensils () {
        return this._ustensils
      }
  
  }