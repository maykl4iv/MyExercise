var object1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];

for( i = 0; i < object1.length; i++){
  if(object1[i] % 2 === 0) result.push(object1[i]);
}

console.log(result);
