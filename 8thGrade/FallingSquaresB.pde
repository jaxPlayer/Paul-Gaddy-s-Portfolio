  // bottom square x and y
int xPos = 100;
int yPos = 650;
int speed= 10;
int rate= 15;
  //score
  // falling square
int w = 130;
int h = 130;
  //  squares move
int score = 0;
  //for my distance
float anime;
  //random function
int yDrop = 50;
float xDrop = 55;
  // width and height for squares
float RandNumber;

  void setup() {
    size(1500, 1500);
  }
  void draw() {
    background(#000080);
    RandNumber = random(50,450);
    // the two squares
    rect(xPos, yPos, w, h);
    stroke(#FF00FF);
    rect(xDrop, yDrop, 50, 50);
    // making the falling square fall
    yDrop=yDrop+speed;
    //making it return to the top!
    if(yDrop>950){
    yDrop=0;
    xDrop =RandNumber;
    }
    // how to score
    anime= dist(xPos,yPos,xDrop,yDrop);
       if( anime<50){
          score++;
   } else {
       // if it goes off the sceen make it return ( on the horizontal axis
        }
 if(xPos<0){
        xPos=500;
        }
        if(xPos>500){
        xPos=0;
        }
        // =score
        fill(0);
        textSize(50);
        text(score,50,50);
        if(score>150){
        speed= 10;
        }
        // hard
        if(score>200){
        speed= 15;
        }
        // you win
        if (score>350){
speed= 50;
}}
  // making the bottom square move right
void keyPressed() {
if (key == CODED) {
if (keyCode == RIGHT) {
//le right B
xPos= xPos+rate;
} else {
// making the bottom square move left
      }
if( key== CODED){
if(keyCode==LEFT){
// el lefto B
xPos=xPos-rate;
}}}}
