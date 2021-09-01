const cutString = (str) => {
    let res;
    if(str.length > 57 ){
      let cutted = str.slice(0, 58);
      let last = cutted.lastIndexOf(' ');

      res = cutted.slice(0, last + 1);

      return res
    }

    return str; 
}

let str = '2021 Austrian Grand Prix 2021 Austrian Grand Prix 2021 Austrian Gra';
let str1 = cutString(str);
