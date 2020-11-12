grafico1 = document.querySelector("#grafico1");

let x = [];
let y = [];

let paso1 = (3 - (-3)) / 200;
for(let xV = -3; xV <=3; xV += paso1)
{
    x.push(xV)
    y.push(Math.E*Math.exp(xV))
}
console.log(x);
console.log(y);

Plotly.newPlot(grafico1, [
    {x: [], y: []}, {x:x, y: y}
    ],
    { margin: { t:0 }, } );

// let x1 = [];
// let y1= [];

let paso2 = (3 - (-3)) / 200;
for(let xK = -3; xK <=3; xK += paso2)
{
    x.push(xK)
    y.push(Math.E*Math.exp(-xK))
}
console.log(x);
console.log(y);

Plotly.newPlot(grafico1, [
    {x: [], y: []}, {x:x, y: y}
    ],
    { margin: { t:0 }, } );

