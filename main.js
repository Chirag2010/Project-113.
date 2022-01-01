function preload(){

}
function setup(){
canvas=createCanvas(640,480);

canvas.position(300,259);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}    
function draw(){
    image(video,150,100,350,300);
    tint(tint_color);
    fill(255,0,0);
    circle(150, 100, 100);
    circle(500, 100, 100);
    circle(500, 400, 100);
    circle(150, 400, 100);
    fill(0,255,0)
    rect(140, 150, 10, 200);
    rect(500, 150, 10, 200);
    rect(200, 400, 250, 10);
    rect(200, 100, 250, 10);

}
function take_snapshot(){
save('student_img.png');
}

