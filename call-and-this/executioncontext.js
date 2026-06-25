  function setUsername (username){

   this.username =  username;
    console.log(`called ${username}`)

  }

wugwuu;

  function createUser (username, age , add){


    this.add =  add
    this.age =  age

    setUsername.call(this,username)

  }

  
const user1 = new createUser("chai", 33, "tfc")

console.log(user1)


