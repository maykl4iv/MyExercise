function sumForNow(arr, n){
    let result = 0;

    for( let i = 0; i < n + 1; i++ ){
        result += arr[i];
    }

    return result
}


function solution(A) {
    let expect = 0, result = 0;

    for(let i = 0; i < A.length; i++){
      console.log('before', expect);
      expect += (i + 1);
      console.log('after', expect);
       if( expect === sumForNow(A, i) ) result += 1;


    }

    return result;

}

console.log( solution([1,3,4,2,5]) );
