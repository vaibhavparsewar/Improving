// {
//     {10,20,30,40},
//     {15,25,35,45},
//     (28,29,37,49),
//     {33,34,38,50}
// }

public class TwoDBSearchQuestion {
    
    //!MATRIX IS SORTED
            //!think about eliminating rows and col
            //!Row goes from top to bottom means 0 to row-1
            //!Column goes from right to left means col-1 to 0
            //!top to bottom n and right to left n therefore n+n = 2n = O(n)



        public static int[] search(int[][] matrix, int target){

            int row =0 ;
            int col = matrix.length-1;

            while(row < matrix.length && col > 0){
                //!Three checks
                if(matrix[row][col] == target){
                    return new int[] {row,col};
                }
                if(matrix[row][col] > target){ //we can skip column as down the col all will be greater
                    col--;
                }
                else{
                    row++;
                }
            }
            return new int[]{-1,-1};
        }






        //!WATCH VIDEO DIDN'T UNDERSTAND
        //!SEARCH IN A SORTED MATRIX O(logn)+O(logm)
        //!First element of particular row is greater than last element of previous row

        //!Take middle column and do binary search on it 
        //!if target element is > than mid then all the element will be in down side part
        //!Therefor if element == target return element
        //!if element > target ignore the rows after it
        //!if element < target ignore the rows above it

        //!if only two rows are remaining then check whether the middle column contains the answer
        //!if not then consider the 4 parts


        //!helper function to search in the row provided between the columns provided
        static int[] binarySearch(int[], int row, int cStart, int cEnd){    //in which row and which col to which col
            while(cStart <= cEnd){
                int mid = cStart+(cEnd-cStart)/2;

                if(matrix[row][mid] == target){
                    return new int[]{row,mid};
                }
                if(matrix[row][mid] < target){
                    cStart  = mid+1;
                }else{
                    cEnd = mid-1;
                }
            }
            return new  int[]{-1,-1};
        }

            //Search in the row provided
        static int[] search(int[][] matrix, int target){
            int row = matrix.length;
            int col = matrix[0].length;

            if(row == 1){   //!when only one element
                return binarySearch(matrix, 0, 0, col-1, target);
            }

            int rStart = 0;
            int rEnd = row-1;
            int cMid = col/2;

            //run the loop till two rows are remaining
            while(rStart < (rEnd-1)){ //while this is true there are more than two rows
                int mid = rStart +(rEnd-rstart)/2;

                if(martix[mid][cMid] == target){
                    return new int[] {mid,cMid};
                }
                if(matrix[mid][cMid] > target){
                    //ignore above rows
                    rStart = mid;
                }
                else{
                    rEnd = mid;
                }
            }

            //now we have two rows
            //check whether the target is in the col of 2 rows
            if(martix[rStart][cMid] == target){
                return new int[]{rStart,cMid};
            }
            if(matrix[rStart + 1][cMid] == target){
                return new int[]{rStar+1, cMid};
            }

            //search in 1st half
            if(target <= matrix[rStart][cMid-1]){
                return binarySearch(matrix, rStart,0, cMid-1, target);
            }
            //search in 2nd half
            if(target >= matrix[rStart][cMid+1] && target <= matrix[rStart][col-1]){
                return binarySearch(matrix, rStart, cMid+1, col-1, target);
                
            }
            //search in 3rd half
            if(target >= matrix[rStart+1][cMid-1]){
                return binarySearch(matrix, rStart+1, 0, cMid-1, target);
                
            }
            else{
               return binarySearch(matrix, rStart+1, cMid+1, col-1, target);

           }
            

        }



}       
