let input =  document.querySelector("input")


let ul =  document.querySelector("ul")


let li  =  document.querySelector("li")


let btn =  document.querySelector("button")


btn.addEventListener("click" , function(){

    let newli=  document.createElement("li")

         newli.innerHTML  = input.value 

         ul.appendChild(newli)

         let dbtn =  document.createElement("button")

         dbtn.innerText = 'delete'
         dbtn.classList.add("delete")

         newli.appendChild(dbtn)

         input.value = ""
})


ul.addEventListener('click', function(event){
  if(event.target.nodeName == "BUTTON"){
    let listItem =  event.target.parentElement;
    console.log("delte")
  }
    console.log(event.target.nodeName)
    console.log("btn is clicked")
})

// ul.addEventListener("click", function(event) { 
//     if (event.target.classList.contains("delete")) {
//         let par = event.target.parentElement
//         par.remove()
//     }
// })

