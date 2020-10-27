import objectdraw.*;
import java.awt.*;
   public class Votes extends WindowController{
      Line line1, line2;
      Text msg1, msg2, msg3, msg4;
      int countA, countB, countC, countD;
         public void onMouseEnter(Location point){
            canvas.clear();
            line1 = new Line(canvas.getWidth()/2 , 0, canvas.getWidth()/2, canvas.getHeight(), canvas);
            line2 = new Line(0,canvas.getHeight()/2, canvas.getWidth(),canvas.getHeight()/2,  canvas);
         }
         public void onMouseClick(Location point){
            // if(point.getX() < canvas.getWidth()/2
//                countA++;
//             else
//                countB++;
              if((point.getX() < canvas.getWidth()/2)&&(point.getY() < canvas.getHeight()/2))
         countA++;
         else if ((point.getX() >= canvas.getWidth()/2)&&(point.getY() < canvas.getHeight()/2))
            countB++;
         else if ((point.getX() < canvas.getWidth()/2)&&(point.getY() >= canvas.getHeight()/2))
            countC++;
         else 
            countD++;
         }
         public void onMouseExit(Location point){
            msg1 = new Text("votes in the bottom right corner: " + countD , canvas.getWidth()/2 , canvas.getHeight()/2 , canvas);
            msg1.setFontSize(20);
            msg1.setColor(Color.RED);
            //bottom right
            
            msg2 = new Text("votes in the top right corner: " + countB , canvas.getWidth()/2, 100  , canvas);
            msg2.setFontSize(20);
            msg2.setColor(Color.BLUE);
            //top right
            
            msg3 = new Text("votes in the top left corner: " + countA , 10 , 100 , canvas);
            msg3.setFontSize(20);
            msg3.setColor(Color.ORANGE);
            //top left           
            msg4 = new Text("votes in the bottom left corner: " + countC , 10 , canvas.getHeight()/2 , canvas);
            msg4.setFontSize(20);
            msg4.setColor(Color.GREEN);      
            //bottom left  
             }
   }
   
    //not dcba
    //
