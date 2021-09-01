const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const getItemsFromHtml = (html) => {

    const sorted = [];

    let targetName = 'advItem__title';
    let targetPrice = 'bulls-item_price';

    let posName = 0;
    let posPrice = 0;
    let i = 1;

    while (true) {
      if(i % 2 === 0){
        let foundPosName = html.indexOf(targetName, posName);
        if (foundPosName == -1) break;
        let foundPosPrice = html.indexOf(targetPrice, posPrice);
        if (foundPosPrice == -1) break;

        let name, price;
        name = html.slice( foundPosName, (foundPosName + 100) );
        price = html.slice( foundPosPrice, (foundPosPrice + 100) );

        let oBraket = name.indexOf('>');
        let cBraket = name.indexOf('<');

        name = name.slice( ++oBraket, cBraket);

        let oBraketPrice = price.indexOf('>');
        let cBraketPrice = price.indexOf('<');

        price = price.slice( ++oBraketPrice, cBraketPrice);
        price = Number(price.replace(/\D+/g,""));
        sorted.push({name, price});

        posName = foundPosName + 1;
        posPrice = foundPosPrice + 1;
      }else{
        posName = html.indexOf(targetName, posName);
        if (posName == -1) break;
        posPrice = html.indexOf(targetPrice, posPrice);
        if (posPrice == -1) break;
        posName += 1;
        posPrice += 1;
      }

      i += 1;
    }

    console.log(sorted);

  }


var xhr = new XMLHttpRequest();

xhr.open('GET', proxyUrl + 'https://76464545455.drom.ru/', false);

xhr.send();

if (xhr.status != 200) {
  // обработать ошибку
  console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  getItemsFromHtml(xhr.responseText);
  console.log( xhr.responseText ); // responseText -- текст ответа.
}
