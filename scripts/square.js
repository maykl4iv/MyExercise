var div = document.createElement('div');

div.style.width = '50px';
div.style.height= '50px';
div.style.backgroundColor = 'black';
div.style.position = 'relative';

document.body.style.marginLeft = '0px';
document.body.appendChild(div);

var timer = setInterval(function() {

  draw.call(this);

}, 35);


var isGrow = true;
var delta = 0;
var squareSize = 50;
var width = document.documentElement.clientWidth;
var step = width / 52;

function draw(timePassed) {

  if( parseInt(div.style.left) <= 0 ){
    isGrow = true;
  }else if( parseInt(div.style.left) >= (width - 100) ){
    isGrow = false;
  }

  randomColor();

  if(isGrow){
    delta += 20;
    div.style.left =  delta + 'px';
    if(delta >= step){
      squareSize += 1;
      div.style.width = squareSize + 'px';
      div.style.height = squareSize + 'px';
      step += width / 52;
    }
  }else{
    delta -= 20;
    div.style.left = delta + 'px';
    if(delta <= step){
      squareSize -= 1;
      div.style.width = squareSize + 'px';
      div.style.height = squareSize + 'px';
      step -= width / 52;
    }
  }

}

function randomColor(){
  div.style.backgroundColor = `rgb( ${randomGenerate()}, ${randomGenerate()}, ${randomGenerate()} )`;
}

function randomGenerate(){
  return Math.round( Math.random() * 255, -1);
}
