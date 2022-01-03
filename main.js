song1="";
song2="";

function preload() {
    song1=loadSound("Kevin MacLeod - Fluffing a Duck.mp3");
    song2=loadSound("alexander-nakarada-silly-intro.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);
}