const foldArray = (arr, runs) => {
  let result = [];
  let mid = [...arr];

    if( arr.length < 2){
      return arr;
    }

    for(let i = 0; i < runs; i++){
      result = [];

      if( mid.length % 2 !== 0 ){
        let n = ~~( mid.length / 2);

        for(let j = 0; j < n; j++){
          result.push( mid[j] + mid[mid.length - j - 1] );
        }
        result.push(mid[n]);

      }else if(mid.length % 2 === 0){
        let n = mid.length / 2;

        for(let j = 0; j < n; j++){
          result.push( mid[j] + mid[mid.length - j - 1] );
        }
      }

      mid = [...result];
    }

    return result;
}

console.log( foldArray([1,2,3,4,5], 3) );
