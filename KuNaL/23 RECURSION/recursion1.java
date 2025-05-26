//!write function that takes no and prints first 5 no



public class recursion1 {
    public static void main(String[] args) {
        
        message(5);  //!CALLED ONLY ONCE BUT EACH IS CALING DIFFERENT FUNCTION
    }


public static void message(int n){
    if(n==1){
        System.out.println(1);
        return;
    }
    else{
        System.out.println(n);
        message(n-1);
    }
}









//mostly used in trees and graphs.
//Called functions are stored in stack memory and follows LIFO
//recursion is used in tree ds

//iterative is space efficient as not stack memory
//iterative is time efficient as no pop or push from stack memory
//iterative is hard to code and recursion is easy to code

//!VARIABLES IN RECURSION
    //! 1.Arguments 2.return type 3.Body of function

//!TYPES OF RECURRENCE RELATION
    // 1.LINEAR RECURRENCE RELATION - fibonacci
    // 2.DIVIDE and conquer recurrence relation - binary search


    //!Q.0 BINARY SEARCH WITH RECURSION
        //! F(N) = O(1) + F(N/2)     means comparison and divison is the recurrence relation or formula 
        //pass the start and end in the function only for recursion as these changes the size of array

        static int search(int[] arr, int target, int start, int end){

            if(start>end){
                return -1;
            }

            int mid = start+(end-start)/2;

            if(arr[mid] == target){
                return m;
            }
            if(target < arr[mid]){
                return search(arr,target,start,mid-1);
            }
            else{
                return search(arr,target,mid+1, end);
            }
        }













    //!Q.6 nto1
static void fun(int n){
    if(n==0){
        return;
    }
    System.out.print(n);
    fun(n-1);
}


//!Q.7 1ton
static void funRev(int n){
    if(n==0){
        return;
    }
    fun(n-1);
    System.out.print(n);
}

//!Q.7 Sum of no till n
static int sum(int n){
    if(n<=1){
        return 1;
    }
    return n + sum(n-1);
}







  //!Q.1 FACTORIAL  -if function return type is int then both the conditions should have return type as int
  public int factorial(int n){
    if(n<0){
        return -1;
    }
    if(n ==0 || n == 1){
        return n;
    }
    return n * factorial(n-1);
    
}

//!Q.2 FIBONACCI
//! So total calls = 2^(n-1)     n is value
//! So complexity = O(branches^depth)
public int fibonacci(int n){
    if(n < 2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);  //!formula is called recurrence relation and last function call is called TAIL RECURSSION
    //!until first fibo overs then only next fibo starts
    //!draw recursion tree till left tree gets executed completely right doesn't starts
}

//!Q.3 Sum of digit
public int summ(int n){

    if(n==0){           //stopping condition
        return 0;
    }
    return n%10 + summ(n/10);

}

//!Q.3 product of digit
public int prodd(int n){

    if(n%10 == n){           //stopping conditions  if it's 0 then hwole product will be 0
        return n;
    }
    return n%10 * prod(n/10);
}

//!Q.3 reverse a number
public int reverse(int n){

    if(n %10 ==n){           //stopping conditions  if it's 0 then hwole product will be 0
        return n;
    }
    return n%10 *10 + reverse(n/10);
    // OR
    // return n%10 * Math.pow(10,(int)(Math.log10(n))+1) + reverse(n/10);
}

//!Q.3 PALINDROME a number
public boolean palindrome(int n){

    return n == reverse(n);

}

//!Q.3 Count no.of zero's 0  - check the remainder and if 0 then count ++

public int count(int n){
    return helper(n,0);
}
public int helper(int n, int count){
    if(n<=0){
        return count;
    }
    else if(n%10 == 0){
        return helper(n/10,++count);
    }
    else{
        return helper(n/10,count);
    }
    
}

//!Q.3 LEETCODE 1342 if number is even , you have to divide it by 2 otherwise  subtract 1 from it and finally return no.of steps to reduce it to 0
public int count(int n){
    return helper(n,0);
}
public int helper(int n, int count){
    if(n<=0){
        return count;
    }
    else if(n%2 == 0){
        return helper(n/2,++count);
    }
    else{
        return helper(n-1,++count);
    }
    
}

//!Q.4 Power of number n^m
public int powerOfNumber(int n, int m){
    if(m < 0){            //exception case
        return -1;
    }
    if(m==0){           //stopping condition
        return 1;
    }
    return n * powerOfNumber(n, m-1);

}

//!Q.4 Greatest Common Divisor (highest common factor) (8,12) = 4
//use euclidean algo
//gcd(48,18) 
//1. divide 48/18 = 2 remainder = 12
//2. 18/12 = 1 remainder = 6
//3. 12/6 = 2 remainder = 0
public int GCD(int a, int b){
    if(a < 0 || b < 0){
        return -1;
    }
    if(b==0){           //stopping condition
        return a;
    }
    return GCD(b, a % b);

}

//!Q.4 Decimal to Binary
//divide by 2 and get quotient and all remainder and *10+rem
// n mod 2 + 10 * f(n/2)
public int DB(int n){
    if(n==0){           //stopping condition
        return 0;
    }
    return n%2 + 10 * DB(n/2);

}

//!Q.5 Max in Array a+M(n-a)
public int maxofarray(int [] arr, int n){ //----M(n) this is assumption
    if(n == 1){
        return arr[0];
    }
    return max(arr[n-1], maxofarray(arr, n-1)); //----M(n-1)
}

// m(n) = M(n-1) + O(1) + O(1)
// m(n) = 1 + m(n-1)
//1+(1+m(n-1)-1)
//2+m(n-2)
//2+1+m((n-2)-1)
//a+m(n-a)
//n




















































public static void main(String[] args) {
    int result;
    factorial(4);
    System.out.println(result);

    
}




}
