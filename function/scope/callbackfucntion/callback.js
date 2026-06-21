function  mycal(a,b ,cb){
   let sum = a+b

   cb(sum)
}



mycal(2,3, function(result) {
    console.log(result);
});
