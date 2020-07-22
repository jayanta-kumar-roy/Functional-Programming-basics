var triple = function(x){
    return x*3;
}
// you can assign function just like variable
var waffle = triple

console.log(waffle(30))

//function can also be supplied to highed order functions 

var animals = [
    {name:'Fluffykins' ,species:'rabbit'},
    {name:'caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'harold',species:'fish'},
    {name:'ursula',species:'cat'},
    {name:'Jimmy',species:'fish'},
]

// var dogs=[]
// for(var i = 0;i<animals.length;i++){
//     if(animals[i].species==='dog'){
//         dogs.push(animals[i])
//     }
// } 
// SAME THING CAN BE DONE BY FILTER FUNCTION

// var dog = animals.filter(function(animal){
//     return animal.species==='dog'
// })

// YET ANOTHER WAY IS

var isDog = function(animal){
    return animal.species ==='dog'
}

var dog = animals.filter(isDog)


console.log(dog)
