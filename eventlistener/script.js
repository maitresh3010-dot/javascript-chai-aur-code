// let btn = document.querySelectorAll("button")
// function sayhello (){

//     alert("|hello")

    

//     console.dir(btn)

// }


    
// for(btns of btn){
// // btns.onclick =  sayhello
// //   btns.onmouseenter = function(){
// //     console.log("welcome to  apana college")
// //   }

// // btns.addEventListener("click", sayhello)


// // btns.addEventListener("click" , function(){
// //     alert("apna college")


// // })

// btns.addEventListener("dblclick", ()=>{
//     console.log("chud gaye guru")
// })
// }
   //   niche  wali ek practisr problem hee  revise krne keliye //
// let btn = document.querySelector("button")

// btn.addEventListener("click", function(){
//     let h1 =  document.querySelector("h1")
//     let randomcolor =  genrateColor();
//     h1.innerHTML =  randomcolor;

//     console.log(h1)


//     let dev =  document.querySelector("div")
//     dev.innerHTML =  randomcolor;
//     dev.style.backgroundColor = randomcolor
// })


// function genrateColor(){
//     let red =  Math.floor(Math.random()*255)
//     let green =  Math.floor(Math.random()*255)
//     let blue =  Math.floor(Math.random()*255)

//     let color = `rgb(${red}, ${green}, ${blue})`

//     return color

// }




let btn =  document.querySelector('button')


//this is use of the this keyword

// let p  =  document.querySelector("p")

// let h1 =  document.querySelector("h1")


// let h3 =  document.querySelector("h3")

// function changecolor (){
//     console.log(this.innerText)
//     this.style.backgroundColor  =  "red"
// }


// btn.addEventListener('dblclick' , function(event){
//     console.log(event)
// })

// h1.addEventListener("click", changecolor)
// h3.addEventListener("click", changecolor)


// p.addEventListener("clicl",changecolor)
// let inp =  document.querySelector("input")

// inp.addEventListener("keydown", function(event){

//     // console.log(event.key)
//     console.log( 'code = ',event.code)


//     if(event.code == "ArrowUp"){
//         console.log("charector  move forword")
//     }

//     else if (event.code == "ArrowDown"){
//         console.log("charector is movedown word")
//     }

//     else if (event.code=  "ArrowLeft"){
//         console.log("charector is moved left")
//     }

//     else if (event.code =  "ArrowRight"){
//         console.log("charector is moverd right")
//     }
    
// })

let form  = document.querySelector("form")


form.addEventListener("submit", function(event){

    event.preventDefault();
    alert("form is submited")


 let inp = document.querySelector("input")

 console.log(inp.value)


})

