class Figura {

 constructor(x, y, tam, col) {

  this.x = x;

  this.y = y;

  this.tam = tam;

  this.col = col;

 }



 display() {

  fill(this.col);

rect(this.x, this.y, this.tam);

 }

}



let figuras = [];



function setup() {

 createCanvas(500, 500);

 noStroke();



 figuras = [

  new Figura(110, 190, 300, '#44e6ef'),

  new Figura(220, 150, 120, '#c597e0'),

  new Figura(300, 150, 70, '#f285e5')

 ];

}



function draw() {

 background(132
 );



 for (const figura of figuras) {

  figura.display();

 }

}