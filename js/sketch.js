var mySong, amplitude;
var mousePressed


function preload() { //preload starts before setup, prevent buffering or errors from large files like media files
    soundFormats('mp3');
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}


function setup() { //setup runs once at the start
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
   canvas.parent("p5container");
   

    mySong.play();
    background(1);
    noStroke();
    amplitude = new p5.Amplitude();
    rectMode(CENTER);
    console.log(amplitude);


play = false;
var button = createButton("Play");
button.center();
button.addClass('btn')

button.mousePressed(function() {
play = true;
mySong.play();
button.hide();
});


}

function draw() {  //draw runs 60 frames a second
    
    var level = amplitude.getLevel();
    var vol = map(level, 0, 1, 0, 1000);
    var col = map(level, 0, 1, 0, 255);

    background(col);

    fill(col, 255, 255);
    ellipse(width / 2, height / 2, vol);
    
    fill(255, 255, col);
    ellipse(width / 2, height / 2, vol/2);
}

