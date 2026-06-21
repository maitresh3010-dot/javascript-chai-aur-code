let arr = [1,2,3,4,5,6]

let print = (ele)=>{

    console.log(ele)

}



console.log(arr.forEach(print))


let arr2 = [10,30,40,50,60]

console.log(arr2.forEach(function(elem){
    console.log(elem)
}))


let obj = [
   { name:"maitresh",
            age: 30,
        city:"rahatgeon",
        sate:"maharashtra"},

        { name:"prajwal",
            age: 15,
        city:"rahatgeon",
        sate:"maharashtra"},

        { name:"maitresh",
            age: 30,
        city:"rahatgeon",
        sate:"maharashtra"},
        { name:"maitresh",
            age: 30,
        city:"rahatgeon",
        sate:"maharashtra"},
        { name:"maitresh",
            age: 30,
        city:"rahatgeon",
        sate:"maharashtra"}
]
   

console.log(obj.forEach((element)=>{

    console.log(element)

}))
  


let mb  = [10,3,340,450,]
  console.log(mb.forEach(function(ele){
    console.log(ele*2)
  }))