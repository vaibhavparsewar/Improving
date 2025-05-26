//! PATTERNS USING RECURSION

public class recursion3 {




    //!  *****
    //!  ****
    //!  ***
    //!  **
    //!  *
    static void triangle(int r, int c){     //initially col is 0
        if(r==0){
            return;
        }
        if(c<r){
            System.out.println("*");
            triangle(r,c+1);
        }
        else{
            System.out.println();
            triangle(r-1,0);
        }
    }


    //!  *
    //!  **
    //!  ***
    //!  ****
    //!  *****
    static void triangle2(int r, int c){     //initially col is 0
        if(r==0){
            return;
        }
        if(c<r){
            triangle(r,c+1);
            System.out.println("*");
        }
        else{
            triangle(r-1,0);
            System.out.println();
        }
    }

    //! BUBBLE SORT
    static void bubble(int arr[],int r, int c){     //initially r= arr.lenght-1 and col is 0
        if(r==0){
            return;
        }
        if(c<r){
            if(arr[c] > arr[c+1]){
                //swap
                int temp = arr[c];
                acc[c] = arr[c+1];
                arr[c+1] = temp;
            }
            bubble(r,c+1);
        }
        else{
            bubble(r-1,0);
        }
    }

    //! SELECTION SORT
    static void bubble(int arr[],int r, int c){     //initially r= arr.lenght-1 and col is 0
        if(r==0){
            return;
        }
        if(c<r){
            if(arr[c] > arr[c+1]){
                //swap
                int temp = arr[c];
                acc[c] = arr[c+1];
                arr[c+1] = temp;
            }
            bubble(r,c+1);
        }
        else{
            bubble(r-1,0);
        }
    }










    
}
