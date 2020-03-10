function couldEven(value){
  console.log(`OK : ${value + 1}`);
  return Promise.resolve(value);
}

function couldEvenTwo(value){
  console.log(`OK : ${value + 2}`);
  return Promise.resolve(value);
}

function couldEvenErr(value){
  console.log('ERROR');
  return Promise.reject(value);
}

couldEven(0)
  .then( (v) => {
    return couldEvenTwo(v);
  })
  .then( (v) => {
    return couldEvenErr(v)
  })
  .then(couldEven, couldEvenTwo)
  .then(couldEvenErr())
  .then(couldEven, couldEvenErr)
