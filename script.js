let radius = 100; //radien på cirkeln
let x, y;
let r, g, b;

let score = 0;



function setup() {
    createCanvas(windowWidth, windowHeight); //sätter canvas ytan lika stor som fönstret
    x = random(windowWidth); //sätter cirkeln på random ställe på x-axeln (inom fönstret)
    y = random(windowHeight); //sätter cirkeln på random ställe på y-axeln (inom fönstret)
    newCircle();  
}

function draw(){
    background (11, 1, 40) //Bakgrundsfärgen
    theCircle();
    scoreText();
    
} 

function theCircle(){
    fill(r, g, b); //färgen på cirkeln (variablerna blir random nummer)
    noStroke(); //tar bort bordern runt cirkeln
    ellipse(x, y, radius*2, radius*2); //skapar cirkeln med en width & height som e dubbelt så stor som radius

}

function mousePressed() { //funktion som sker när man klickar
    let d = dist(mouseX, mouseY, x, y); // kollar om användaren klickat i cirkeln
    if (d < radius) {
        newCircle();
        score++;
        if (score == 10) {
            radius /= 2;
        } 
        if(score == 20){
            radius /= 3;
        }
        if (score === 25) {
            clearInterval(interval);
            winner();
            
        }
    }
}

function winner() {
    
    text("Attention, please.", 50, 200);
    fill(255,255,0)
    textSize(40)

}

function newCircle(){
    x = random(windowWidth); //flytta cirkeln random på x-axeln
    y = random(windowHeight); // flytta cirkeln random på y-axeln
    r = random(255);
    g = random(255);
    b = random(255);
}
let interval = setInterval(newCircle, 1000); //flyttar cirkeln varje sekund

function scoreText(){
    fill(255,255,0)
    textSize(40)
    text("Score: " + score, 50, 50); //Skapar text med poängen, tvp sista är placering av texten
    
}