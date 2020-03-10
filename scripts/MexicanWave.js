const wave = (str) => {
  let result = [];
  str.split('').map( (e, i) => {
    e !== ' ' ? result.push (str.slice(0, i) + str[i].toUpperCase() + str.slice( i+1 ) ) : true;
  });
  return result;
}

console.log( wave('hello i am') );


// const wave = (str) => {
//   const arr = str.split('');
//   let result = [];
//
//   arr.map( (e, i) => {
//     result.push (str.slice(0, i) + arr[i].toUpperCase() + str.slice( i+1 ) );
//   })
//
//   return result;
// }
//
// console.log( wave('hello') );
