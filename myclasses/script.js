// class User{
//     constructor (username, email,password){
//         this.username =  username
//         this.email = email
//         this.password =  password
//     }


//     enryptPass(){
//         return `${this.password}abc`
//     }
// }


// const chai =  new  User("maitresh","xyz", "123")
// console.log(chai.enryptPass())





//bhind the seen 

function User(username, email, age){
    this.username = username

    this.email =  email
    this.age = age

}

User.prototype.username = function(){
    return `${this.username.toUpperCase()
    }`
}

const tea = new User("majd","eafr",333)
console.log(tea)