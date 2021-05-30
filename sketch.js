const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var pC;
var Covid;
var HP;
var EP;
function preload(){
  battleImg=loadImage("Battles.png")
}

function setup() {
  canvas=createCanvas(displayWidth-20,displayHeight-30);

  

  engine=Engine.create();
}

function draw() {

 
  drawSprites();
}


