

function factory(req){
    if(req == "odd"){
       let odd = function (n){
    console.log(!(n%2 ==0))

} 
   return odd;
    }


  else  if(req == "even"){
        let even = function (n){
            console.log(n%2 ==0)
        }
       
       
       
        return even;
    }


    else{
        console.log("invalid request")
    }
}

req = "odd"

let func = factory(req)
func(5)