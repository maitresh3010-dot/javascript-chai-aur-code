
let myname = 'maitresh'

const hero =  ['spiderman', 'thor']




 const superpower={

  thor :"hammer",
  spiderman :"sling"


 }




Object.prototype.maitresh = function(){
    console.log(`maitresh is present in all object`)
}


superpower.maitresh()


hero.maitresh()


Array.prototype.ismaitresh = function(){
    console.log(`hello by maitresh uke`)
}

// superpower.ismaitresh()


const teacher ={

    makevideo :  true
}

const user = {
    name :  'maitresh',

    age : 20
}

const teachingSupport = {
    isavailable : false
}


const Tasupport = {
    makeassigment  :  "js assigment",

    fullTime :  true,
    __proto__:teachingSupport
}

// teacher.__proto__ = user

// Object.setPrototypeOf(teachingSupport, Tasupport)


let anotherUsername  =  'maitresh'

String.prototype.trueLenght  = function(){
console.log(`${this}`)
console.log(`${this.name}`)
console.log(` True length is ${this.trim().length}`)

}
anotherUsername.trueLenght()


