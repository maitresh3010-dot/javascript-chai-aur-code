let buttton =  document.querySelectorAll(".button")
let id  = document.querySelectorAll("id")

const body  = document.querySelector('body')




buttton.forEach(function(button){
    console.log(button)

    button.addEventListener("click", function(ele){

        console.log(ele.target)


        if(ele.target.id== "grey"){

            body.style.backgroundColor = "gray"
        }


 if(ele.target.id== "pink"){

            body.style.backgroundColor = ele.target.id
        }
         if(ele.target.id== "red"){

            body.style.backgroundColor =  ele.target.id
        }
         if(ele.target.id== "blue"){

            body.style.backgroundColor = ele.target.id
        }

    })
})