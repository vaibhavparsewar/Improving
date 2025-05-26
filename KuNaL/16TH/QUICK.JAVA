//!QUICK SORT(unstable sort)
//!divide and conquer
//!find pivot number and make sure after first pass smaller on left and bigger on right of the pivot
//!no space extra
//!best algo O(nlogn)
//!T(n) = T(k) + T(n-k-1) +n  //sorting k elements and then n-k-1 element as 1 is pivot
//!worst case when pivot is largest or smallest or k==0 means other half is empty
//T(n) = T(n-1) + n
//        = n^2

//!BEst case when both divided in equal halfs
// T(n) = T(n/2) + T(n/2) + O(n)
    //  = n(logn)  same like merge sort


public class Quick {

    public static void quickSort(int []nums, int low, int high){  //start and end is for swapping and high and low is for finding the space of array

        if(low >= high){
            return;
        }

        int s = low;
        int e = high;
        int m = s+(e-s)/2;
        int pivot = nums[m];

        while(s<=e){        //to find the imbalance condition

            //also a reason why if it's already sorted it will not swapped
            while(nums[s] < pivot){
                s++;
            }
            while(nums[e] > pivot){
                e--;
            }

            ///swap now
            if(s<=e){
                int temp = nums[s];
                nums[s] =  numns[e];
                nums[e] = temp;
            }
            s++;
            e++;
        }

      }

      //NOW pivot is at correct index please sort two halfs now
      Quicksort(numns, low, e);
      Quicksort(nums, s, high);



}
