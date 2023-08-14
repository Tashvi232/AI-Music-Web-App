song="";
Song="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";

function preload() {
    song=loadSound("Kevin MacLeod - Fluffing a Duck.mp3");
    Song=loadSound("alexander-nakarada-silly-intro.mp3");
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
    image(video,600,500,0,0);
}

function gotPoses(results) {
    if(results.length>0) {
        leftWristX = pose.leftWrist.x;
        leftWristY = pose.leftWrist.y;
        rightWristX = pose.rightWrist.x;
        rightWristY = pose.rightWrist.y;
        console.log(results);
    }
}