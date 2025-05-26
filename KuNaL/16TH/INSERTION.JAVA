//!INSERTION SORT
//!select the element and place it correctly in it's LEFT SIDE
//!i should run from 0 to length-2
//!when j starts new it is already sorted left side so need to go on more left
//!j loop reverse chalto

//! BEST CASE1 O(n)
//! WORST CASE O(n^2)

public class INSERTION{

        public void insertion(int []arr){
            for(int i = 0; i< arr.length-1; i++){   //i goes till second last as j goes to last element
                for(int j = i+1; j > 0; j--){
                    if(arr[j] < arr[j-1]){
                        swap(arr,j,j-1);
                    }
                    else{
                        break;
                    }
                }
            }
        }
}