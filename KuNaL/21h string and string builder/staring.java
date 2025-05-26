
import java.util.jar.Attributes;

//!Everything that starts with capital leeter is class.
//!a= "kunal";    b= "kunal"    so whether a & b points to same object or different objects
//! object "kunal" is stored in string pool in heap memory
//! So it will not create different object all variable points to same object
//!you cannot modify string object as security reasons

public class staring {
    
public static void main(String[] args) {
    
    String name = "vaibhav";     //String is datatype ,name is reference variable, vaibhav is object
    System.out.println(name);   //prints vaibhav
    name = "kunal";             //!creating new object. now a is pointing to new object and garbage collector deletes vaibhav object
    System.out.println(name);   //prints kunal



    //!COMPARISON(== , .equals())
    String a = "kunal";
    String b = "kunal";

    if(a==b);       //!compares value and linked to same object or not
    if(a.equals(b)); //!compares only value

    //!How to create different object of same value.
    String c = new String("kunal");
    String d = new String("kunal");
    //!both points to different object so a==b gives false
    



    String e = "fukc";
    String f = e;       //!This will points to same object
    if(e==f);            //!gives true as same value and same object



    String g= "kunal";
    sout(g.charAT(0));


    //!OUTPUT
    //!printStream is a class, out is variable of type printstream and has method println
    System.out.println(); 
    //!if passed object is null then null else obj.toString()
    sout("kunal")   //object type is String
    sout(56)    //object.toString(56)  converts to string then prints
    sout(Arrays.toString(arr))  //use this toString method not functions method


    //!PREETY PRINTING IN JAVA
    float a  = 3223.3241f;
    sout("%.2f",a);  //two decimal places 
    sout("%s and %s", "vaibhav", "kunal")   //first s with vaibhav and second with kunal


    //!PLACEHOLDERS
    %c - character, 
    %d - decimal,
    %e - exoponential floating-points
    %f - float 
    %i - integer 
    %s - string 
    %t - time date

    //!+ OPEATOR
    sout('a' + 'b') //195 
    sout('a'+3) //100
    sout("a"+1) //a1    as int converted to Integer will call toString()
    sout("a"+new ArrayList<>()) //a[]
    sout(new Integer(56) + new ArrayList<>())   //ERROR as there should be one string
    sout(new Integer(56) + " "+ new ArrayList<>())  //56 []  as + works on primitive datatype only



    //!PRINTING THE CHARACTERS 
    for(int i = 0; i < 26; i++){
        sout((char)('a'+i));    //character converted to 97
    }


    //!
    String alphabets= "";
    for(int i = 0; i<26; i++){
        alphabets +=(char)('a'+i);          //as we studied each time when the alphabets is changed new object is created 

    }

    
    //!So to prevent from new object createation each time 
    //!STRING BUILDER
    StringBuilder builder = new StringBuilder();
    for(int i = 0; i< 26; i++){
        builder.append((char)('a'+i));
    }
    sout(builder.toString());





    //!STRING METHODS
    name.toCharArray();     //while printing use Arrays.toString(name.toCharArray());
    name.toLowerCase();     //original one does not change we can print it but cannot modify as string
    name.charAt(0);
    name.indexOf('a');
    name.lastIndexOf('a');
    name.strip() //extra spaces removed
    name.split(" ");        //splits at " " sout(Arrays.toString(name.split(" "))) 









}








}
