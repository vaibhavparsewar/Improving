//!Run outer for loop for no. of rows
//!for every row how many columns are there and type of element

public class pattern {
    

    //!1.

    static void pattern1(int n){
        for(int i = 1; i <= n ; i++){
            for(int j = 1; j <= i; j++){
                System.out.print("* ");
            }
            System.out.println();   //new line

        }
    }

    //!2.
    static void parrrtern2(int n){
        for(int i =1 ; i <=n; i++){
            for(int j = 1; j <=n; j++){
                System.out.println("*");
            }
            System.out.println();
        }
    }

    //!3.
    static void parrrtern3(int n){
        for(int i =1 ; i <=n; i++){
            for(int j = 1; j < n-i+1; j++){
                System.out.println("*");
            }
            System.out.println();
        }
    }

    //!4.
    static void parrrtern4(int n){
        for(int i =1 ; i <=n; i++){     //running n times
            for(int j = 1; j <= i; j++){
                System.out.println(j);
            }
            System.out.println();
        }
    }

    //!5. ARRORW LIKE STRUCTURE |> pattern starts decreasing after the value of n
    static void parrrtern4(int n){      
        for(int i =1 ; i <=2*n-1; i++){     //running 2n-1 times
            if(i <= n){
                for(int j =i; j>=1; j--){
                    System.out.println("*");
                }
            }
            else{
                for(int j = i; j < 2*n-1; j++){
                    System.out.println("* ");
                }
            }
        }
}

    //!KUNALS APPROACH
    static void parrrtern44(int n){      
        for(int i =1 ; i <=2*n-1; i++){     //running 2n-1 times
          int totalColsInRow = i>n ? 2*n-i:i;

          for(int j =1; j< totalColsInRow; j++){
            System.out.println("* ");
          }
        }        
        
}

    //!6. DIAMOND <>
    static void parrrtern5(int n){      
        for(int i =1 ; i <=2*n-1; i++){     //running 2n-1 times
          int totalColsInRow = i>n ? 2*n-i:i;

          //printing spaces   4,3,2,1
          int noOfSpaces = n-totalColsInRow;
          for(int s = 1; s<= noOfSpaces; s++){
            System.out.println(" ");
          }

          //printing *
          for(int j =1; j<= totalColsInRow; j++){
            System.out.println("* ");
          }
        }        
        
}

    //!6. ROCKET UPPER PART ^
    static void parrrtern6(int n){      
      for(int i = 1; i <= n ; i++){

        for(int j = i; j < n ; j++){
            System.out.print(" ");
        }
        for(int j = i; j >= 1; j--){        //i till 1
            System.out.print(j);
        }
        for(int j = 2; j <=i; j++){     //2 till i
            System.out.print(i);
        }
      }



      ///!
       ^
      for(int i = 1; i <= n ; i++){

        for(int j = 1; j < n ; j++){
            System.out.print(" ");
        }
        for(int j = 1; j <= i; j++){        //i till 1
            System.out.print(j);
        }
   
      }
      System.out.println();
       
      
      //!DIAMOND
      for(int i =1 ; i <=2*n-1; i++){     //running 2n-1 times
        int totalColsInRow = i>n ? 2*n-i:i;

        //printing spaces   4,3,2,1
        int noOfSpaces = n-totalColsInRow;
        for(int s = 1; s<= noOfSpaces; s++){
          System.out.println(" ");
        }

        //printing *
        for(int j = i; j >= 1; j--){        //i till 1
            System.out.print(j + " ");
        }
        for(int j = 2; j <=i; j++){     //2 till i
            System.out.print(i + " ");
        }

        System.out.println();
        }


    
        //!PATTERN BOX - minimum distance from the wall
        //!distance from above wall = no.of rows
        //!distance from left wall = no.of cols
        //!distance from right = n - distance from left
        //!distance from right = n - distance from top
        AND minimum of all of these is answer


        n = 2*n;
        for(int i = 0; i < n; i++){
            for(int j = 0 ; j < n; j++){
                int atEveryIndex = Math.min(Math.min(i,j), Math.min(n-i,n-j)) ;    //assumed

                System.out.println(atEveryIndex +" ");
            }
            System.out.println();

        }





          
        
}


}