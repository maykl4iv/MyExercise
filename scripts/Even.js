function even(arr){
  for(i = 0; i < arr.length; i++){
    if( !(arr[i] % 2) ) arr.splice(i, 1);
  }

  return arr;
}

console.log(even([1,2,3,4,5,6,7,8,9] ));
