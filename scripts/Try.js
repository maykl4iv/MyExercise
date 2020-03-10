let a = '1- 2-3-4-5';
let arr = [], arr1 = [];

arr1 = a.split('');

for(i = 0; i < arr1.length; i++){
  if( !Number.isNaN(parseInt(arr1[i]) ) ) arr.push(arr1[i]);
}

let arr2 = [];

if( arr.length % 3 === 0 ){
  for( j = 2; j < arr.length; j += 3){
    arr2.push(arr[j-2]+arr[j-1]+arr[j]);
  }
}else if( arr.length % 3 === 1){
  for( j = 2; j < (arr.length - 4); j += 3){
    arr2.push(arr[j-2]+arr[j-1]+arr[j]);
  }
  arr2.push(arr[arr.length - 4] + arr[arr.length - 3])
  arr2.push(arr[arr.length - 2] + arr[arr.length - 1])
}else if(arr.length % 3 === 2){
  for( j = 2; j < (arr.length - 2); j += 3){
    arr2.push(arr[j-2]+arr[j-1]+arr[j]);
  }
  arr2.push(arr[arr.length - 2] + arr[arr.length - 1])
}


console.log(arr2.join('-'));
