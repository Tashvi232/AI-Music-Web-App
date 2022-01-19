song1="";
song2="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";

function preload() {
    song1=loadSound("Kevin MacLeod - Fluffing a Duck.mp3");
    song2=loadSound("alexander-nakarada-silly-intro.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
    console.log("Model is loaded");
}

function draw() {
    image(video,0,0,600,500);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}