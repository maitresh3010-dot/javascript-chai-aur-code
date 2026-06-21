  let range = prompt("enter  the number maximum range ")
console.log(range)
let n = Math.floor(Math.random() * range + 1)

let guess = prompt("guess the number between 1 to " + range

)

while(true){
    if (guess == n){
        console.log("you win")

            break;
    }

    else if (guess == "exit"){
        console.log("you exit the game")
    }



    else if (guess > n){
        guess =  prompt("enter the smaller number")
    }    

    else if(guess < n){

        guess = prompt("enter the some near bigger number")
    }



    else {
        console.log("try again")
        guess = prompt("try again")
    }
        
    }
