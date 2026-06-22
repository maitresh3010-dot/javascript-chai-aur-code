// const user ={
//     username:"maitresh",

//     loginCount:"8",
//     sginedIN: true,



//     getuserDetal:function(){
//         console.log(`${this.username}`)
//     }
    
// }


// console.log(user.loginCount , user.getuserDetal())


// console.log(this.user)


//constructor


function User(username, loginCount, isLoggedin){

    this.username = username
    this.loginCount =  loginCount
  this.isLoggedin =  isLoggedin
  

   return this
}

const user1 =  User('maitresh', 12 , true)

const user2  = User('prajwal', 30, false)

console.log(user1.constructor)
// console.log(user2)

