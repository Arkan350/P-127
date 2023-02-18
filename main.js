var ohio = "";
var haddi = "";

function preload() {
    haddi = loadSound("Bones.mp3");
    ohio = loadSound("Believer.mp3");
}
function setup() {
    canvas = createCanvas(700,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,700,500)
}
