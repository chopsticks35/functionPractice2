//var getName = function(obj){
//   return obj.name;
//}

//var totalLetters = function(wordString){
//    var counter = 0
//    var i;
//    for (i=0; i<wordString.length; i++){
//        counter += wordString[i].length;
//    }
//    return counter;
//    console.log(counter);
//}

//var keyValue = function(key, value){
//    var obj = {};
//    object[key] = value;
//    return obj;
//    
//}

//var negativeIndex = function(circArray, negNum){
//    return circArray[circArray.length + negNum];
//}
//
//var removeM = function(wordString){
//    var results = '';
//    var i;
//    for(i=0; i<wordString.length; i++){
//        if (wordString[i] != 'm' || wordString[i] != 'M' ){
//            results = results + wordString[i]
//        }
//        return results;
//}

//var printObject = function(obj){
//    for (key in obj){
//    document.write(key + ' is ' + obj[key] + '\n')
//  }
//}
//printObject({ a: 10, b: 20, c: 30 });
//printObject({ firstName: 'pork', lastName: 'chops' });

//    var vowels = function(wordString){
//    var results = [];
//    var i;
//    var vowelList = {
//        
//        'a': true,
//        'e': true,
//        'i': true,
//        'o': true,
//        'u': true
//        };
//
//    for (i=0; i<wordString.length; i++){
//        if (wordString[i] in vowelList){
//            results.push[i];
//        } 
//        return results;
//    }
//

//var twins = function(letterArray){
//    
//    if (letterArray.length % 2 === 1){
//        return false;
//    }
//    else {
//        var i;
//        for(i=0; i<letterArray.length; i+=2){
//            if (letterArray[i] != letterArray[i+1]){
//                return false;
//                }
//            }
//        }
//    return true;
//};
//
//
//console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
//console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
//console.log(twins(['a', 'a', 'b', 'z']));
//console.log(twins(['a', 'a', undefined]));

//var or = function(trueArray){
//    var i;
//    for (i=0; i<trueArray.length; i++){
//        if (trueArray[i]==true){
//            return true;
//        }
//    }
//    return false;
//};
//
//console.log(or([]));

var unique = function(stringArray){
    var results = [];
    var i;
    for (i=0; i<stringArray.length; i++){
       if(results.indexOf(stringArray[i])==-1){
			results.push(stringArray[i]);
    }  
    return results;
    }
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
    
    