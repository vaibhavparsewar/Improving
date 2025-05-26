//!SORTING CATEGORISED INTO (SPACE USED(in place, out of place), STABILITY(stable, unstable))
//!Inplace(bubble) - algo doesn't require extra space. out space is opposite(merge sort)
//!Stability - means after sorting first and second 40 both remains there itself and unstable (quick sort)
//!(increasing, non decreasing order), (decreasing order, non increasing order)

//!Bubble Sort OR Sinking Sort
//repeatedly comparing adjacent items and swap them 
//in one cycle highest element will be at the right end

//!which one to choose when
//!Bubble(O(n^2) and O(1) and stable)
//!Selection(O(n2) and O(1) and !stable)
//!Insertion(O(n2) and O(1) and stable)
//!Bucket(O(nlogn) and O(n) and stable)
//!Merge(O(nlogn) and O(n) and stable)
//!Quick(O(nlogn) and O(n) and !stable)
//!heap(O(nlogn) and O(1) and !stable)




//!BUBBLE SORT or SINKING SORT
//!Every step highest element is pushed to right side
//!no.of swaps will be like n-1,n-2,n-3,... =n(n+1)/2 = O(n^2)




public class BUBBLE{ 
    //!best case during sorted arrayll O(n)
    //!worst case O(n^2)        //n is no.of comparison
    //!as size of array growing no.of comparisons are also growing.

    public static void bubble(int [] arr){

        //run the steps n-1 times
        for(int i = 0; i < arr.length; i++){
            for(int j = 0; j<arr.length-i; j++){    //!each time the max element is gone at right so decreased by i
                if(arr[j] <arr[j+1]){
                    int temp  = arr[j];
                    arr[j] = temp;
                    arr[j+1] = temp;
                }
            }
        }
    }
}