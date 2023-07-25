function preload(){

}

function setup(){
   canvas=createCanvas(640,480);
   canvas.position(110,250);

   video=createCapture(VIDEO);
   video.hide();

    filterColor=""
}

function draw(){
   image(video,0,0,640,480);
   tint(filterColor)
}

function apply_filter(){
    filterColor = document.getElementById("color_holder").value
}

function take_snapshot(){
    save("Filter_image")
}