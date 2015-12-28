function truncate(str, num) {
  if(str.length > num){
    if(str.length <=3 ){
      str = str.substr(0, num);
    }
    else{
      str = str.substr(0, num-3);
    }
    str += '...';
  }
  
  return str;
}