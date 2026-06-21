const randomcolor = function(){
    const hexcolr = '0123456789ABCDEF'

    let color = '#'
    for(let i = 0; i < 6; i++){
         color += hexcolr[Math.floor(Math.random() * 16)]
    }
    return color

}

let s1

const Chainging = function(){
    s1 = setInterval(bgchnage, 1000)
    
}

const stopping = function(){
    clearInterval(s1,1000)
    s1 =null
}

function bgchnage(){
    document.body.style.backgroundColor = randomcolor();
}

document.querySelector('#start').addEventListener('click', Chainging)
document.querySelector('#stop').addEventListener('click', stopping)
