let arr =  [1,2,3,4,5,6,7,8,9,10]

let newarr   = arr .every((num)=>(num%2 ==0))
console.log(newarr)



const fields = [
    "maitresh",
    "xyz@gmail.com",
    "amrtavati"
]

let newfield  = fields.every(fields    => fields !== "")

console.log(newfield)


const products = [
  { name: "Phone", stock: 10 },
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 2 }
];



const availabe  = products.every((product)=>{
    product.stock > 0
})

console.log(availabe)