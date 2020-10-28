var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1Img , c2Img ,c3Img,c4Img,tImg;

var cars, car1, car2, car3, car4;

function preload(){
  c1Img=loadImage("images/car1.png");
  c2Img=loadImage("images/car2.png");
  c3Img=loadImage("images/car3.png");
  c4Img=loadImage("images/car4.png");
  tImg=loadImage("images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
