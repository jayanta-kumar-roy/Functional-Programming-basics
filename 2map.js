var animals = [
    {name:'Fluffykins' ,species:'rabbit'},
    {name:'caro',species:'dog'},
    {name:'Hamilton',species:'dog'},
    {name:'harold',species:'fish'},
    {name:'ursula',species:'cat'},
    {name:'Jimmy',species:'fish'},
]


// names=[]
// for(var i=0;i<animals.length;i++){
//     names.push(animals[i].name);
// }

// NOW LETS DO IT USING MAP

var names = animals.map(function(animal){return animal.name})
// WE CAN DO THIS USING ARROW FUNCTION
// var names = animals.map((animal)=>animal.name)
console.log(names)