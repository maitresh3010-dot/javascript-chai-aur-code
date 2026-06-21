const promises1 =  new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('async call kela ahe ')

      resolve()
    },1000)
})


promises1.then(function(){
    console.log("call a gya he ")
})

// without constant and stroing it 
new Promise(function(resolve, reject){


    setTimeout(function(){
        console.log("async call 2")

        resolve();
    },1000)
}).then(function(){

    console.log("async2 is resolve")


})


// data load into the then
const promise3  =  new Promise(function(resolve, reject){

  setTimeout(function(){
    resolve({user:"maitresh", age :19, eamil:"xyz@gamil.com"})
  },1000)



})

promise3.then(function(user){
    console.log(user)
}) 


// use of the reject

const promise4  =  new Promise(function(resolve, reject){


setTimeout(function(){


    let error = false
    if(!error){

        resolve({user:"maitresh", age:20, city:"amravati"})
    }

    else{
        reject("ERROR: ERROR IS OCCURED ")
    }
}, 1000)


})

promise4.then(function(users){
    console.log(users)

    return users.user
}).then((username=>{
    console.log(username)
})).finally(()=>console.log("The promise is either resolved or rejected"))



// const promise5 =  new  Promise(function(resolve, reject){
//     setTimeout(function(){

//         let error = true;
//         if(!error){
//             resolve({username:"javascript", password:123})
//         } else {
//             reject('ERROR : js went wrong')
//         }
//     },1000)
// })
// async function consumepromise(params) {

//    const response = await promise5

//    console.log(response)
    
// }


// consumepromise();


// async   function getAllusers(){

// try {
    
//     const response  = await fetch('https://api.github.com/users/maitresh3010-dot')

//      const data = await response.json()

//     console.log(data)
    
// } catch (error) {
//     console.log("error:", error)
    
// }
// }

                                                                                             // getAllusers();


fetch('https://api.github.com/users/maitresh3010-dot')
.then((response)=>{
    return response.json()
})

.then((data)=>console.log(data))
.catch((error)=>console.log(error))