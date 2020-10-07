var Cake;

function preload() {
    Cake = loadImage("cake.png");
}

function setup() {
    createCanvas(600,600);
}
function draw() {
    background(Cake);
}