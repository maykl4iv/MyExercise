function spinWords(str){
  const arr = str.split(' ').map( (e) => {
    if( e.length > 4) return e.split('').reverse().join('');

    return e;
  })

  return arr.join(" ");
}

console.log(spinWords("Hllo warriors"));
