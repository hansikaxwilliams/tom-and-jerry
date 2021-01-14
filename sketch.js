var tom, jerry;
var jerryImage1,jerryImage2,jerryImage3,jerryImage4;
var tomImage1, tomImage2, tomImage3, tomImage4;
var garden, gardenImage;

function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png")
    jerryImage1=loadAnimation("images/jerryOne.png");
    jerryImage2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImage3=loadAnimation("images/jerryFour.png");
    tomImage1=loadAnimation("images/tomOne.png");
    tomImage2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3=loadAnimation("images/tomFour.png");
    
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tomSleeping", tomImage1);
tom.scale=0.2
jerry=createSprite(200,600);
jerry.addAnimation("JerryStanding", jerryImage1);
jerry.scale=0.15;
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
           tom.velocityX=0;
        tom.addAnimation("catHappy", tomImage3);
        tom.x=300;
        tom.changeAnimation("catHappy");
        tom.scale=0.2;
        jerry.addAnimation("mouseHappy",jerryImage3);
        jerry.changeAnimation("mouseHappy")
        jerry.scale=0.15;
}

drawSprites();
}
function keyPressed(){
  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX= -5;
    tom.addAnimation("catRunning", tomImage2);
    tom.changeAnimation("catRunning");
    jerry.addAnimation("mouseTeasing", jerryImage2);
    jerry.frameDelay= 25;
    jerry.changeAnimation("mouseTeasing");
}

}