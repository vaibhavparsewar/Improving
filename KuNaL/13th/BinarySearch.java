//!Used in sorted array
//!n/2^k = 1 -> n = 2^k -> log n = log 2^k ->logn = klog2 -> k =logn/log2 -> log(n)
//!k is total no. of levels or times the array is divided.




public class BinarySearch {

    public static int binarySearch(int[] arr, int value){
        int start = 0;
        int end = arr.length-1;
        
        while(start <= end){
            int mid = start+(end-start) /2;
            if(arr[mid] < value){
                end = mid-1;
            }
            else if(arr[mid] > value){
                start = mid+1;
            }
            else{
                return mid;
            }
        }
        return -1;
    }


    //!WHAT IF WE DON'T KNOW ARRAY IS SORTED IN ASCENDING OR DESCENDING ORDER;
    public static int binarySearch(int[] arr, int value){
        int start = 0;
        int end = arr.length-1;

        boolean isAscending = arr[start] < arr[end];
        
        while(start <= end){
            int mid = start+(end-start) /2;

            if(arr[mid] == value){      //common taken out
                return mid;
            }

            if(isAscending){
                if(arr[mid] > value){
                    end = mid-1;
                }
                else if(arr[mid] < value){
                    start = mid+1;
                }
            }
            else{
                if(arr[mid] < value){
                    end = start+1;
                }
                else if(arr[mid] > value){
                    start = end-1;
                }
                
            }
        
                }
                }
            
        
        
    
    
}
