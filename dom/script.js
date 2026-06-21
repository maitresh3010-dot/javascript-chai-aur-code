// let div = document.querySelectorAll(".box")

// console.dir(div[0])

// let idx =1
//   for(divs of div)

//     {
//         div.innerText = `new unique value ${idx} `
//     }
// div[0].innerText =  "maitrehs"
// div[1].innerText= "tulshidas"
// div[2].innerText = " uke"
 


// let divs = document.querySelectorAll("container")

// console.log(divs)

//  let classes =   divs.getAttribute("class" ) ;
//  console.log(classes)
// let para =  document.querySelector("p")

// console.log(para.getAttribute("class"))


// let heading =  document.querySelector("h3")
// console.log(heading.setAttribute("class", "new class"))

// heading.style.backgroundColor= "blue"

// let div = document.querySelector("div")

// let newbtn = document.createElement("button")

// newbtn.innerHTML  = "click-me!"

// console.log(newbtn)

// console.log(document.body.append(newbtn))  ///end  of the node 


// let  fstbtn =  document.createElement("button")

// fstbtn.innerHTML ="start of div  outside"

// fstbtn.style.backgroundColor = "yellow"

// console.log(div.before(fstbtn))

// let  sndbtn =  document.createElement("button")

// sndbtn.innerHTML ="end of the div at outside "

// sndbtn.style.backgroundColor = "green"


// console.log(div.after(sndbtn))


// let  trdbtn =  document.createElement("button")

// trdbtn.innerHTML ="inside the div at end"

// trdbtn.style.backgroundColor = "grey"

// console.log(div.append(trdbtn))


// let  frtbtn =  document.createElement("button")

// frtbtn.innerHTML =" inside the div at start"

// frtbtn.style.backgroundColor = "brown"

// console.log(div.prepend(frtbtn))


// let newbtn = document.createElement("btn")

// newbtn.innerText = "click-me !"

// newbtn.style.backgroundColor = "red"
// newbtn.style.color  =  "white"


// console.log(document.body.prepend(newbtn))








// let newclas =  document.create\

// let para =  document.querySelector("p"

// )
//  console.log(para.getAttribute("class"))


//  console.log(para.classList.add( "newpara"))



// let newpara =  document.createElement("p")
// newpara.innerText = "hey i,m red!";
// newpara.style.color =  "red"
// console.log(document.body.append(newpara))


// let heading = document.createElement("h3")

// heading.innerHTML = " i am the blue h3!" 
// heading.style.color =  "blue"
// console.log(document.body.append(heading))


// let dev  =  document.createElement("div")
// dev.style.border = "solid 1px red"

// dev.style.backgroundColor = "pink"






// let newhead = document.createElement("h1")
// newhead.innerHTML ="i am in div"

// console.log(dev.append(newhead))


// let newpara2 =   document.createElement("p")
// newpara2.innerHTML = "ME TOO"
// console.log(dev.append(newpara2))
// console.log(document.body.append(dev))



let newbtn =  document.createElement("button")
let input =  document.createElement("input")

newbtn.innerHTML = "click me "

document.querySelector("body").append(input);
document.querySelector("body").append(newbtn)

newbtn.setAttribute("id","btn")
input.setAttribute("placeholder", "unsername")
console.log(document.querySelector("#id"))

newbtn.style.color = "white"

newbtn.style.backgroundColor = "blue"


let h =  document.createElement("h1")

h.innerHTML="DOM PRACTICE"
h.style.color = "purple"
h.style.textDecoration= "underline"


console.log(document.body.append(h))



let newpara =  document.createElement("p")

newpara.innerHTML= "Apna College  Delta Practice"

let targetworld =  "Delta"
newpara.innerHTML = newpara.innerHTML.replace(targetworld, `<strong>${targetworld}</strong>`)

console.log(document.body.append(newpara))

