function multiplegreet(func, count){
  for (let i =0; i<count;i++){
    func();
  }
}

let  greet = function(){
    console.log("hello wrold")
}



multiplegreet(greet, 5)