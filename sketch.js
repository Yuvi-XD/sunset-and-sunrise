const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour

var bg = "sunrise1.png";

function preload() {
    
getbackground_image()


}

function setup(){
     createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    Engine.update(engine);

   
if(backgroundImg)
background(backgroundImg)

fill("black")

textSize(40)

if(hour>=12){
    text("Time : "+ hour%12 + " PM", 50,100);
}
else if(hour==0){
    text("Time : "+"12 AM", 100,100);
}
else{
    text("Time : "+ hour%12 + " AM", 50,100);

}
}
async function getbackground_image(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson = await response.json()
    console.log(responsejson)
    var date = responsejson.datetime
    console.log (date)
     hour = date.slice(11,13)
    console.log (hour)
    if(hour>=14 && hour<=16){
        bg="sunrise1.png"}
else if(hour>=16 && hour<=18){
       bg="sunrise2.png"}        
else if(hour>=18 && hour<=20){
    bg="sunrise3.png"}
else if(hour>=20 && hour<=23){
        bg="sunset8.png"}
else if(hour>=0 && hour<=03){
    bg="sunset11.png"}
else{
   bg="sunset12.png"  }

backgroundImg=loadImage(bg)
}