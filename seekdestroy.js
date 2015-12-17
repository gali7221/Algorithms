function destroyer(arr){
  var remove = [];
  for(var i=0; i<arguments.length; i++){
    remove.push(arguments[i]);
    console.log(remove);
  }

  return arr.filter(function(item){
    if(remove.indexOf(item) >= 0){ // checks the current item is present in the remove by using indexOf(return index inside array if present)
      return false;
    }
    else {
      return true;
    }
  });
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
