function destroyer(arr) {

  var elemToDestroy = [];
  for(var i = 1; i < arguments.length; i++){
    elemToDestroy.push(arguments[i]);
  }

  var survived = arguments[0].filter(function(element, index){
    var toReturn = true;

    for(var i = 0; i < elemToDestroy.length; i++){
      if (element === elemToDestroy[i]){ 
        toReturn = false;
      }
    }
    return toReturn;

  });
  return survived;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
