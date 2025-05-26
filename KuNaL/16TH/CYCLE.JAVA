//!CYCLE SORT
//!Sort only in n comparison
//!When the give no.s from range 1toN do CYCLIC SORT


//! 3,5,2,1,4 - here 3 should be on index 2 means -1 so swap
//!Total n-1 swaps bcoz if n-1 elements are swapped then last 1 will be also at correct position
//!O(n)


//!start looping from i only move i forward when i is at correct index

public class CYCLE{

    public int cyclicSort(int[] arr){

        int i =0;
        while(i < arr.length){
            int correctIndex = arr[i]-1;    //means if arr[i] = 3 then correct index should be 2
            if(arr[i] != arr[correctIndex]){
                //swap
                int temp = arr[i];
                arr[i] = arr[correctIndex];
                arr[correctIndex] = temp;
            }
            else{
                i++;    //only when arr[i] is at position arr[i]-1
            }   
        }
    }

//!TIP IF elements starting from 0 then arr[i] should be at i position
//!TIP IF elements starting from 1 then arr[i] should be at arr[i]-1 position


    //!LEETCODE 268. MISSING NUMBER
        //!sort it and then traverse first no that is not at correct position is answer
        //!CASE 1. WHEN INSIDE ANY ONE ELEMENT IS NOT THERE {2,1,4,0} -> {0,1,2,4} -> 
        //!CASE 2. WHEN N IS NOT THERE IN ARRAY {2,3,1,0} MEANS 4 NOT THERE
        //!IN CASE2 SORT IT AND CHECK IF ALL ARE AT CORRECT POSITION(ARR[I] = ARR[I]-1 THEN N IS ANSWER

        //!SKIP THE N MEANS arr.length so use arr[i] < arr.length

        public int missingNumner(int []arr){
            int i = 0;
            while(i < arr.length){
                int correct = arr[i];   //as if there are 5 elements then 0 to 4 and we have elements from 0 only so at index 0 value should be 0
                if(arr[i] < arr.length && arr[i] != arr[correct]){  //skip N element
                    swap(arr,i,correct);
                }
                else{
                    i++;
                }
            }

            //!after sorting 
            for(int index = 0; index< arr.length; index++){
                if(arr[index] != index){
                    return index;   //!ans
                }
            }
            //!CASE2
            return arr.length;
        }


    //!LEETCODE 448. FIND ALL MISSING NUMBERS and range is 1 to n
        //!range 1 to n means arr[i] should be at index arr[i]-1
        //!sort it and then traverse first no that is not at correct position is answer
       
        public List<Integer> missingAllNumner(int []arr){   //output elements can be more than one so list returning
            int i = 0;
            while(i < arr.length){
                int correct = arr[i]-1;   //as range from 1ton
                if(arr[i] != arr[correct]){  //skip N element
                    swap(arr,i,correct);
                }
                else{
                    i++;
                }
            }

            //!after sorting just find missing numbers
            List<Integer> ans = new ArrayList<>();
            for(int index = 0; index< arr.length; index++){
                if(arr[index] != index+1){
                    ans.add(index+1);   //!we are adding the exat value that should be at index means like on index 1 it should be 2 so at index index+1 should be value missing
                }
            }
           return ans;  //no case 2
        }


    //!LEETCODE 278. FIND THE DUPLICATE NUMBERS this is also 1 to n
        //!same like above just insted of returning correct value at that position return arr[position]
       
        public int Duplicates(int []arr){   //output elements can be more than one so list returning
            int i = 0;
            while(i < arr.length){
                int correct = arr[i]-1;   //as if there are 5 elements then 0 to 4 and we have elements from 0 only so at index 0 value should be 0
                if(arr[i] != arr[correct]){  //skip N element
                    swap(arr,i,correct);
                }
                else{
                    i++;
                }
            }

            //!after sorting just check the positions
            for(int index = 0; index< arr.length; index++){
                if(arr[index] != index+1){
                    return arr[index];   //!here we are directly returning that element
                }
            }
            return -1;
        }


    //!LEETCODE 442. FIND ALL THE DUPLICATE NUMBERS this is also 1 to n
        //!same like above just insted of returning correct value at that position return arr[position]
       
        public List<Integer> Duplicates(int []arr){   //output elements can be more than one so list returning
            int i = 0;
            while(i < arr.length){
                int correct = arr[i]-1;   //as if there are 5 elements then 0 to 4 and we have elements from 0 only so at index 0 value should be 0
                if(arr[i] != arr[correct]){  //skip N element
                    swap(arr,i,correct);
                }
                else{
                    i++;
                }
            }

            //!after sorting just check the positions
            List<Integer> ans = new ArrayList<>();
            for(int index = 0; index< arr.length; index++){
                if(arr[index] != index+1){
                    ans.add(arr[index]);   //!here we are directly returning that element
                }
            }
            return ans;
        }


    //!LEETCODE 645. SET MISMATCH
        public int[] setMistmatch(int []arr){   //output elements can be more than one so list returning
            int i = 0;
            while(i < arr.length){
                int correct = arr[i]-1;   //as if there are 5 elements then 0 to 4 and we have elements from 0 only so at index 0 value should be 0
                if(arr[i] < arr.length && arr[i] != arr[correct]){  //skip N element
                    int temp = arr[i];
                    arr[i] = arr[correct];
                    arr[correct] = temp;
                }
                else{
                    i++;
                }
            }

            //!after sorting just check the positions
            // List<Integer> ans = new ArrayList<>();
            for(int index = 0; index< arr.length; index++){
                if(arr[i] < arr.length && arr[index] != index+1){  //as no. is missing we should not do anything to nth element as size is n-1 array
                      //!here we are directly returning that element
                return new int[]{arr[index], index+1};
                    
                }
            }
            return new int [] {-1,-1};
        
        }


    //!LEETCODE 41. FIRST MISSING POSITIVE
        //!ignore negatives as positive no.'s are asked
        //!also ignore numbers greater than n means arr.length
        public int[] firstMissingPositive(int []arr){   //output elements can be more than one so list returning
            int i = 0;
            while(i < arr.length){
                int correct = arr[i]-1;   //1 to n
                if( arr[i] > 0 && arr[i] <= arr.length && arr[i] != arr[correct]){  //skip N element
                    int temp = arr[i];
                    arr[i] = arr[correct];
                    arr[correct] = temp;
                }
                else{
                    i++;
                }
            }

            //!after sorting just check the positions
            // List<Integer> ans = new ArrayList<>();
            for(int index = 0; index< arr.length; index++){
                if(arr[index] != index+1){
                      //!here we are directly returning that element
                return index+1;
                    
                }
            }
            return arr.length +1;
        
        }


}

