
//!RECURSION
//!main method is called -> message() -> message1() -> 
//!same function calling itself again and again until stopping condition and each time with differnt input 
//!when function finish executing it is removed from stack and flow of program restore to where the function was called
//!if no base condition then stack overflow




public class recursion {
    public static void main(String[] args) {
        
        message();  //!CALLED ONLY ONCE BUT EACH IS CALING DIFFERENT FUNCTION
    }

    public static void message(){
        System.out.println("hi");
        message1();
    }

    //1stfunciton
    public static void message1(){
        System.out.println("hi");
        message2();
    }

    //2stfunciton
    public static void message2(){
        System.out.println("hi");
        message3();
    }

    //3stfunciton
    public static void message3(){
        System.out.println("hi");
        message4();
    }

    //4stfunciton
    public static void message4(){
        System.out.println("hi");
        
    }


    
}
