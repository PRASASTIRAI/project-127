song="";

function play(){
    song.play();

}

function setup(){
    console.log("canvas loaded");
    canvas = createCanvas(600,500);
    canvas.center();


    video = createCapture(VIDEO);
	video.hide();
}

function modelLoaded(){
    console.log("model is loaded");
}

function preload(){

song = loadSound("music.mp3");

}

function draw(){
image(video,0,0,600,500);
}

function gotPoses(results)
{}