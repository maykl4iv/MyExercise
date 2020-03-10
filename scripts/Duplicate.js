Array.prototype.duplicate = function(){
  let n = this.length,
      arr = [...this];
  for(i = 0; i < n; i++){
    arr.push(arr[i]);
  }

  return arr;
}
