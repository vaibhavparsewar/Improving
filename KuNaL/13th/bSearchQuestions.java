
public class bSearchQuestions {


    //!CEILING OF NUMBER -no.greater or equal to target means return start
    public static int ceiling(int arr[], int target){
        if(arr[arr.length-1] < target){     //bro target is greater than last element
            return -1;
        }

        int start= 0;
        int end = arr.length-1;

        while(start <= end){

            int mid = start+(end-start)/2;

            if(arr[mid] > target){
                end = mid - 1;
            }
            else if (arr[mid] <= target){
                start = mid + 1;
            }
            else{
                return mid;
            }
        }
        return start;
    }

    //!FLOOR OF NUMBER -no.SMALLER or equal to target means return start
    public int floorr(int arr[], int target){
        if(target < arr[0]){     //bro target is lesser than first element
            return -1;
        }

        int start= 0;
        int end = arr.length-1;

        while(start <= end){

            int mid = start+(end-start)/2;

            if(arr[mid] > target){
                end = mid - 1;
            }
            else if (arr[mid] < target){
                start = mid + 1;
            }
            else{

                return mid;
            }
        }
        return end;
    }

    //!LEETCODE 744 - we don't want target we want greater than target
        //!if no character larger than target return arr[0] do this by returning start%lengthofarray
        
            public char nextGreatestLetter(char[] arr, char target) {
                
                if (arr[0] > target){
                    return arr[0];
                }
        
                int start= 0;
                int end = arr.length-1;
        
                while(start <= end){
        
                    int mid = start+(end-start)/2;
        
                    if(arr[mid] > target){
                        end = mid - 1;
                    }
                    else if (arr[mid] <= target){
                        start = mid + 1;
                    }
                    
                }
                return arr[start%arr.length];  //because if start goes beyond length as last elemnet is target then

            }


    //!LEETCODE 34 - WE WANT FIRST AND LAST POSITION OF ELEMENT IN ARRAY
            //!run binary search twice to find first occurance nad last occurance

            public int[] firstAndLast(int[] arr, int target){

                int[] ans = {-1,-1};

                int startValue = search(arr, target, true);
                int endValue = search(arr, target, false);

                ans[0] = startValue;
                ans[1] = endValue;

                return ans;

            }

            //!This helper function will just return the index value of target.
            public int search(int[] arr, int value, boolean findStartIndex){

                int ans = -1;

                int start = 0;
                int end = arr.length-1;

                while(start <= end){
                    int mid = start+(end-start) /2;

                    if(arr[mid] > value){
                        end = mid-1;
                    }
                    else if(arr[mid] < value){
                        start = mid+1;
                    }
                    else{       //mid == target
                        //!potential answer is found but there may be more on left and right
                        ans = mid;
                        if(findStartIndex){
                            end = mid-1;
                        }
                        else{
                            start = mid +1;
                        }
                    }
                }
                return ans;
            }


    //! SEARCH FOR THE ELEMENT IN INFINITE SORTED ARRAY
            //!check by chunks  and increasing size of chunk exponentionally like 2^k

            public int searchInfineArray(int[] arr, int target){
                
                //!start with box of size 2
                int start= 0;
                int end = 1;

                while(target > arr[end]){       //!until we find the range we not starting the binary search
                    int newstart = end+1;   //!taken new start as we are usin the original start to double the box size
                    //double the size
                    //end = previous end + size of box *2
                    end = start + (end-start) *2;
                    start = newstart;
                }

                while(start <= end){
                    
                    int mid = start + (end-start)/2;

                    if(target > arr[mid]){
                        start = mid +1;
                       
                    }
                    else if(target < arr[mid]) {
                        end = mid-1;
                    }

                    else{
                        return mid;
                    }
                }
            
            }





        //!LEETCODE 852,162 - PEAK INDEX IN MOUNTAIN ARRAY (1,2,3,4,5,4,3,2,1)
            //!watch video they done something differnt

            public int peakMountiain(int[] arr){
                int ans = 0;

                int start  =0;
                int end = arr.length-1;

                while(start < end){     //only less than mid

                    int mid = start + (end-start) / 2;

                    if(arr[mid] > arr[mid+1]){
                        //?This may be potential answer so store it and look at left
                        ans = mid;
                        end = mid;
                    }
                    else{
                        start = mid+1;
                    }
                }
                return ans;
            }
            //!else return start or end i.e. start will be equal to end at the end os return start or end 
            //!OR
            public int peakMountiainn(int[] arr){

                int start  =0;
                int end = arr.length-1;

                while(start < end){     //only less than mid

                    int mid = start + (end-start) / 2;

                    if(arr[mid] > arr[mid+1]){
                        end = mid;
                    }
                    else{
                        start = mid+1;
                    }
                }
                return start;  //? OR return end
            }


            //!LEETCODE 1095 FIND IN MOUNTAIN ARRAY
                //!1.Find peak element using above code.
                //!2.Binary search in first part
                //!3.If not found in first part Binary search in second part
                public int findInMountainArray(int target, MountainArray arr) {
                    int peak = findPeakIndex(arr);
                    
                    int firstTry = binarySearch(arr, target, 0, peak, true);
                    if (firstTry != -1) return firstTry;
                    
                    return binarySearch(arr, target, peak + 1, arr.length() - 1, false);
                }
            
                // Find peak of mountain
                private int findPeakIndex(MountainArray arr) {
                    int start = 0;
                    int end = arr.length() - 1;
            
                    while (start < end) {
                        int mid = start + (end - start) / 2;
                        if (arr.get(mid) > arr.get(mid + 1)) {
                            end = mid;
                        } else {
                            start = mid + 1;
                        }
                    }
                    return start;
                }
            
                // Binary search with direction flag
                private int binarySearch(MountainArray arr, int target, int start, int end, boolean ascending) {
                    while (start <= end) {
                        int mid = start + (end - start) / 2;
                        // int midVal = arr.get(mid);
            
                        if (arr.get(mid) == target) return mid;
            
                        if (ascending) {
                            if (target < arr.get(mid)) {
                                end = mid - 1;
                            } else {
                                start = mid + 1;
                            }
                        } else {
                            if (target > arr.get(mid)) {
                                end = mid - 1;
                            } else {
                                start = mid + 1;
                            }
                        }
                    }
            
                    return -1;
                }



        //!LEETCODE 33. SEARCH IN ROTATED SORTED ARRY(4,5,6,7,0,1,2,3)
                //!1.find pivot in array 
               //!CASE1. arr[mid] > arr[mid+1]    means pivot is mid
               //!CASE2. arr[mid] < arr[mid-1]      means also pivot
               //!CASE3=>   START>=MID  then start is also > fURTHER elements of mid so END = MId-1
               //!CASE4=>   START<MID                    #DO START=MID+1   
                //!2.Apply binary search in left and right of pivol

                public static void main(String[] args) {
                    int[] arr = {4,5,6,7,0,1,2,3};

                }

                public int findPivot(int[] arr){
                    int start=0;
                    int end = arr.length - 1;
                  
                    while (start < end){

                        int mid = start+(end-start)/2;
                         //!#######4CASES##########
                         if (arr[mid]>arr[mid+1] && mid<=end){
                             return mid;
                         }  
                         else if (arr[mid]<arr[mid-1]){
                             return mid-1;
                         }
                         else if(arr[start]>=arr[mid]){
                             end = mid-1;
                         }
                         else{
                             start=mid+1;
                         }
                    }
             
                    return -1;
                        }
            
            
                private int search(int[] arr, int target) {
                   int pivot = findPivot(arr);

                   if(pivot == -1){     //means we cannot find pivot just do binary search
                        return binarySearch(arr,target,0,arr.length-1);
                   }
                   //!pivot is found means search in left and right ascending arrays
                   //!case1. pivot == target
                   //!case2. target > start //search(start,pivot-1)
                   //!case3. target < start //search(pivot+1,end)
                   if(arr[pivot] ==target {
                    return pivot;
                   }
                   if(target >= arr[0]){

                       return binarySearch(arr,target,0,pivot-1)  //searching on left
                   }
                   
                       return binarySearch(arr,target,pivot+1,arr.length-1); //searchingo n right
                } 


                private int binarySearch(int[] arr, int target, int start, int end){
                    while (start <= end) {
                        int mid = start + (end - start) / 2;
            
                        if (arr[mid] == target) return mid;
        
                            if (target < arr[mid]) {
                                end = mid - 1;
                            } else {
                                start = mid + 1;
                            }
                    }
            
                    return -1;
                }
                        
            
             
                //!DUPLICATE ELEMENTS IN ROTATED ARRAY


                //!FIND THE ROTATION COUNT IN ROTATED ARRAY from last to first
                    //!find pivot and then 0 till pivot is rotation

                    public int findPivot(int[] arr){
                        int start=0;
                        int end = arr.length - 1;
                    
                        while (start < end){

                            int mid = start+(end-start)/2;
                            //!#######4CASES##########
                            if (arr[mid]>arr[mid+1] && mid<=end){
                                return mid;
                            }  
                            else if (arr[mid]<arr[mid-1]){
                                return mid-1;
                            }
                            else if(arr[start]>=arr[mid]){
                                end = mid-1;
                            }
                            else{
                                start=mid+1;
                            }
                        }
                
                        return -1;
                        }
            
            public static void main(String[] args) {
                int pivot = findPivot(arr);
                if(pivot!=-1){
                    return pivot +1;
                }
                else{
                    sout("array not rotated"
                }
            }



        //!LLETCODE 410- SPLIT ARRAY LARGEST SUM
        //!means by splitting array in 2 arrays and we need to find lowest maximum answer
            //!in every single case take the max array and finally return minimum
                //!maximum no. of partition we can make is n and max element is answer
                //!minimum no. of partition we can make is 1 and sum(all) is answer
                //!so the sum lies in sum(all) to largest_element
                //!mid = largest_element + sum(all) / 2
                //!mid can be the potential answer i.e, sum of array can be less or equal to mid
                //!if no.of pieces > they told means mid is wrong so start =mid+1 else end = mid
                //!if start == end means answer


                //m is no of sub arrays to be formed
                public int splitArray(int[] arr, int m){  

                    int start = 0;
                    int end = 0;

                    for(int i = 0; i< arr.length; i++){
                        start = Math.max(start, arr[i]);  //🔥🔥 in the end start will have the max element in the array
                        end += arr[i] ;        //🔥🔥 in the end end will have teh sum of all elements
                    }
                    //!we got start and end now binary search
                    while(start<end){

                        //This is the potential answer
                        int mid = start+(end-start)/2;

                        //calculate how many pieces you can divide this in with this mid sum
                        int sum = 0;
                        int pieces = 1;
                        for(int element: arr){
                            if(sum+element > mid){
                                //you cannot add this element in this subarray , make new one
                                //aY YOU add this element in new subarray, then sum = num
                                sum = element;
                                pieces++;   //as we have completed the 1st subarray and started with new
                            }
                            else{//keep adding in this subarray only
                                sum+=element;
                                }
                        }
                        if(pieces > m){
                            start = mid+1;
                        }
                        else{
                            end = mid;
                        }

                    }
                    return end;   //here start == end


                }
















}
