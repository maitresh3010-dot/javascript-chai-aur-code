;

class User{
    constructor (username){
        this.username = username 
    }
}


class teacher extends User{
    

    constructor(username, email, age){
        super(username)
        this.age =age
        this.email =email
    }

    static getme(){
        return `${this.email}`
    }
}


const chai = new teacher("maitresh","xyz@gmail.com", 21)
console.log(chai)


