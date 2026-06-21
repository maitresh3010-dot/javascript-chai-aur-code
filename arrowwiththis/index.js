 const student = {
    name :"maitresh",
    age:10,
    props:this,

    marks:99,
    getMarks: ()=>{
          console.log(this)
          return this.marks

    },

    getInfo1  : function(){
        setTimeout(()=>{
            console.log(this)
    }, 4000)

    },
    getInfo2 : function (){
        setTimeout(function(){

            console.log(this)

        },200)
    }
 }



 console.log( student.props)