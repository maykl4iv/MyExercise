const urls = [
  'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json',
  'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json'
]

function grab(url){
  return new Promise( (resolve, reject) => {
    fetch(url)
      .then(resolve => resolve.json())
      .then(resolve)
      .catch(reject)
  })
}

Promise.all([ grab( urls[0]), grab( urls[1])] )
  .then(resp => [].concat(resp[0], resp[1]) )
  .then( arr => arr.join(' '))
  .then( str => console.log(str));
