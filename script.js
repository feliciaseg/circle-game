const radius = 100; //radien på cirkeln
let x,y;


function setup() {
    createCanvas(windowWidth, windowHeight); //sätter canvas ytan lika stor som fönstret
    x = random(windowWidth); //sätter cirkeln på random ställe på x-axeln (inom fönstret)
    y = random(windowHeight); //sätter cirkeln på random ställe på y-axeln (inom fönstret)
}

function draw(){
    background (11, 1, 40) //Bakgrundsfärgen
    fill(235, 252, 0); //färgen på cirkeln
    noStroke(); //tar bort bordern runt cirkeln
    ellipse(x, y, radius*2, radius*2); //skapar cirkeln med en width & height som e dubbelt så stor som radius
} 

function mousePressed() { //funktion som sker när man klickar
    let d = dist(mouseX, mouseY, x, y); // kollar om användaren klickat i cirkeln
    if (d < radius) { //om användaren klickat i cirkeln 
     x = random(windowWidth); //flytta cirkeln random på x-axeln
     y = random(windowHeight); // flytta cirkeln random på y-axeln
 }
}