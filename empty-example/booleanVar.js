function setup(){
    createCanvas(600, 400);
}
var on =true;
function draw(){

    if(mouseIsPressed){
        background(0, 255, 0);
    }else{
        background(0);
    }
    stroke(255);
    strokeWeight(4);
    noFill();
    if(mouseX>250 && mouseX<350 && mouseY>100 && mouseY<300){
        on = !on;
    }
    rectMode(CENTER);
    rect(300, 200, 100, 100);

    function mousePressed(){
        if(mouseX>250 && mouseX<350 && mouseY>100 && mouseY<300){
            on = !on;
        }
    }
}
