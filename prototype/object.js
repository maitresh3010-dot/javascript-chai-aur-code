function mul (number){

    this.number = number  
    return number*5;
}

console.log(mul(5))

mul.power = 2

console.log(mul.power)

console.log(mul.prototype)



function user(name, score){
    this.name =  name
    this.score   = score
}


user.prototype.increment =  function(){
    this.score++;
}


user.prototype.printMe = function(){
    console.log(`the price of the chai and tea is ${this.score}`)
}


const chai  = new  user("chai", 34)
const tea  =  new user("tea", 400)


console.log(chai)
console.log(tea)

printMe();