//!SELECTION SORT
//!find largest element and move it to the sorted part of array to make unsorted part sorted.
//!no.of comparisons will be like n-1,n-2,n-3,...0 =n(n-1)/2 = O(n^2)
//!best and worst both are (n^2)
//!easy

public class SELECTION{

    public static void selectionSort(int arr[]){

        for(int i = 0; i < arr.length; i++){
            //!find the max item in the remaining array and swap with correct index
            int last = arr.length-i-1;
            int maxIndex = getMax(arr,0,last);

            //now got the last position and the maxIndex
            int temp = arr[last];
            arr[last] = arr[maxIndex];
            arr[maxIndex] = temp;

            }
        }


        static int getMax(int[] arr, int start, int end){
            int max = 0;
            for(int i = start ; i <= end; i++){
                if(arr[i] > max){
                    max = i;
                }
            }
            return max;
        }
    }
}