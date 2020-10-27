import objectdraw.*;
import java.awt.*;
import java.util.Random.*;
//find the product of _ x times _
// print the product of _ times _ is _
// declare instance variables
// RandomIntGenerator randy
// =new RandomIntGenerator(1,9)
// 2 variables to get the numbers
// private intNum1, num2
// private Text msg1, msg2
// set num1 and num2 =0
// onMouseClick(Location point)
// num1 = randy.nextvalue()
// num2 = randy.nextvalue()
// msg = new Text("Find the product of " + num1 + "and " + num2 + "is" + _" (0,100,canvas)
// msg.setFontSize(25);
// msg.setColor(orange)
// onMouseExit(Location point)
//
public class RandomMultiplication extends WindowController{
   private RandomIntGenerator randy; 
   //assing in onmouseclick
   //private randy = new RandomIntGenerator(1,9);
   private int Num1;
   private int Num2;
   private Text msg1;
   private Text msg2;
   private int answer;
   
      public void onMouseClick(Location point) {
         randy = new RandomIntGenerator(1,9);
         Num1 = randy.nextValue();
         Num2 = randy.nextValue();
         msg1 = new Text("Find the product of " + Num1 + "and" + Num2 + "is", 100,100, canvas);
   }
      public void onMouseExit(Location point){
         answer=Num1*Num2;
         msg2 = new Text("Find the product of " + Num1 + "and" + Num2 + "is" + answer, 100,150, canvas);
      }
      public void onMouseEnter(Location point){
         canvas.clear();
      }
   }