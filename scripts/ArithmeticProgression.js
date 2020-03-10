var findMissing = function (list) {
  let delta = null;
  if( list[1] - list[0] > 0){
    (list[1] - list[0]) <= (list[2] - list[1]) ? delta = (list[1] - list[0]) : delta = (list[2] - list[1]);
  }else{
    (list[1] - list[0]) <= (list[2] - list[1]) ? delta = (list[2] - list[1]) : delta = (list[1] - list[0]);
  }
  let result = null;

  for( i = 1; i < list.length; i++){
    if( list[i] !== (list[i - 1] + delta) ) result = list[i] - delta;
  }

  return [result, delta];
}

console.log(findMissing([-1,-2,-4,-5]))
