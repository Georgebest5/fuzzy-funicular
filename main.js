function preload()
{

}
function setup()
{
    canvas=createCanvas(600,600);
    canvas.position(100,300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,600);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50, 50, 80);
    circle(500, 50, 80);
    circle(500,500,80);
    circle(50,500,80);
}