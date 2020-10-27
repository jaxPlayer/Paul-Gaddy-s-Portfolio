import objectdraw.*;
import java.awt.*;
import java.util.Random.*;

   public class TESTDNA extends WindowController{
      private RandomIntGenerator number; 
      private int count;
      private Text sentence1, sentence2, sentence3, sentence4 ;
      int cCount, tCount, gCount, aCount;
      int runs;
      private String strand;
         public void begin(){
            number = new RandomIntGenerator(0,3);
            count = number.nextValue();
            
            while(runs<20){
               count = number.nextValue();
               if(count == 0){
                  strand = strand + "c";
                  cCount++;
               }
               else if(count == 0){
                  strand = strand = "g";
                  gCount++;
               }
               else if(count == 0){
                  strand = strand = "a";
                  aCount++;
               }
               else{
                  strand = "t";
                  tCount++;
               }
               runs++;
            }
            
            sentence1 = new Text("C: " + cCount, 50 , 120, canvas);
            sentence2 = new Text("T: " + tCount, 50 , 140, canvas);
            sentence3 = new Text("A: " + aCount, 50 , 160, canvas);
            sentence4 = new Text("G: " + gCount, 50 , 180, canvas);
            sentence1.setFontSize(20);
            sentence2.setFontSize(20);
            sentence3.setFontSize(20);
            sentence4.setFontSize(20);
         }
      }