function solution(number){
  let th = ~~(number / 1000),
      hn = ~~(number / 100) - th * 10,
      ty = ~~(number / 10) - th * 100 - hn * 10,
      tn = number - th * 1000 - hn * 100 - ty * 10;

  let result = '';

  if(th !== 0){
    switch(th){
      case 1:
        result = 'M';
        break;
      case 2:
        result = 'MM';
        break;
      case 3:
        result = 'MMM';
        break;
    }
  }
  console.log('after thousands', result)

   if(hn !== 0){
    switch(hn){
      case 1:
        result += 'C';
        break;
      case 2:
        result += 'CC';
        break;
      case 3:
        result += 'CCC';
        break;
      case 4:
        result += 'CD';
        break;
      case 5:
        result += 'D';
        break;
      case 6:
        result += 'DC';
        break;
      case 7:
        result += 'DCC';
        break;
      case 8:
        result += 'DCCC';
        break;
      case 9:
        result += 'CM';
        break;
    }
  }
  console.log('after hunderds', result)

  if(ty !== 0){
    switch(ty){
      case 1:
        result += 'X';
        break;
      case 2:
        result += 'XX';
        break;
      case 3:
        result += 'XXX';
        break;
      case 4:
        result += 'XL';
        break;
      case 5:
        result += 'L';
        break;
      case 6:
        result += 'LX';
        break;
      case 7:
        result += 'LXX';
        break;
      case 8:
        result += 'LXXX';
        break;
      case 9:
        result += 'XC';
        break;
    }
  }
  console.log('after decade', result)

  if(tn !== 0){
    switch(tn){
      case 1:
        result += 'I';
        break;
      case 2:
        result += 'II';
        break;
      case 3:
        result += 'III';
        break;
      case 4:
        result += 'IV';
        break;
      case 5:
        result += 'V';
        break;
      case 6:
        result += 'VI';
        break;
      case 7:
        result += 'VII';
        break;
      case 8:
        result += 'VIII';
        break;
      case 9:
        result += 'IX';
        break;
    }
  }
  console.log('after units', result)

  return result;
}

console.log( solution(5) );
