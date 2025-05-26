
public class LinearSearch {
        public static int linearSearch(int arr[], int vlaue){
            for(int i =0; i< arr.length; i++){
                if(arr[i] == value){
                    return i;
                }
            }
            return -1;
        }

    //!search in string
        public static boolean linearSearch(String name, Char target){
            for(int i =0; i< name.length(); i++){                   
                if(name.charAt(i) == target){
                    return true;
                }
            }
            return false;
        }
        //!use for(ch char:name){}
        //!use char [] array = names.toCharArray()      and loop in this 

    //!SEARCH IN 2D ARRAY
        public static int[] search(int[][] arr, int target){
            for(int row = 0 ; row < arr.length; row++){
                for(int col = 0; col < arr[row].length; col++){
                    if(arr[row][col] == target){
                        return new int[]{row, col};    //🔥🔥need to create object
                    }
                }
            }
            return new int[]{-1,-1};
        }


    //! HOW MANY ELEMENTS HAS EVEN DIGITS
    public int evenDigits(int[] arr){
        int totalEvenDigits = 0;
        for(int i = 0; i < arr.length; i++){
            int digits = 0;
            while(arr[i] > 0){
                digits +=1;
                arr[i] = arr[i]/10;
            }
            if(digits %2 == 0){
                totalEvenDigits +=1;
            }
        }
        return totalEvenDigits;
    }

    //!you can  convert to string and then take the length
    //!No.of digits =(int)(Math.log10(number))+1
    
}
