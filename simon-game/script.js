let gameSeq=[];
let userSeq = [];
let started =  false; 
let level  =  0;
let h2  =  document.querySelector("h2")
let btns =  ["box1", "box2", "box3", "box4"]

document.addEventListener("keypress", function() {
    if(started ==  false){
        console.log("game is started")
        started =  true;

        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash")

    setTimeout(() => {
        btn.classList.remove("flash")
        
    },200);


}

function levelUp(){
    level++;

    h2.innerText = `level ${level}`;

let randidx =  Math.floor(Math.random()*btns.length )

let randcolor =  btns[randidx]

let randbtn = document.querySelector(`.${randcolor}`)

    btnFlash(randbtn )




}
function btnPress(){ console.log("btn was pressed")
    console.log(this)
    btnFlash(boxs)
}


let allbtn =  document.querySelectorAll(".box")

for(boxs of allbtn){

    boxs.addEventListener("click", btnPress)

}

