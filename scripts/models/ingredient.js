class Ingredient {
    constructor (data) {
      this._ingredient = data.ingredient
      this._quantity = data.quantity
      this._unit = data.unit
      this._unityType = ['ml','cl']

    }
  
    get name () {
      if((!this._unit)&&(!this._quantity)){
        return this._ingredient
      }else{
        return this._ingredient + ':'
      }
    }
  
    get quantity () {
      if(this._unityType.includes(this._unit)){
        return this._quantity + this._unit
      }else if((!this._unit)&&(!this._quantity)){
        return ''
      }else if(!this._unit){
        return this._quantity
      }else{
        return this._quantity + ' ' + this._unit
      }
    }

  }