function toWeirdCase(str){
  let weird = '';
  return str.split(' ').map( (e) => {
    weird = e.split('').map( (elem, i) => {
      if( i % 2  === 0){
        return elem.toUpperCase();
      }else{
        return elem.toLowerCase();
      }
    })
    return weird.join('');
  }).join('');
}
