//!RECURSION ARRAY
//!Things that are passed in the () of the recursion function will be included while recursion call
//!And things that are created inside the recursion function will be used only
public enum recursion2 {

    

//!1. FIND IF ARRAY IS SORTED OR NOT
 static boolean isSorted(int[] arr, int index){ //we are not reducing the arrray just updating index as array will be modified as passed by value of the reference
    //base conditon
    if(index == arr.length-1){
        return true;            //means only one element remained
    }

    return arr[index] < arr[index+1] && isSorted(arr, index+1);
}


    

//!1. LINEAR SEARCH WITH RECURISON - here also index changes
static int linearSearch(int[] arr, int index, int target){
    //base conditon
    if(index == arr.length){
        return -1;
    }

    if(arr[index] == target){
        return index;
    }
    else{
        return linearSearch(arr,index+1,target);\
    }

}

//!1. LINEAR SEARCH from last to find the last index of the element
static int linearSearchLast(int[] arr, int index, int target){  //if index = arr.length-1
    //base conditon
    if(index == -1){
        return -1;
    }

    if(arr[index] == target){
        return index;
    }
    else{
        return linearSearch(arr,index-1,target);
    }

}

//!1. LINEAR SEARCH to find all index and return arraylist
static ArrayList<Integer> linearSearchAll(int[] arr, int index, int target, ArrayList<Integer> list){  //if index = arr.length-1
    //base conditon
    if(index == arr.length){        //over array
        return list;
    }

    if(arr[index] == target){
        list.add(index);
    }
    return linearSearchAll(arr,index+1,target, list);  //not in else as we mandatory have to run it
                                                        //returned as we wanted to function only has return type 

}




//!1. IMP LINEAR SEARCH to find all index and return arraylist but don't take arraylist in argument
static ArrayList<Integer> linearSearchAll(int[] arr, int index, int target){  //if index = arr.length-1
    //!creating arraylist new each time
    ArrayList<Integer> list = new ArrayList<Integer>();

    //base conditon
    if(index == arr.length){        //over array
        return list;
    }

        //This will contains the answer
    if(arr[index] == target){
        list.add(index);
    }

    ArrayList<Integer> ansFromBelowcalls = linearSearchAll(arr,target,index+1);

        list.addAll(ansFromBelowcalls);

        return list;
}


//!1. SEARCH IN ROTATED ARRAY using binary search
static int search(int[] arr, int target, int s , int e){
    if(s>e){
        return -1;
    }

    int m = s+(e-s)/2;

    if(arr[m] == target){
        return m;
    }

    if(arr[s] <= arr[m]){
        if(target >= arr[s] && target <= arr[m]){
            return search(arr, target , s , m-1);
        }
        else{
            return search( arr, target , s+1, e);
        }
    }
    if(target >= arr[m] && target <= arr[e]){
        return search(arr, target, m+1, e);
    }

    return search ( arr, target, s, m-1);


}
}







}
