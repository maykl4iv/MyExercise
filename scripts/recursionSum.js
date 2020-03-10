function recurtionSum(arr){
  if(arr.length === 1){
    return arr[0]
  }else{
    let last = arr[arr.length - 1];
    arr.length -= 1;
    return last + recurtionSum(arr);
  }
}

console.log( recurtionSum([1,2,3]) );
