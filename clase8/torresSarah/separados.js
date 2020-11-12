grafico1 = document.querySelector("#grafico1");
grafico2 = document.querySelector("#grafico2");
grafico3 = document.querySelector("#grafico3");

let x = [];
let y = [];

let paso1 = (5 - (-5)) / 200;
for(let xV = -5; xV <=5; xV += paso1)
{
    x.push(xV)
    y.push(2*(xV) -4)
}
console.log(x);
console.log(y);

Plotly.newPlot(grafico1, [
    {x: [], y: []}, {x:x, y: y}
    ],
    { margin: { t:0 }, } );

let x2 = [];
let y2 = [];

let paso2 = (4 - (-4)) / 200;
for(let xK = -4; xK <=4; xK += paso2)
{
    x2.push(xK)
    y2.push(6 * (xK)*(xK) -3 * (xK) -8 )
}
console.log(x2);
console.log(y2);

Plotly.newPlot(grafico2, [
    {x2: [], y2: []}, {x:x2, y: y2}
    ],
    { margin: { t:0 }, } );

let x3 = [];
let y3 = [];

let paso3 = (7 - (-7)) / 200;
for(let xM = -7; xM <=7; xM += paso3)
{
    x3.push(xM)
    y3.push(Math.sin(xM) )
}
console.log(x3);
console.log(y3);

Plotly.newPlot(grafico3, [
    {x3: [], y3: []}, {x:x3, y: y3}
    ],
    { margin: { t:0 }, } );
