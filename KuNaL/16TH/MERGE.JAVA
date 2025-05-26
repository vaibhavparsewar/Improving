//!Divide and Conquer
//!divide until it cannot be broken further
//!merge halves by sorting them
//!stable sort and O(nlogn) and O(n) space complexity



static int[] mergeSort(int arr[]){
    if(arr.length ==  1){
        return arr;
    }

    int mid = arr.length/2;

    int [] left = mergeSort(Arrays.copyOfRange(arr,0,mid)); //mid as it takes 1 less than mid
    int [] right = mergeSort(Arrays.copyOfRange(arr,mid,arr.length));

    return merge(left, right);
}


//HELPER MERGE METHOD
private static int[] merge(int[] left, int[] right){

    int[] mergedArray = new int[left.lenght + right.length];
    int i =0;   //for left array 
    int j = 0;  //for right array
    int k = 0;  //for new created array with size left + right

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            //put i in new array
            mergedArray[k] = (left[i]);
            i++;
        }
        else{
            mergedArray[k] = (right[j]);
            j++;
        }
        k++;
    }

    //!it may be possibel that one of the array might get over so how to compare
    //!copy elements directly to the mergedArray
    while(i < left.length){
        arr[k] = left[i];
        i++;
        k++;
    }

    while(j<right.length){
        arr[k] = right[j];
        j++;
        k++;
    }

    reuturn mergedArray;
}


                //!at each level n elements are being merged
                //!Total how man6y levels
                    n, n/2, n/4, n/2^k 
                    n/2^k = 1
                    2^k = n 
                    klog2 = logn
                    k = logn base 2

                //!Complexity = n * logn  and space = O(n) at a time in stack n elements


                //!AKRABAZI FORMULA
                time = solve half + solve half + sort whole
                T(n) = T(n/2) + T(n/2) + (n-1)
                    = 2T(n/2)+(n-1)
                    = O(xlogx)



//!NOW WE DON'T WANTED TO USE THE EXTRA SPACE OF ARRAY MEANS INPLACE

     static void mergeSortInPlace(int arr[], int s, int e){
        if(e-s ==  1){
            return;
        }
    
        int mid = (s+e)/2;
    
        mergeSortInPlace(arr, s, mid);
        mergeSortInPlace(arr, mid, e));
    
        mergeInPlace(arr, s , mid, end); //not returning just modifying the original array
    }
    
    
    //HELPER MERGE METHOD
    private static void mergeInPlace(int[] arr, int s, int m, int e){
    
        int[] mergedArray = new int[e-s];
        int i = s;   
        int j = m;  
        int k = 0;  
    
        while(i < m && j < e){      //both separate array
            if(arr[i] < arr[j]){
                //put i in new array
                mergedArray[k] = (arr[i]);
                i++;
            }
            else{
                mergedArray[k] = (arr[j]);
                j++;
            }
            k++;
        }
    
        //!it may be possibel that one of the array might get over so how to compare
        //!copy elements directly to the mergedArray
        while(i < m){
            mergedArray[k] = arr[i];
            i++;
            k++;
        }
    
        while(j < e){
            mergedArray[k] = right[j];
            j++;
            k++;
        }
    
        //modifiy original array now
        for(int l = 0; l < mergedArray.length; l++){
            arr[s+l] = mergedArray[l];
        }
    }