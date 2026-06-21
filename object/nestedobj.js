const info = {
    student1:{
        name : 'maitresh',
        age : 22, 
        city : 'dheli',

    },
    student2:{
        name : 'rhatgaon',
        age : 22,
        city : 'dheli', 
    }, 
    student3:{
        name : 'tulshidas',
        age : 22,       }
}

console.log(info.student1.city)


for(let key  in info){
    console.log(key,info[key])
}