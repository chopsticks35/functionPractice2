var getName = function(object){
   return object.name;
}

//console.assert(getName({ name: 'Luisa', age: 25 }))

var totalLetters = function(wordString){
    var counter = 0;
    var i;
    for (i=0; i<wordString.length; i++){
        counter += wordString[i].length;
    }
    return counter;
    console.log(counter);
}