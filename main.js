var status="";
img="";

function setup(){
  canvas= createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector("cocossd",modelLoaded);
  document.getElementById("status").innerHTML="status: detecting objects";
}

function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420)
    fill("red")
    text("dog",45,75)
    noFill();
    stroke("red")
    rect(30,60,450,350)

    fill("red")
    text("cat",280,120)
    noFill();
    stroke("red")
    rect(250,90,350,300)
}

function modelLoaded(){
  console.log("model loaded");
  status=true;
  objectDetector=objectDetector(img,gotResults);

}

function gotResults(results,error){
  if(error){
    console.log(error)
  }
  console.log(results)
}
