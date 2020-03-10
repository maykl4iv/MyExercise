let arr = {
  'a': [2],
  'b': [3],
  'c': [4]
}

const f = ({a, b, ...ok}) => {
console.log(ok)
  console.log(a, b)
}

f(arr);
