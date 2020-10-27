import objectdraw.*;
import java.awt.*;
import java.util.Random.*;

//center rectangle
//put it in the center
//assign rect with and height to random number
// private FilledRect stillRect;
//FilledRect box;
//public void begin(){     
       // box = new FilledRect(100,100,100,100,canvas);
     //   box.setColor (Color.red);
     // }
     // public void onMouseExit(Location point){
       // box = new FilledRect(100,100,100,100,canvas);
        //box.setColor (Color.red);


   public class RandomRect extends WindowController{
      private RandomIntGenerator randy; 
      private RandomIntGenerator colors;
      private int Num1;
      private int Num2;
      private int color1;
      private int color2;
      private int color3;
      private FilledRect stillRect;
      FilledRect box;
      private Text text;
      private Text sayColor;
         public void begin(){
              new FramedRect(canvas.getWidth()/2, canvas.getHeight()/2, canvas.getWidth(), canvas.getHeight()/2, canvas);
      }
         // public void onMouseClick(Location point){
//               
//          }
         public void onMouseExit(Location point){
              canvas.clear();
         }
         public void onMouseEnter(Location point){
              randy = new RandomIntGenerator(20,120);
              colors = new RandomIntGenerator(1,256);
              Num1 = randy.nextValue();
              Num2 = randy.nextValue();
              color1 = randy.nextValue();
              color2 = randy.nextValue();
              color3 = randy.nextValue();
              box = new FilledRect(canvas.getWidth()/2, canvas.getHeight()/2, Num1, Num2, canvas);
              box.setColor(new Color(color1, color2, color3));
              text = new Text("This rectangle is " + Num1 + " by " + Num2 + " pixels long and the x coordinate is " + point.getX() + " while the y coordinate is " + point.getY() , 200, 50, canvas); 
              sayColor = new Text("The rgb vaue is " + color1 + " | " + color2 + " | "+ color3, 200, 150, canvas);
              text.setFontSize(20);
              sayColor.setFontSize(20);
              
         }
   }
   //onMouseEnter.getX() + onMouseEnter.getY()
 //Color myWhite = new Color(255, 255, 255);
 //setColor(new Color(0, 0, 0));
