const e = require( "express" )

class  User {

    constructor(user){
   this.user = user

    }


    logme(){
        return `login succesfully${this.user}`
    }

}


class Teacher extends User{
    constructor(username, age , email){

        super(username)
        this.age =age
        this.email = email
    }

 get(){
    return `${this.email}`
 }

}

const chai =  new Teacher('maitresh', 'xyz@gmail.com', 33)
console.log(chai)

console.log(chai.logme())