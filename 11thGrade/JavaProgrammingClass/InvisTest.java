import objectdraw.*;
import java.awt.*;
import java.util.Random.*;

//start them off as white DONE   
//one is 30x30 another is 45x45 and lastly 80x80 DONE
//boxes created randomly on screen    DONE
//if(box.contains(point)) user tries to click on a box
//on exit, show points
//on reset, reset variables and make random box locations
//75 only medium
//100 for only small
//50 only the large
//-1 for each mouse click

   public class InvisTest extends WindowController{
      private RandomIntGenerator randy; 
      private int Num1;
      private int Num2;
      private int Num3;
      private int Num4;
      private int Num5;
      private int Num6;
      private FilledRect stillRect;
      FilledRect box1;
      FilledRect box2;
      FilledRect box3;
      Text msg;
      int points;

         public void begin(){
              randy = new RandomIntGenerator(1,600);
              Num1 = randy.nextValue();
              Num2 = randy.nextValue();
              Num3 = randy.nextValue();
              Num4 = randy.nextValue();
              Num5 = randy.nextValue();
              Num6 = randy.nextValue();
              box1 = new FilledRect(Num1, Num2, 30,30, canvas);
              box1.setColor (Color.white);
              box2 = new FilledRect(Num3, Num4, 45,45, canvas);
              box2.setColor (Color.white);
              box3 = new FilledRect(Num5, Num6, 80,80, canvas);
              box3.setColor (Color.white);
      }
      //BOOLEAN bigbox and midd
          public void onMouseClick(Location point){
             if(box1.contains(point))
               points += 50;
             else if(box2.contains(point))
               points += 75;
             else if(box3.contains(point))
               points += 100;
             else
               points -= 1;
         }
          public void onMouseExit(Location point){
            msg = new Text("You have  " + points, 500,100, canvas);
            msg.setFontSize(20);
          }
          public void onMouseEnter(Location point){
            canvas.clear();
          }

//               text = new Text("This rectangle is " + Num1 + " by " + Num2 + " pixels long and the x coordinate is " + point.getX() + " while the y coordinate is " + point.getY() , 200, 50, canvas); 
//               sayColor = new Text("The rgb vaue is " + color1 + " | " + color2 + " | "+ color3, 200, 150, canvas);
//               text.setFontSize(20);
//               sayColor.setFontSize(20);
//               
//          }
         }