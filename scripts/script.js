const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'2','3'];

//Function for sort all element in array
const sortingAllElement = (arr) => {
  let arr1 = arr.slice();
  arr1.sort( (a, b) => {
    if( a > b) return -1;
    else if( a < b) return 1;
  });

  return arr1;
}

//Function for sorting all element in the end of array
const sortingString = (arr) => {
  arr.sort( (a, b) => {
    if ( typeof a === 'string') return 1;
    else return -1;
  });

  return arr;
}

//Function to sort array
const sortArr = (arr) => {

  sortingAllElement(arr)

  sortingString(arr);

  return arr;
}
  //Write string element in array of object
const arrayOfString = (arr, obj) => {
  for ( let i = 0; i < arr.length; i++){
    if( typeof arr[i] === 'string'){
      obj['s'].push( arr[i]);
    }
  }

  obj['s'].sort( (a, b) => {
    return a - b;
  })

  return obj;
}

const createObjectAboutArray = (arr, obj) => {
  for( let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string'){
      obj['s'] = [];
    }else if( arr[i] != arr[i + 1]){
      obj[arr[i]] = 0;
    }
  }

  return obj;
}
//Function which know which elements in array
const ElementsInArray = (arr) => {
  const obj = {};
  arr = sortArr(arr);

  createObjectAboutArray(arr, obj);

  arrayOfString(arr, obj);

  return obj;
}
//Function for transforming an object into an array
const transformObj = (obj) => {
  const arr = [];
  for(  let key in obj){

    //In this 'if' element to array push another array if value of key object over then '1' or
    //push element if it is equal '1'
    if(obj[key] > 1){
      arr.push([]);
    }else{
      arr.push(+key);
    }

    //Here program push need's elements
    for( let i = 0; i < arr.length; i++){
      if(Array.isArray( arr[i]) ){
        if( +key === arr[i][0]){
          continue;
        }else if(arr[i].length === 0){
          for( let j = 0; j < obj[key]; j++){
            arr[i].push(+key);
          }
        }else{
          continue;
        }
      }
    }

    if(key === 's'){
      arr.push(obj['s']);
    }

  }

  return arr;
}

//Function for count same elements in arr
const countElem = (arr) => {
  const obj = ElementsInArray(arr);

  for( let key in obj){
    for( let i = 0; i < arr.length; i++){
      if( +key === arr[i]){
        obj[key]++;
      }
    }
  }

  return obj;
}
//Function cleaning room
const room = arr => {
  let arrRet = [];
  let obj = countElem(arr);

  arrRet = transformObj(obj);


  return arrRet;

}


console.log( room(array));
