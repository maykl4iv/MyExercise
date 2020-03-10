const interval = [
  [1, 4],
  [7, 10],
  [3, 5]
]

const reducer = (accumulator, currentValue) => accumulator + currentValue;



const searchForOverlapp = (arr) => {
  let searchedArr = [];

  arr = arr.sort( (a, b) => {
    return a[0] - b[0];
  })

  if( arr.some((e, i) => e[1] > arr[i][0] ) ){
    return arr;
  }else{
    return [[1,3]];


  }
}

function sumIntervals(intervals){
  let remnant = [];
  intervals = searchForOverlapp(intervals);

  remnant = intervals.map( (arr) => {
    return arr[1] - arr[0];
  });

  let sum = remnant.reduce(reducer);

  return sum;
}

console.log(sumIntervals(interval))
