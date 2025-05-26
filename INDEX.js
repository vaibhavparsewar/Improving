🧡CONNECT JAVASCRIPT 
💘
INLINE js - <button onclick =" alert('wrong')">Click me</button>
INTERNAL js - under head tag use <script>
                                    alert("wrong")
                                    console.log("hi");
                                 </script>

EXTERNAL js - file of script.js and linking inside body 
                <body>
                    <script src ="./script.js"></script>
                </body>
               




⭐VARIABLES
var,let are same but let is blocked-scoped ecmascript 6 we don't use var
let age = 20;           
let age=20, dob=432, task='ghana'
console.log(age);

⭐DATATYPE (Number, STRING, BOOLEAN)
//*1.primitive are immutable 
        1. numbers
        2. string 
        3. boolean 
        4. undefined 
        5. null         //? type is object
        
//*2.non primitive 
        1. Arrays 
            let fruits = ['apple','banana', true, 232, 23.003]
            console.log(fruits);

//*3. OBJECT 
        1. let person = {
            firstname : 'vaibhav',
            age:32,
        };
        //?to run this go to inspect > console > type there person and enter

console.log(typeof age)

⭐VAR LET CONST 
-Don't use var as it can be accessed anywhere
-let is blok-scoped 
-const cannot be reassigned         like let a=30 then we can say a=23


⭐METHODS (toFixed,isNaN, parseFloat,parseInt)
let amount = 23.556
let result = amount.toFixed(2);     //?23.56
console.log(result.isNaN());

let age = "43";
let convertToNumber = paresFloat(age);      //?converted to number

⭐ARITHMATIC OPERATOR (+,-,**,++,--)
⭐COMPARISON OPERATOR (==(only value), ===(type and vlaue),!==(type and vlaue))
⭐STRING 
        let str = 'hello';
        let str = "hello";
        let str = `hello`;
        str[0];
        str.length;
        str.toLowerCase;
        str.indexOf('double');
        str.slice(1,5);
        str.replace('vai','welcome');
        str.concat(lastname);
        str1+" "+str2;
    
    let greeting = `Hello, ${name}`




🧡-----------------------FUNCTION   (we pass arguments while calling and funciton(parameters))
function add(num2,num1){
    return num1+num2
}

console.log(adder(1,2))                 //calling


const adder = function (num2,num1){
    return num1+num2
}

const multiply = (a,b)=> {a*b}       //no curly braces and no need to write return
multiply(3,5)

ANONYMOUS FUNCTION (no name)
(function(a,b){
    console.log(a+b)
})(1,2);           //?callled here it self


//*⭐DEFAULT PARAMETER FUNCTION
const mul = fun(a=2,b=1) {//?if we dont pass the value while calling it will take this
    const result = a*b;
    return result;
}       
mul(20)     //?prints 20*1 = 20





//*⭐CHALLENGE TO TAKE INPUT AND CONVERT TO UPPER CASE OR LOWER CASE
//! count the character
function characterCount(text){
    let length = text.length;
    return length;
}
//! count the character
function characterCount(text){
    let length = text.length;    //?text.toLowerCase, text.toUpperCase, text.slice(start,end)
    return length;
}

















⭐TO DISABLE BUTTON⭐
<button id="" disabled>click</button>


for(const child of element.children)
if("mango" in fruits)


🧡object literal
book.author
OR
book['author name']    //use it when there is space in name bcoz you cannot use book.author name

book['price'] = 34




alert("you cannnot do this")
let iccha = alert("are you sure?")


setTimeout(()=>{                                    //after 3+ seconds it logs it
    console.log("hi")
},3000)  

🧡function add(){
    return 1+2
}
const vaa = add
vaa()                            ##it will print 3


🧡const vai = "vaibhav"
vai.replace("a","b")            #not a good practice bcoz original gets Changed
const ren = vai.replace("a","b")            #insted do this


🧡//PRIMITIVE(String,boolean,Number,undefined) AND OBJECT
const var = new String("vaibhav")     //THIS IS OBJECT
const var = "vaibhav"                  //THIS IS STRING

🧡//Date object
const date = new Date();
date.now()
date.getDate()
date.getMonth()                           //starts from jan==0
date.getFullYear()
date.toDateString()

🧡//RegExp
const vai = new RegExp("")
//or
const regx = /[a-z]+/       //checks small case first word as +
vai.test(given email or something that we need to check)
//for eg
const contains_g = new RegExp("g")
const var1 = "hi this is good"
const var2 = "hi this is soodf"
contains_g.test(var1)                         //gives true as contains g
contains_g.test(var2)                           //give false
//or you can do is 
/[g]/.test(var1)                  //this too works
//ADVANCED
/[a-zA-Z0-9]/.test()
/./ ===equivalent to /[a-zA-Z]/
/\d/ ===equivalent to /[0-9]/
/^/                              //represents begining of the string
/^f/.test(var1)              //it checks whether var1 starts with f or not
/f/.test(var1)              //now it checks whether var1 contains f or not
/f$/.test(var1)              //now it checks whether var1 ends with f or not
/(vaibhav|sanket)/.test(var1)    //now it checks whether var1 have vaibhav or sanket

//exec
/[a-z]/.exec(var1)     // gives h
/[a-z]+/.exec(var1)     // gives "hi" first word it is as no space so no more words
/[a-z ]+/.exec(var1)    //give whole string 
/[a-z ]+/.exec(var)  is equivalent to /.+/.exec(var)

//suppose we have paragraph stored in var and we need to find someone's email then do this
/[a-z ]+@gmail.com/.exec(var)
/.@gmial.com/.exec(var)

//Advanced
password.match(regularexpression)         //regularexpression= /^[0-9]{4}$/    which is exactly 4numbers only
// or we can use    /^\d{4}|\d{6}$/.test(password)


// 🧡string methods
//replaceAll(CASE SENSITIVE), toUpperCase, substring(startindex,endindex), .trim()                            
const var1 = "my dog is dirty and he is bad Dog"
//we need to replace all dog with cat but we have capital and small Dog
const var3 = var1.replaceAll(/[dD]{1}og/g/ , "cat")   
//here we told that in [] small d and D from both any can come for only one time so we gave{1} occurance and followed by og and /g means to do this on all so global /g is used

const var1 = "vaibhav"
const var2 = var1[0].toUpperCase()+var1.substring(1,var1.length)


//🧡 String Method
lastIndexOf()
replace('a','b')
includes()
typeof arr              //gives object
concat()
.length

Number("45")          
+num2                       //converts string to number
parseInt("45px")            //converts only 45 not px
parseFloat("45.45px")
.toFixed(2)                 //2 means two decimal places la round off karte  
.toExponential()
.isNaN()                //not a number

String(45)
num1.toString()


//🧡 Binary to Decimal
const data = '1011'
console.log(parseInt(data,2))    //2 is base parse int means converting to integer


//🧡 Math
Math.floor()
Math.ceil()
Math.PI()
Math.abs(-60)               //gives absolute value of -60 that is 60
Math.round()
Math.min()
Math.max()
Math.random()


//🧡 Error 
ReferenceError      //undeclared variable printing gives this error
SyntaxError         //
TypeError           //applying toUpperCase on number

//🧡 Error Handling
try{
    const var = 36
    var.toUpperCase()
    console.log(error instanceof TypeError)   // we are saying error can be example of TypeError
    console.log(error.message())
}
catch{
}

////🧡 
//1) Nan(not-a-number)
let var1 = "vaibhav is good"
let var2 = Number(var1)                //give NaN

// 2) undefined
let var2 = undefined                  //not initiated


//🧡
in array if you want to remove an element do 
item !==arrItem;

//🧡 foreach(item,index,originalarray)

//🧡 SORT01258////////////
arr.sort((first_no,second_no) => second-first).reverse().join("")

//🧡 
window.alert("alerted")
window.confirm("are you sure?")
window.location()
localStorage.setItem("roll",30)
window.onscroll = function(){
    console.log("bye")
}


💥STRING = immutable

💛PASSED BY Reference
person = {}
person1 = person    //person1 points to person only
// now if you change person1 it will change person object literals also as reference

💛Object.assign
students.map((student,index)={
    return Object.assign({},student,update[index])      //update = [{grade:'a'},{grade:'b'}]
})

💛.find                     //returns the object
patients.find((patient)=>{
    patient.disease==cold;
})

💛.some()    and .every()                  //returns true or false if object literal is available then  .every() can be used to find whether all students are status is passed or not
patients.some((patient)=>{
    patient.disease==cold;
})








//123
💛DOM (interface betwn web document and script used for dynamically styling)
ATTRIBUTE node (means class, id, src) , 
ELEMENT node (means html elements like div,p), 
COMMENT node (represents comments inside the document)
DOCUMENT node (represents root node or entire html document)
TEXT node (represent value inside the tags)


//*WINDOW MADHE  DOCUMENT AST ANI DOCUMENT MHNJE HTML document
console.log(window)     //?window is browser and window object has function called object which can be seen in console
console.log(window.object) //?shows the html code as object is html file

//* window.innerHeight, window.innerWidth, window.navigator, window.screen(shows screen width and height), window.location, window.Location.host, window.history, window.alert(), window.confirm(), window.open('https://youtube.com')
insted of above we can directly use console.log(innerHeight) as window is browser

💛getElementById
const con= document.getElementById('head') //?document he window-object ch method aahe.  our whole html code is window.document  // This code gives the first matching element
//!if element not found with id then returns null in console

💛getElementByClassName
const nonFictional = document.getElementsByClassName('classname')  //?used to select multiple elements with same class name and it will treat each like array so we can access like
console.log(nonFictional[1]);

💛//*QUERYSELECTOR (gives first matching element, also used to get the attribute from the html)
querySelector('.home')             //?returns only first match id, case sensitive
querySelector("[datarating='3.5']")       //?to get the attribute wihth value 3.5
querySelector("#id")        //?returns only first match id, case sensitive
querySelector('div p')      //?returns first p in div

document.getElementsByTabName('p')[2]       //?to get 3rd paragraph

document.querySelector("#main.active")      //?we need to select the main class which is active

💛//*QUERYSELECTORALL (gives all matching elements like an array called as node-list)
document.querySelectorAll('.product-card')  //?it will select all matches elements and that are named nodelist we can convert it to array using array.from()and then use map() or you can use forEach method  

const prodName = document.querySelectorAll('.product-name');    //?prodName is a nodelist now
const prodNameArray = Array.from(prodName)  //?converted to array to use funcitons
prodNameArray.forEach((el)=>{console.log(el.innerHTML)});        

//*Downside the data-category is the attributes and product-pricing is class.
document.querySelectorAll("[data-category = 'laptop']").querySelector('.product-pricing')
OR
const category = document.querySelectorAll("[data-category= 'laptop']")
category.forEach((el)=>{console.log(el.textContent)});

const category = document.querySelectorAll("[data-category = 'laptop'] [data-rating = '4.3']");
category.forEach((el)=>{console.log(el.innerHTMl)})

//!DOM MANIPULATION === SELECTING ELEMENTS AND PERFORMING OPERATIONS 


💛childNodes - means everything under parent, returns node list convert this to array
💛children means only elements. not comments and not text 

const parentl = document.querySelector('#parent')       //?getElementById("parent")
console.log(parentel.childNodes)    //?gives everything inside parent
parentel.childNodes.forEach((node)=>console.log(node.nodeType))
console.log(parentel.children)      //?give only elements of parent 

💛accessing parent and child elements 

const parent = document.querySelector('#parent')
console.log(parent.parentNode)          //?but we want to acces dadaji parentNode is function
console.log(parent.firstChild)          //?firstChild,lastchild is function returns node
console.log(parent.firstElementChild)   //?here you will get actual element i.e <p> or <h1>


💛getEmelementByName        //?used for form element as we give name attribute in the form elements input//Gives multiple matches

//? <body><input type="text" name="languageProficiency"></body> 
const langproEl = document.getElementByName("languageProficiency")
console.log(langproEl)


//!Suppose we have a html button after clicking function should be called which will tell which radio button is checked 
<button onClick ="collectData()">Submit</button>

function collectData(){
    const langproEl = document.getElementByName("languageProficiency")
    for(let i =0; i < langproEl.length; i++){
        if(langproEl[i].checked){       //?means we have selected this radio button
            console.log(`selected language is &{langproEl[i].value}`)
        }
    }

}




💛getAttribute, setAttribute
//?data-role is already a attribute in element teacher is new setting attribute
const user = document.getElementById("user-card");      //?grabbed the element now set the attribute 
user.setAttribute('data-role','teacher')  
//?you will directly get the value of that attribute
user.getAttribute('data-role')         
//OR WE CAN DIRECTLY DO
user.dataset.role



//*💛IF CONDITIONS 
let age= 10;
if(age>20){
    console.log("you can drive");
}
//!if above if matched else if doesnot works
else if (age <10){                  
    console.log("drive small cars");
}
else{
    console.log(gmara);
}

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";   //?making it blank
if(agevalue > =19){
    resultDiv.innerHTML += "you are ready <br/>";  //?adding to inner html and break line after it
}
if(agevalue >=0){
    resultDiv.innerHTML += " hi <br/>"
}



💛//* SWITCH STATEMENT
let day;
switch(day){
    case 1:
        console.log("monday")
        break;
    default:
        console.log("invalid day")

}


💛//* LOOPS
for(let i = 0; i < 4; i++){
    console.log(i);
}

let count = 1;
while(count<10){
    console.log(i);
    count++;
}

//*💛TO GET RANDOM NUMBER IN RANGE 1 TO 10
let number = Math.floor(Math.random() * (10-1)+1);  //?floor to get whole number


//*💛 OBJECTS IN JS - allows key-value pair to organize data
//*3. OBJECT 
let person = {
    firstname : 'vaibhav',
    age:32,
};

//!Adding properties to object
//?DOT NOTATION
person.ismarried = false;
person.country = "usa";
//?Bracket NOTATION
person["hobby"] = "coding"
person["vegetables"] = ["tomato","onion","spinach"]     //?adding array to the object


//!OBJECT METHODS
//?Object.keys - gives array of all the properties of the object person
    const keys = Object.keys(person);
    console.log(keys);
//?Object.values - gives array of all the value of properties of the object person
    const value = Object.values(person);
    console.log(keys);
//?Object.assign() - to merge two object
    const result = Object.assign(person,people));
    console.log(result)      
//?hasOwnProperty
    const hasproperty = person.hasOwnProperty("age");
    console.log(hasproperty)        //?returns true
//?Delete - To delete the property
    delete person.age;
    console.log(person)    
//?Object.Freeze -- won't allow to modify the properties of object
    Object.freeze(person)     
//Ob

//*💛!NESTING OBJECT
const user = {
    name:"vaibhav",
    age:30,
    address:{
        street:"aewr",
        country:{
            name:"us",
            code:"wer",
        }
    }
}

//?ACCESS
const username= user.name;
const street = user.address.street
OR
const username = user["name"];
const street = user["address"]["street"];



//*💛!OBJECT IN ARRAYS
const user = [
    {name:"v", age:20, city:"sds"},
    {name:"s", age:23, city:"sdas"},
    {name:"a", age:22, city:"sdsfs"}
]
console.log(user)

//?ACCESSING
const first = user[0];
//?pusH
user.push({name:"t",age:43,city:"accara"});
//?update 
user[0].name = "e";
//?Printing using forEach
user.forEach((x)=>{
    console.log(x.age)
})






//*💛 DATA STRUCTURE

//!🧡 Array--------------------
let fruit = ["a","b","c"];
fruit[0]                    //?to access
const arr = new Array(5)

//?Type casting
const arr2 = Array.from(arr1)   //even though arr1 is not array it will be converted to array

//!🧡 Array Method
Push(4,5,6)                         //add element at end
pop                                 //removing last element
shift                               //removing first element
unshift                             //adding element at fromt 
const BothColor = colors1.concat(colors2)
const newArr = arr.slice(first_index,last_index)       //same like substring,python
.length
splice(index,from index till where, string or number to be replaced with)
splice(3,1,"hi")
splice(indexto remove, 1)       //splice returns the element that is been removed 1 means only that 

splice(index-at-which-new element to be placed, 0 , new element)     //0 means no.of elements to remove but we are not removing
.join("")
indexOf("mango")
findIndex((x) => { 
    return x.lastname == parsewar})                        //used to search in object literal we give function in brackets
    
includes("orange")

//!forEach ---------------Applies function to each element doesnot return array
arr1.forEach((x) =>{
    const double = x*2;
    console.log(doubled);
})              //x=item,y=index   or .foreach(fun(x)=>{sum+x})

//!map()   ---------Applies function to each element and return array
const arr2 = arr1.map(function (x)=>{
    return x+3
})


//!FILTER()
.filter((x)=>{
    return x%2 ===0;        //creates array of even no.
})

//!REDUCE()
const sum = arr.reduce((x,sum)=>{           //we pass two arguments
    return sum+x                 //0 indicates start array from index 0
},0)

//!in array of objects 
return sum + (x.price*x.stock);

//!find()   ---same like filter but this will break after first match condition
const newarr = arr.find((x)=>{
    return x>3;
})







//*💛creating HTML(<p class="some-class">hi vaibhav</p>) element in javascript 
1.SELECT TARGET ELEMENT 
2. CREATE NEW HTML ELEMENT(DOCUMENT.CREATEeLEMENT())
3.ADD CONTENT TO NEW ELEMENT using(INNERhtml/TEXTCONTENT)
4.ADD CLASSES OR IDS 
5.APPEND THE ELEMENT

1.
const Actual = document.getElementById("profile");

2.
function createProfileCard(){
    const profileCard = document.createElement("div");
    profileCard.class = "profile-card" 
    const profileImage = document.createElement("img");
    profileImage.src=  "url";
    const profileName= document.createElement("h3");
    profileName.textContent = "Honh doe";
    const profileDiscription = document.createElement("p");
    profileDiscription.textContent ="hi this is profile card"
}

3.
profileCard.appendChild(profileImage);
profileCard.appendChild(profileName);
profileCard.appendChild(profileDescription);
//!finally append in original div
Actual.appendChild(profileCard);

4.
btn.addEventListener('Click',createProfileCard());



//?
<label for="name">Name</label>
<input type="text" id="name" />
here label madhe j for ="name" ahe tech input madhe id="name"
imp as you click on label it will start cursor on input


//?&copy;  is the html entity





💛 ES6 (ECMA SCRIPT) - NEW Synta, FEATURES, METHODS like promises,async await-------------

//*⭐ARROW FUNCTIONS USING FAT ARROW
const add = (num1,num2) =>{         //? to call const res = add(1,2)
    return num1+num2;
}

//?if the function is returning the expression we can ignore the {} and return if there is only one argument then you can ignore ()
const greet = (name) =>{
    return `hello ${name}`;
}
OR
const greet = (name) => `hello ${name}`;
OR 
const res = (x) => x*x;

const getUser = () =>{
    return{
        name:"va",
        age:30,
    }
}
OR
const getUser = () => ({name:"va",age:30})



//*⭐ LET AND CONST 
-Don't use var as it can be accessed anywhere and it does hoisting means without declaring we can use it
            //?HOISTING 
            function(){
                console.log(a)      //?output is undefined means variblae is there but not have value so wrong
                var a = 10;
                console.log(a)      //?this is fine
            }
            //?ACCESS
            for(var i =0; i < 3; i++){
                console.log(i);
            }
            console.log(i)      //?outside the loop we can access the var variable

-let is blok-scoped 
-const cannot be reassigned         like let a=30 then we can say a=23


💛DESTRUCTURING------------------------------------------------------------------------------------
const [first,second,third] = [1,2,3]                //?array

const {name,age} = {name:"vaibhav", age:30};            //?Object  
console.log(user.name)

💛SWAPPING without 3rd variable
let a= 10
let b = 2
[a,b] = [b,a]

💛NESTED 
const {name, address:{city,pin}} = {
    name:"v";
    address:{
        city:"kailasa",
        pin:324,
    }
}

console.log(city)






💛DOM traNversing (going top down in html document)--------------------------------------
💛childNodes - returns everything under parent(text,element,comments ) in node list convert this to array Array.from()
💛children means only elements. not comments and not text 

<li data-item = "fruit">Apple</li>
const el = document.querySelector("[data-item = 'fruit']") //?selected the element using attribute
document.querySelectorAll("button") //?directly acced by element

-el.parentNode 
-el.childNodes[0]  //?to get first child


//?Always check node type it can return text and if no next child may return null
el.nextSibling;   //?can return text node so for text   .nodeType will be 3
el.previousSibling;   //?can give text node gives previous bhau
el.previousElementSibling;   //?to get element ignores text,comment node gives previous bhau
el.nextElementSibling; //?gives element


💛METHODS ON ELEMENT//?------------------------------------------------------
paragraph.innerHtml ='<h3>heading</h3>'  //?access inner html content
paragraph.innerHtml +='<br>more content will be conntinuoously added</br>'  //?appended
.innerText                              //?access text inside the element
.textContent = "vaibhav is good boy"    //?access plain text in element and it's children

el.style.background = "red";
//?texcontent is faster as it ignores html tags
//?innerHTML is HTML tags
//?innertext used for text only



💛getAttribute(), setAttribute()
//?data-role is already a attribute in element teacher is new setting attribute
const user = document.getElementById("user-card");      //?grabbed the element now set the attribute if attribute already there then assigns value else create new attribute
user.setAttribute('data-role','teacher')  

const el= document.getElementById("product").querySelector("img") //?we need to select img
el.setAttribute('src',"new url here");      //?will override the src


//?you will directly get the value of that attribute
user.getAttribute('data-role')         




💛CeateElement() //? creates empty element , appendChild()
appendChild()                       //appends at last

//?function to create new todo task
function createTask(taskkayaahe){
    const taskel = document.createElement("div")
    taskel.setAttribute("class","task");    //?setting attribute class =task
    OR
    taskel.classList.add("task")
    OR
    taskel.className = "task";

    const taskTextel = document.createTextNode(task kay aahe)

    taskel.appendChild(taskTextel);

    const containerEl  = document.getElementById("container")
    containerEl.appendChild(taskel);

    //?OUTPUT
    <div class = "container">
        <div class="task">"programming"</div>
    </div>

    console.log(taskel);
}
createTask("kapde dhu");




💛insertBefore()
function addStudent(name, grade){
    
    const studentEl = doucment.createElement("div");
    stsudentEl.className = "student";

    const studentTextNode = document.createTextNode(`${name}:${grade}`);

    studentEl.appendChild(studentTextNode);

    //?
    const studentContainer = document.getElementById("student-List")//?main container
    let beforeNode = null;

    //
    for(const child of studentContainer.children){//?child is individual element
        const childGrade = parseInt(child.textContent.split(":")[1])//?Taking grades
        if(childGrade > grade){ //?in ascending order
            beforeNode = child;
            break;
        }
    }
    //?insert
    studentContainer.insertBefore(studentEl,beforeNode);  //⭐⭐

}




💛replaceChild()        //?imp it should be direct child of parent
function replaceArticle(articleId, newContent){     //?old and new

    const existingArticle = document.getElementById(articleId);//?to get parentNode

    const newArticle = Document.createElement("div");
    newArticle.className = "article";
    newArticle.id = "articleId";    //?we are keeping same id that we are replacing
    const newtextNode = document.createTextNode(newContent);
    newArticle.appendChild(newtextNode);

    //?Actual replacement using parent
    existingArticle.parentNode.replaceChild(newArticle, existingArticle); //?⭐⭐
}

replaceArticle("articleid1","hey devuda")




💛removeChild()
function addFruit(name){
    const ulEl= document.getElementById("fruitList")    //?fruitlist is the ul tag

    const li = document.createElement("li");
    li.className= "fruit";
    li.textContent = "Apple";

    ulEl.appendChild(li);
}

function removeFruit(name){
    //?select the parent ulEl
    const ulEl = document.getElementById("fruitList");

    for(const li of ulEl.children){
        if(li.textContent == name){
            ulEl.removeChild(li);
            break;
        }
    }
}




💛classList //?suppose kahi classes la styles aahe css madhe pn t classes apan create kela nahi so classlist can be used to create the class attribute

<p id ="textElement">Modify using buttons</p>
<button onclick = "addClass()">Add Class</button>;

const pelelment = document.getElementById("textElement");


pelement.classList.add('bold')  //<p id = "textElement" class="bold"></p>

pelement.classList.add("bold","italic")//?<p id="textElement" class="bold italic"  to add multiple values to the class=""
pelement.classList.remove("bold","italic") //?<p id ="textElement"></p> 
pelement.classList.toggle("italic") //?continuously add and remove the class value as italic  
pelement.classList.contains("italic")       //returns true if class has value italic
pelement.classList.replace("bold", "italic") //?replace bold with italic 
pelement.classList.item(0);     //?gives value in class=""



💛EVENTS (for browser interractions)   
//*ondbclick, dbclick, onmouseover, mouseout, mouseenter, mouseleave, onkeydown, onkeyup, onkeypress, onsubmit, onfocus, onblur, resize, onscroll             //<input onfocus="">
//!INLINE--------------------------
<button onclick ="clickHandler()"></button> //?can apply on body also
<div onmouseover="fun1()" onmouseout="fun2()">hi guys</div>
<input onkeydown="fun1()" onkeyup ="fun2()"/>

<form onsubmit ="submit()"></form> //?web page refreshes so go in inspect > settings > click check box for preserve log upon navigation

<input onfocus="fun1()"/>   //?like mouse over from the input field
<input onblur="fun1()"/>    //?like mouse out from the input field


//!TRADITIONAL----------------------
💛
const element  = document.getElementById("clickButton");
element.onclick = function fkfe(){
    console.log("yd");
}


💛 addEventListener()  //?advanced features  use click,dbclick,mouseover,mouseleave,keydown,keyup
element.addEventListener("click",function(){}, (e))  //?anonymous function
element.addEventListener("click",()=>{}, (e))  //?or use arrow function like ()=>{}
element.addEventListener("click",function1)  //?or writing function separately
element.addEventListener("click",add, (e))    



💛 removeEventListener() //?cannot remove anonymous function, 3rd channel vr 3 azun ekda dabla tr kahi fire hou nai FAKTA FUNCTION MADHE LAv 
function removeAlert(){
    element.removeEventListener('click',showAlert); //?the function should be same showAlert
}
const button = document.getElementById("removeButton")
button.addEventListener("click",removeAlert)


💛💛EVENT FLOW--------------------------------------------------------------
//?if event is applied on child it can affect parent and it's children
Phases--
1.capturing - when clicked on inner div, outer div event is executed first then middle dive then inner.
document.getEmelementById("outerDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},true)     //?true means capturing phase false means bubbling phase.

document.getEmelementById("midDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},true)     //?true means capturing phase false means bubbling phase.

document.getEmelementById("innerDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},true)     //?true means capturing phase false means bubbling phase.

2.target - at target.

3.bubbling - from this div event to parent div event will be called
document.getEmelementById("outerDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},false)     //?true means capturing phase false means bubbling phase(from this event to parent will called).

document.getEmelementById("midDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},false)     //?true means capturing phase false means bubbling phase.

document.getEmelementById("innerDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},false)     //?true means capturing phase false means bubbling phase.





💛Event propogation()- stops moving event for other element child or parent
document.getEmelementById("outerDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},false)     //?true means capturing phase false means bubbling phase.

document.getEmelementById("midDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
    event.stopPropagation(); //?This div event will executed then stopped here itself 
},false)     //?true means capturing phase false means bubbling phase.

document.getEmelementById("innerDiv").addEventListener("click",function (event){
    alert("outer div"+event.eventPhase)
},false)     //?true means capturing phase false means bubbling phase.




💛event deligation = (e.target) use only one addEventListener when you want to add to multiple childs
//?we are applying event to ul and li will get the event automatically 
document.getElementById("ulitemList").addEventListener("click",function(event){
    const clickedon = event.target;     //e.target will return whole element(i.e li) you clicked

    if(clickedon.tagName == 'LI');{
        const itemnumbre = clickedon.getAttribute("data-item")          //returns value of attribute data-item
        console.log(`you clicked ${itembumber}`)
    }
})


💛USING MULTIPLE EVENT LISTNER 
<button class ="actionbutton"></button>
const El = document.getElementByClassName("actionbutton");
El.addEventListener('click',function(){
    console.log("hi")
})
El.addEventListener('dbclick',function(){
    console.log("hii")
})
El.addEventListener('mouseenter',function(){
    console.log("kdf")
})



💛197 Creating Custom Event like click,buttonup
const zhoop = new CustomEvent("zhoop",{
    bubbles:true,
    cancelable:true,
    detail: {text:""},
})
//now
document.addEventListener("zhoop",function (event){ console.log(event.detail.text)})




💛💛 ASYNCHRONOUS PROGRAMMING
// video chalu houstr scroll karto kahi imp bhet te ka  mhanje tasks independent work hotay ani 
//used in API calls and DOM manipulation
//does not blocks current execution
//non blocking code


💛
setTimeout(()=>{})   //function will executed after some delay
setInterval(()=>{})  //after particular delay function will executed repetedly

console.log("first task")
setTimeout(()=>{
    console.log("second task delay")
},3000)
console.log("third task")   

//?O/p = first task > third task > second task delay
//?third taks will excute as second is required time to execute


💛API works-------------- RAPIDAPI.COM
-http request-  message sent to server to get response
-API= intermediate between application and server, allows different software application to work wiht each other, set of rules, connect or get data to frontend from other application backend therefore communicate with different application
endpoint = it is url of server from where we are getting data from
💔💔rapid api website is bank of api



💛💛CALLBACK()  //?function passed as argument, function executed after another task completes,
fucntion callback(){        //he call back function
    console.log("tamate tak")
}

function HOF(callbackwala){ //he highorder function karan hena callback function as a parameter gheto
    setTimeout(()=>{
        console.log("kande fry zhale 2 second madhe mag call back funciton la call kr tamate takayla")
        callbackwala()
    },2000);
}


HOF(callback)       //fuction calling funciton



//!💛💛COMPONENTS OF HTTPS REQUEST 
//* .Method(HTTP verb)
GET - Retrive data 
POST - Sending data to server 
PUT - Update 
DELETE - Delete the data
//* URL - https://e.com 
//* HEADERS - additional metadata about the request
//* BODY - send data to server
//* HTTP CLIENT -  fetch(this is default), axios(this is third party)
//*.then() = fetch takes time so we use .then to wait for the response


//!💛💛 HTTP REQUEEST USING FETCH from URL jsonplaceholder.com
//?/posts gives 100 posts in json format
fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    return response.json().then((posts)=>{      //?.json() converts data to json so waiting so .then()
        console.log(posts)
    })

    }).catch((error)=>{
        console.log('error fetching posts',error);
    })



//! FETCH USER id FIRST with id 2 THEN FETCH post data WITH USERID = 2 in url you can use /posts?userid=2

-function fetchUserData(fetchuserPost){      
    //?fetchuserPost is callback function which will run once id is found for user in this function
    fetch("https://jsonplaceholder.typicode.com/users/2").then((response)=>{
        return response.json().then((userData)=>{
            console.log(userData.id);       //?we are fetching id of user using this function
            fetchuserPost(userData.id);     //?once id got now call the fetchpost
        })
    }).catch((error)=>{
        console.log(error);
    })
}

//?This function will go as callback in above function 
//?mhnje above function madhun aplyla id bhetayle ani ekda user id bhetla ki user ch post print karnyasathi he khalcha function use kela varchya function madhe

-function fetchuserPost(userId){     //?function is taking user id from the above function
    fetch(`https://jsonplaceholder.typicode.com/posts?userid= ${userId}`).then((response)=>{
        return response.json().then((post)=>{
            console.log(post);
        })
    }).catch((error)=>{
        console.log(error)
    })
}

fetchUserData(fetchuserPost)    //?fetchuserPost is a callback function which goes in another funciton



💛💛PROMISE- object representing result of async operation
PENDING - Operation still in progress
FULLFILLED-  operation over and we have result 
REJECTED - operation over and got error

//?CREATING PROMISE
cost myPromise = new Promise((resolved,rejected)=>{ //resolved and rejected are function
    const success = true;
    if(success){
        resolved('the promise operation is successful')
    }
    else{
        rejected("the promise operation failed")
    }
})

//?CONSUMING PROMISE
myPromise.then((result)=>{
        console.log(result)     //?will have the resolved content
    }).catch((err)=>{
            console.log(err)        //?will have rejected content
        }).finally(()=>{
            console.log("this will always be printed")
             })
🌼🌼🌼HERE .then will get result from resolved() and .catch will get err from rejected()



//!ANOTHER EXAMPLE IN REAL LIFE
//?CREATE PROMISE
//?CONSUME PROMISE
//?fetch() method is also a promise based 
const fettch = fetch("https://jsonplaceholder.typicode.com/albums")
fettch.then((response)=>{
    response.json().then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })
}

💛💛
Promise.all         //wait till all the promises are resolved
Promise.race        //proceeding when even one promise is resolved 




💛💛async await     //async means the function is going to take time  
//await means waiting for response or promise
//creating promise
async function fetchAlbumns(){
    try{
        //?success
        const albumsResponse = await fetch("https://jsonplaceholder.tupicode.com/albums"); //?requires time so used await

        const albums = await albumnsResponse.json()  //?this .json() also requires time so await
        console.log(albums); //?no need to use .then
    }
    catch(error){
        //?failure
        console.log(error);

    }
//always try to wrap in try catch block


💛💛PROJECT14 





306,307
💛💛AJAX💛💛  //?asynchronous javascript and xml allows to send/fetch data using xmlHttp request from server without full page reload 
//we are going to use fetch or axios api for request better than XMLHttpRequest
💛using fetch
const fetchdata2 = async ()=>{
    try{
        const result = await fetch(url);
        return result.json()
    }
    catch(error){
        console.log(error);
    }
}

//calling promise
fetchdata2().then((result)=>{console.log(result)})

💛//using axios     //profit is you dont need to convert the data to json //go to axios cdnjs copy
const fetchdata2 = async ()=>{
    try{
        const data = await axios.get(url)
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

//calling promise
fetchdata2()




💛💛LOCAL STORAGE💛💛   
localStorage.setItem("name","vaibhav")
localStorage.getItem("name")
localStorage.removeItem("name")
JSON.stringify(data)                            //setItem kartana JSON.stringify() kar
JSON.parse(localStorage.getItem('tasks'))       //get kartana JSON.parse



//fetch api promise return karte mhnun .then kela pn result.json() pn promise return karte mhnun azhun ekda .then kela
fetch(url).then((result)=>{
    result.json().then(data)=>{console.log(data)}});
//OR
const fetchpost = async()=>{
    try{
        const result = await fetch(url)
        const data = result.json()
    }
    catch(error){
        console.log(error)
    }
}
fetchpost()


💛💛COMMANDS LINE💛💛 commands are entered to perform tasks
CLI = for unix,linux, eg=bash in macos we use terminal
COMMAND PROMT - microsoft cli for windows also can use powershell
//!cli is like car and command promt is toyota corolla
// -Navigation:
// - `pwd': Print current working directory.
// - `cd <directory_name>`: Change to specified directory.
// - `cd ..`: Navigate up one directory.
// - `cd`: Navigate to home directory.

// - File Management:
// - `Is` (Linux/macOS)/ `dir` (Windows): List current directory contents.
// - `touch <filename>` (Linux/macOS): Create empty file.
// - `mkdir <directory_name>`: Create directory.
// - `rm <filename>` or rm folder/index.html (Linux/macOS)/ `del <filena e> (Windows): Delete file.
// - `rm-directory_name>` (Linux/macOS)/ `rmdir /s <directory_name>` (Windows): Delete directory and contents.
// - `cp <source> <destination>` (Linux/macOS)/ `  copy <source> <destination>` (Windows): Copy files.
// - `mv style.css foldername




💛💛Nodejs💛💛
//?not framework it's js runtime environment allows server side javascript running just because V8-engine(compiles js code into machine code using jit. it optimizes code and memory allocation)
//?node js provides asynchronous (non-blocking i/o)
//!💛INSTALLING
1. package manager - using apt
2. official website - download lts version node.js automatically installs npm
3. version management tool- nodeversionmanager(nvm)


node -v             //for version
node app.js        //to run file

🔰nodejs repl(read eval print loop)🔰 -allows to test js code 
    -read- read user input 
    -eval - evaluate js expression 
    -print- output result 
    -loop - await more input , create loop 


🔰In terminal type node enter now you can write js code 
const a = ()=>{console.log("hi")}; 
a();
write .exit to exit the js in terminal 


//!EXECUTION WORKING
1. Start> 
2.Call Stack(checks if code is not asynchronous then)> 
3. directly Execute  and if code is asynchronous then sended to node api 
4. Node Api(deals wiht asynchronous(means http request or file handling))
5. Once asynchronous code runs it will push to callback queue
6. Event loop checks if code in callback queue then push to call stack for execution



//! NON BLOCKING I/0
if code is asynchronous means it is executed in node api till this everything is halted
so to deal with this we use promises, async/await, callbacks to achive non blocking i/o
1.start 
2.execute code (if asynchronous then complete process)
3.Till the asynchronous code executes we can continue execute other code 
4.Once the asynchronous is completed then push to call back queue then 



//!COMPONENT 
//?1.V8 engine - allows nodejs to run java script
//*developed by google, converts js code into machine code using jit 
//?2.Libuv - responsible for event loop and i/o operation
//?3.NodeJS api - allows features i.e., file,request
//?4.NPM - allows to download dependencies and libraries
//?5.Eventloop- constatnly checks the call back queue and call stack
//?6.Buffers and streams - allows to handle non-binary data and streams allows processing in chunks


//!NODE JS SINGLE THREADED EVENT LOOP
-allows 1000 of concurrent connections so for each connection no new thread so lightweight
-Event loop helps in doing this.
-here connection means when one code is executing other code is considered this is connection



//!NODEJS GLOBAL OBJECT AND METHODS //
//*global is nothing but the object
//*in terminal write Node app           //?app is app.js
//*in app.js write 
    console.log(global);    //?gives all functions
    global.myGlobal = "hi"  //myGlobal is property in global object
    console.log(global.myGlobal);
    console.log("myGlobal" in global)   //?to check the property is global or not

// console.log(__filename)                  //in cmd we use ls
// console.log(__dirname)                  //in cmd we use pwd
// setTimeout()
    setTimeout(()=>{
        console.log("prints this after 5 secoonds")
    },5000)

// setinterval()
    let count =0;
    const interval = setInterval(()=>{
        console.log(count);
        count++;

        if(count >5){
            clearInterval(interval);    //?passing the variable
        }
    },3000)

// clearTimeout()
// clearinterval()
//?these are accessible everywhere

//!nodejs PROCESS OBJECT and methods🔰  //
console.log(process)  //?in terminal do node app   app is app.js
//`process.exit()`: Terminate Node.js process.
// `process.cwd()': Get current working directory.
//`process.chdir(directory)`: Change working directory.
//process.nextTick(callback)`: Execute callback on the "next tick".
//process.hrtime(): Get high-resolution timestamp.
//process.memoryUsage(): Retrieve memory usage info.
//`process.uptime()`: Get process runtime in seconds.
//`process.kill(pid, [signal])`: Send signal to a process (default is SIGTERM

💔💔 ENVIRONMENT (mhnje apla appication produciton madhe ahe ka development madhe aahe he kalte)
const appEnvironment = process.env.APP_ENV || development;
console.log(`our application is running on ${appEnvironment}`)         //ata run kr kela ki terminal open hoil tith jr tula development to produciton karaych asal tr terminal madhe lihi App_Env = produciton node app

💔💔 TO EXIT THE PROCESS
if(process.env.Node_Env !=='production'){
    console.log("THIS SHOULD ONLY RUN IN PRODUCTION")
    process.exit()
}


//340,341
🔰MODULES AND REQUIRE🔰    //modules(modules can be file containing code ) require(reuqire is a funciton used to import modules in other modules)
//modules are exported using (module.exports=functionname or export)  and catch that in other file using   (const name = require(filepath wehre we written export) or i+mport )


//*🟠🟠ecmascript based =example using module.exports
//?To export function 
module.exports = fun1;
//?To export object
module.exports = {
    add:function1(a,b){return a+b},
    subtract:function2(a,b){return a*b},
}
//now we want to catch it 
const fun1 = require(./util.js)  //?to get the funciton

cosnt utils = require(./utils.js); //?to get the object
    console.log(utils.function1(3,4))


//*🟠🟠common js based =example using only export we have export default  and export 
//?imp while using es module you have to use node app.js insted of node app
//!export default use this when function not have name
export default function(name){
    return name;
}
//!export use this when function have name
export function add(a,b){
    return a+b;
}
//!mixed export
export default function(name){
    return name;
}
export function add(a,b){
    return a+b;
}

//now in other file where we want to catch
import greet from "./utils.mjs"
console.log(greet("vaibhav"));

import {add} from "./utils.mjs"
console.log(add(1,2)); 

import greet,{add} from "./utils.mjs"
console.log(greet("vaibhav"));
console.log(add(3,2));

//?EXPORT EVERYTHING
import * as dfs from "./utils.mjs"
console.log(dfs.add(2,3));



🤢API🤢  //go to nodejs website => documentation=>api
⭐file system (fs) api⭐

const fs = require("fs")//fs is module in nodejs so we required it
console.log(fs)
now create text file and insert text in it 
//!READING sychronous way
const data = fs.readFileSync("D").toString();  //to conver to string as it is in buffer format
//sychronous and tostring because it will read bit by bit

//Asychronous way means using callback function
fs.readFile("./sam.txt", "utf-8", (error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})

//!WRITING
fs.writeFile("path of file to write","some new content", (error)=>{             //you can use .appendFile
    if(error){
        console.log(error)
    }
    else{
        console.log("content is writen")
    }
})

//! APPENDING FILES
fs.appendFile("./sam.txt","content appended in sam.txt",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("file content appended")
    }
})

//!CHECKING IF FILE EXIST
fs.access("./sam.txt","fs.constants.F_OK",(error)={
    if(error){
        console.log(error)
    }
    else{
        console.log("file exists")
    }
})

//!DELETE/UNLINK THE FILE
fs.unlink("./new.txt",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("deleted")
    }
})
//!USING PROMISES
const fs = require("fs/promises");
const fileget = async()=>{

    try{
        const data = fs.readFile("./index.txt","utf-8");
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
fileget();


⭐operating system (os) api⭐
const os = require("os")//os is module in nodejs so we required it
console.log(os.arch())                //returns cpu archicture
os.cpus()                             //cpu info
os.ndnness()                             //cpu info
os.freemem()                           //in bytes
os.totalmem()                           //in bytes
os.homedir()                           //shows cwd
os.hostname()                           //
os.loadavg()                           //
os.networkInterfaces()                  //
os.platform()                           //
os.release()                           //version

⭐path module⭐ - allows working with file/directory path
const path = require("path")                //os is module in nodejs so we required it
path.basename("./folder/subfolder/fie.txt") //fie.txt last part
path.dirname("./folder/subfolder/fie.txt")//give /folder/subfolder
path.extname("./folder/subfolder/fie.txt") //gives extension txt

path.join("/user","text","file.txt")    //./user/text/file.txt
path.resolve("user","file.txt") //you'll get complete path
path.isAbsolute("/user/text") //absolute mhnje ardha pth   
const parsed = path.parse("/user/text")//you'll get complete path
parsed.dirname
parsed.filename
parsed.pathname
parsed.ext                  //extension




⭐⭐REST(representational state transfer) API 
- set of rules for building web services
-uses http for crud operations
//?RULES -
stateless: request from clinet contains all info needed for server
client-server: client responsible for UI and server for processing data
cacheability: for performance 
layered system: for scalability
//?HTTP METHODS 
GET : to get data 
POST: to create data 
PUT: to update data 
DELETE: to delete data 
PATCH: to paritally update the data 
HEAD: to fetch the headers 
OPTIONS: to get http methods

//!CLIENT SERVER ARCHITECTURE
client past the url this is initialization
tcp/ip connection 
http request sent 
server process the request 
server send response
client handles data 
connection terminited

//!API
-API= intermediate between application and server, set of rules for communication, connect or get data to frontend from other application backend therefore communicate with different application
endpoint = it is url of server from where we are getting data from
💔💔rapid api website is bank of api



⭐⭐ CREATING node js SERVER  using vanillajs⭐⭐                  
//if nodejs then create app.js file if expressjs then server.js file

//STEP1)IMPORT MODULES
const http = require("http");

//STEP2) CREATE HANDLERS(contains logic and data to send back to client)
const requestHandler = (req,res)=>{ //request is from user and response
    console.log(req);  //do this to get the data
    console.log(res);   //do this to get ddata 
    res.writeHead(200,{"Content-Type":"text/plain"})//what kind of data to be sent like text to user and status code.
    res.end("vaibhav is good") //This will come on website
} 
//STEP3) CREATE SERVER
const server = http.createServer(requestHandler);

//STEP4) START SERVER
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{ //server ready to listen for request
    console.log(`server is running on http://localhost:${PORT}`)
})

//?http is a protocol
//?localhost is domain name represents current computer
//?TO START SERVER - node app or node server or node index
//?TO CLOSE SERVER - ctrl+c






⭐⭐ node js ROUTING(handling request based on url and http mehtod) ⭐
localhost:2000/     -means home rout 
localhost:4000/about - means about route and http mehod is get here
//express js will make this easy

//STEP1) importing libraries
const http = require("http")
const url = require("url");

//STEP2) create handler
const requestHandler = (req,res)=>{ //req contains actual url of request
    const passedurl = url.parse(req.url, true);         
    //suppose url  https://localhost:3000/about

    //?HOME ROUTE
    if(passedurl.pathname === '/' && req.method ='GET'){//home route
        //send response 
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("welcome to home")
    }

    //?ABOUT ROUTE
    else if(passedurl.pathname === '/about' && req.method ='GET'){//home route
        //send response 
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("welcome to about")
    }
    
    else{
        //send response 
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("Page Not found")

    }
}                 
//STEP3) creating server
const server = http.createServer(requestHandler)

//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})



⭐⭐ ROUTE PARAMETER ⭐⭐ //LIKe location on metro map
"https://example.com/products/:productID"
https:// - url protocol
example.com - domain name 
/product/ - endpoint 
:productID - route parameter   productID or : nantarch parameter asto

//STEP1) importing libraries
const http = require("http")
const url = require("url");

//STEP2) create handler
const requestHandler = (req,res)=>{ //req contains actual url of request
    const passedurl = url.parse(req.url, true); 
    // "https://le.com/products/1"
    const pathname = passedurl.pathname;       // /product/1
    //we are trying to get 1
    //split 
    const pathParts= pathname.split("/").filter(Boolean); // [1]

    if(pathParts[0] === 'products' && pathParts[1]){
        //take product id and send to user
        const productId= pathParts[1];
        //send product id to user
        res.writeHead(200,{"content-type":"text/palin"});
        res.end(productId)
    }
    else{
        res.writeHead(404,{"content-type":"text/palin"});
        res.end("not found")

    }         
//STEP3) creating server
const server = http.createServer(requestHandler)

//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})






⭐⭐ QUERY PARAMETER⭐⭐
www.vaibhav.com/menu?cheese=extra&tomato=none&add=bacon              
//?  ? ch nantarch sagla query

"localhost:3000/?os=mac&price=100"
//STEP1) importing libraries
const http = require("http")
const url = require("url");

//STEP2) create handler
const requestHandler = (req,res)=>{
    const passedurl = url.parse(req.url, true);     

    const queryparameter = passedurl.query;          
    console.log(queryparameter)
    }                 
//STEP3) creating server
const server = http.createServer(requestHandler)
//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)


⭐⭐ SENDING JSON DATA AS RESPONSE
//JSON.stringify()   and change Content-Type:JSON

//STEP1) importing libraries
const http = require("http")
const url = require("url");
//STEP2) create handler
const requestHandler = (req,res)=>{
    const passedurl = url.parse(req.url, true);             //
    const data = {
        id:2,
        name:"vaibhav",
    }

    //send response 
    // res.writeHead(200,{"Content-Type":"text/plain"})
    res.setHeader(Content-Type:"application/json")//🔥🔥
    res.end(JSON.stringify(data))
    }                 
//STEP3) creating server
const server = http.createServer(requestHandler)
//STEP4) start server
const PORT = process.env.PORT||3000
server.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)

//CREATING EMPLOYEE API
//!Get all employees
if (method === "GET" && url === "/employees") {
    res.writeHead (200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
    }
// ! Get single employee
else if (method === "GET" && url==="/employees" && id) {
const employee = employees.find((emp) => emp.id === parseInt(id)
if (employee) {
res.writeHead (200, { "Content-Type": "application/json" });
res.end(JSON.stringify(employee));
} else {
res.writeHead (200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "Employee not found" }));
}



//go to finalproject => express=> book api   to start node name.js
⭐⭐ EXPRESS JS ⭐⭐
//!nodejs is env not framework allows javascript server side
//!expressjs is nodejs framework for fast api development and managing routing, request and sending response


npm init   or use npm init --yes     //so no need to configure                
//create package.json  //?contains all packages version
// expressjs.com => getstarted => api
//CREATING SERVER WITHOUT HTTP AND VANILLA JS 
npm i express@4.18.1    
//creates node_module folder(contains packages) and package-lock.json(snapshot) to download particular version
//?under package.json we now have express:"version"

const express = require("express") //?package
const app = express() //?instance of express
app.use(express.json()) //to accept data from client to server mhnje req.body karta yet nahi jr he use kela nahi tr

//!DEFINE ROUTER HANDLER
app.get("/",(req,res)=>{  //?represents http://localhost:8082
    res.send("hello world")
    res.json({
        status:'success',
        message:"welocome",

    })
})

//CREATE PORT
const PORT = process.env.PORT||8082
//START SERVER
app.listen(PORT, ()=>{
    console.log(`server is runnign on ${PORT}`)
}) 

//! In postman collection is individual endpoint
//! Click on three dots and add request
//! put Home and give endpoint GET  http://localhost:8082 and then send you will get above data from res.json()

//?To fetch all books route will be /books
const books =[
    {id:'1', title:"lake",author:"vai"},
    {id:'2', title:"butter",author:"san"}
]
app.get('/books',(req,res)=>{ //? http://localhost:8082/books
    res.json({
        status:"success",
        message:"books fetched successfully",
        data:bookS,
    })
})

//?To fetch single books route will be /books using req.param.id  
// suppose tu url dila http://localhost:8082/books/2    
tr code madhe tula asa lihav lagal
app.get("/books/:id",(req,res)=>{ //:id he parameters aahe
    const id = req.param.id;
    const bookFound = books.find((book)=> book.id===id);
    res.json({
        status:"success",
        message:'found book',
        data:bookFound,
    });
})

//?To create a book  so we use body to send the data
//*in postman create new endpoint make it post and url http://localhost:8082/books   ani select raw and text should be json 
{"id":"4", "title":"dsad", "author":"kranti"};

//Receiving incoming from client we use middleware
app.use(express.json()) //tr code madhe tula asa lihav lagal
app.post("/books",(req,res)=>{  //body has the data
    const newBook = req.body;
    //?add to books object array
    books.push(newBook);
    res.json({
        status:"success",
        message:'created book successfully',
        data:books,
    });
})



💛💛//TILL DATE IF ANY CAHNGES IN .JS WE WERE SAVING IT AND THEN RUN MANUALLY LIKE  node filename   BUT NOW AUTOMATIC
package.json => in script property => "start":"node filename.js"  and "server": "nodemon filename.js"  file name should be same in "main": he doni lihi   ani save kr => now to run  
npm run start or npm run server 

//*whenever changes occurs in file nodemon restart server
npm i nodemon -D  //*D means developement dependencies not prod
nodemon server.js
npm --watch server



⭐ EXPRESS ROUTER(Grouping routes like all user related routes one file)
1.create a folder 
2.npm init   //creates node_module and package-lock.json
3.npm i express //creates package.json
4.Finally create server.js file 

now in server.js 
const express = require('express');
const app = express;
app.use(express.json());

//?Getting all users
app.get("/users",(req,res)=>{
    res.json({
        "message":"all users fetched"       //now can create end point and test it
        //http://localhost:3000/users
    })
})
//?Getting single user
app.get("/users/:id",(req,res)=>{
    res.json({
        "message":"single user fetched"       //now can create end point and test it
        //http://localhost:3000/users/2
    })
})
//?update single user
app.put("/users/:id",(req,res)=>{
    res.json({
        "message":"updated user"       //now can create end point and test it
        //http://localhost:3000/users/2
    })
})
//?Delete single user
app.delete("/users/:id",(req,res)=>{
    res.json({
        "message":"deleted user"       //now can create end point and test it
        //http://localhost:3000/users/2
    })
})

Above is traditional now use router 

Now create routes folder in our project inside make userRouter.js
//!inside userRouter.js 
const express = require('express');
const userRouter = express.Router();     //creating instance of express router

//?Getting all users
userRouter.get("/users",(req,res)=>{
    res.json({
        "message":"all users fetched"       //now can create end point and test it
        //http://localhost:3000/users
    })
})


//?Single users
userRouter.get("/users/:id",(req,res)=>{
    res.json({
        "message":"all users fetched"       //now can create end point and test it
        //http://localhost:3000/users
    })
})
//?export 
module.exports = userRouter;

//!inside server.js modify the code
const express= require("express")
const app = express();
app.use(express.json());

const userRouter = require("./routes/userRouter");  //?path to import

app.use("/",userRouter);  //?modified

app.listen(PORT,()=>{
    console.log("server is running on port");
})


//*FURTHER YOU CAN MODIFY THE CODE IN userRouter.js as we are repeting the code 
// "/users" so remove /users
//!inside userRouter.js 
const express = require('express');
const userRouter = express.Router();     //creating instance of express router

//?Getting all users
userRouter.get("/",(req,res)=>{
    res.json({
        "message":"all users fetched"       //now can create end point and test it
        //http://localhost:3000/users
    })
})

//?Single users
userRouter.get("/:id",(req,res)=>{
    res.json({
        "message":"all users fetched"       //now can create end point and test it
        //http://localhost:3000/users
    })
})

//?dlete users
userRouter.gdeleteet("/:id",(req,res)=>{
    res.json({
        "message":"all users fetched"       //now can create end point and test it
        //http://localhost:3000/users
    })
})
//?export 
module.exports = userRouter;

//!inside server.js modify the code
const express= require("express")
const app = express();
app.use(express.json());

const userRouter = require("./routes/userRouter");  //?path to import

app.use("/users",userRouter);  //?modified only single for all the routes


app.listen(PORT,()=>{
    console.log("server is running on port");
})






⭐EXPRESS ROUTER CHAINING  369              
//apan jith router.get("/",(req,res)=>{res.json()}) karat hota n tyala replacement aahe he. mhnje teen chaar lokanna same endpoint asal tr ekatch karta yeil
//vari /:id he same ahe get single user,update single user, delete single user sathi
//?so in userRouter.js
//!to get all user
userRouter.route('/').get((req,res)=>{ //route() madhe apan j nehemi end point use hote t dilay
    res.json({
        "message":"all user fetched"
    })
})      
//!chaining using route()      
userRouter.route('/:id').get((req,res)=>{ //route() madhe apan j nehemi end point use hote t dilay
    res.json({
        "message":"fetched single user"
    })
}).delete((req,res)=>{ //route() madhe apan j nehemi end point use hote t dilay
    res.json({
        "message":"deleted single user"
    })
}).put((req,res)=>{ //route() madhe apan j nehemi end point use hote t dilay
    res.json({
        "message":"updated single user"
    })
})            
modoule.exports = userRouter;
//?in server.js
app.use("/users",userRouter);  //?modified only single for all the routes




⭐ MIDDLEWARE        passing one more argument
syntax 
function middlewareName(req,res,next){
    //middleware logic
    next();
}
//used for authentication or security takes threee arguement (req,res,next)
//in folder of project
//make folder middelware and create authentication.js file inside
const isAuthenticated = (req,res,next)=>{
    const login = true;
    if(login){
        next();               //next() means callback passed to next middleware
    }
    else{
        res.json({
            "message":"UNOTHORIZED"
        })}};
module.exports = isAuthenticated;                      
//now in server.js do const authenticated = require("path form where exported")
//?ATA JITH💥app.use("/user",authenticated,userRouter)

OR 
//USE APPLICATION LEVEL MIDDLEWARE
//in server.js madhech lihi direct TOP LA
app.use((req,res,next)=>{
    console.log("i am middleware")
    //call next
    next() 
    //he tolnaka sarkha ast jr next() lihila nahi tr next code la jaatch nahi  
})

OR
const loggedRequest =(req,res,next)=>{
    console.log("i am middleware");
    next();
}
app.use(loggedRequest);     //?whenever you do request it goes through this


REQUEST > MIDDLEWARE1 > MIDDLEWARE2 > RESPONSE
next() passes the control to next middleware


⭐ BUILTIN MIDDLEWARES PROVIDED BY EXPRESS(check point)
express.json() //Checks if the req.body has json format data then only accept         

app.use(express.json({limit:'1mb'}))//?user can send json data upto 1mb size
app.use(express.static())  
//for client side fetchable files,deals with files,css,js
express.urlencoded({extended:true})                                         
//sends data from html forms
res.sendFile(path.join("firstPath","secondPath"))





//!RENDERING STATI FILES
REMEMBER 
npm init --yes 
npm i express 
npm i nodemon -D
Then create server.js
Then create views folder(html files) 
Then create public folder and inside create ->
//?public or asset forlder cotains all the static file like css folder, images folder, js folder(script.js), 

now in server.js 
const express =require('express');
const path = require('path');
const app = express();
const PORT = 3000

app.use(express.static(path.join(__dirname,'public'))

//?RENDER HOME 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","home.html"));
})

//?RENDER HOME 
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact.html"));
})

//?RENDER ABOUT
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"));
})

app.listen(PORT,console.log("server is running on port"))

//*Change the href="./about.html" to "/about"














//!!!!!!!!RENDERING TEMPLATE ENGINES USING EJS
⭐ EJS(embedded javascript just by changing .html with .ejs for creating html with blank space where we can put our dynamic data)
//*npm i ejs  //?check in package.json whether installed or not

// 1. `<%= variable %>`: Output/assign value to variable, HTML-escaped.
// 2. `<%- variable %>`: Output unescaped value.
// 3. <% code %>`: Execute JavaScript, no output.
// 4. <%_code_%>: Same as `<% code %>,` strip whitespace.
// 5. `<%# comment %>`: Add non-visible HTML comment.
// 6. `<%%>`: Output literal `<%`.
// 7. `<% include('file') %>`: Include another EJS file (partials).

//views navach folder madhe saglya .HTML file la  .ejs files tak public folder different ahe 
now in server.js 
const path = require('path');
const express =require('express');
const app = express();
app.use(express.static(path.join(__dirname,'public'))
//?set the view engine as ejs
app.set("view engine","ejs")  
//?we can ignore .ejs while rendering        

const PORT = 3000


//?RENDER HOME 
app.get('/',(req,res)=>{
    //now insted of app.sendFile(path.join()) we use app.render()
    // use this in ejs file to acces data from server to ejs file ejs is like html:
    res.render('home.ejs')
    //?we can ignore .ejs while rendering        
})

//?RENDER HOME 
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

//?RENDER ABOUT
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.listen(PORT,console.log("server is running on port"))






⭐PASSING DATA FROM SERVER TO CLIENT HTML
1)create userdata.ejs in view folder in body add <h1><%= name%></h1>
2)in srerver.js render that userdata.ejs while rendering pass data there only
3)and this sended data from server.js to be accepted in userdata.ejs file 

now in server.js 
const path = require('path');
const express =require('express');
const app = express();
app.use(express.static(path.join(__dirname,'public'))
//?set the view engine as ejs
app.set("view engine","ejs")          

const PORT = 3000


//?RENDER HOME 
app.get('/',(req,res)=>{
    //now insted of app.sendFile(path.join()) we use app.render()
    // use this in ejs file to acces data from server to ejs file ejs is like html:
    res.render('home.ejs')
})

//?RENDER HOME 
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

//?RENDER USERDATA.EJS
app.get('/user',(req,res)=>{        //changed route to /user
    //*dummy content
    const user = {name:"alice",age:23,}
    res.render('userdata.ejs',user)🧡🧡//passed the name and age name will go to .ejs file
})

app.listen(PORT,console.log("server is running on port"))


//!⭐EJS CONDITIONAL⭐-------------if user logedin then show 
//in userdata.ejs
<%if(age > 20){%>
    <h1><%= name%></h1>
<%}%>

<p><%=(age>20)?"welocome logged in":"pelase grow"%></p>

//!⭐EJS LOOP⭐
//Create product.ejs and under body
app.get("/product",(req,res)=>{
    const products = [
            {name:"laptop",price:43},
            {name:"phone",price:4233},
            {name:"TV",price:423},
        ]
        res.render("product.ejs",{products});   //?always pass as object
    })
//Under server.js render the product
<ul>
    <% products.forEach((product)=>{ %>
        <li><%= product.name%></li> $ <%= product.price%>
    <% }) %>
</ul>



⭐EJS PARTIALS        291       
//aplyala header ani footer saglya .ejs files  madhe lagte tr apan view folder madhe partial folder banavla tyat header.ejs ani footer.ejs banavla ani content takla along with baki jya .ejs files la .css lagta t pn header ani footer madhe add kela mhnje baki .ejs files madhe boiler plate ch nahi
direct bakichya .ejs files madhun ctrl+x kela ani header.ejs madhe paste kela
//tyala acces karaych home.ejs madhe 🔥🔥 <%-include('partials/header.ejs')%> ani tyzhya home.ejs madhe boiler plate nasla tri chalal


⭐EJS TITLE 
//kay kar jecha home.ejs madhe tu <%-include("partials/header.ejs") karto n tr azhun ek argument add kr <%-include("partials/header.ejs",{"title":"home page"})
//ani mg hech tith mhnje header.ejs madhe acces kr jith main html ch code aahe <title><%=title%></title>
title on tab is changed like about,home,contact


⭐EJS LAYOUT    //this can replace partials
npm i express-ejs-layouts
//in server.js do               
const ejsLayout = require("express-ejs-layouts")//plug ejs layout as middleware
app.use(ejsLayout)
//INSIDE view folder create layout folder create file main-layout.ejs
app.set("layout","layout/main-layout.ejs")  //setting template engine 
//in server.js write this folder name, path of the file

//ata mainlayout.ejs madhe ye ani boilerplate lihi ani header ani footer lav ata tyat ch 
//ata saglya .ejs files madhe content kasa aahe boiler plate madhe head tag mg body tag body madhe header,main,footer
tr saglya .ejs files madhe fakta main madhla part change aahe 
tr mainlayout.ejs madhe purna tasach copy kr ani main madhe change kr
<main>
    <%-body%> //ekdach lihaych he body yeil purna home.ejs,about.ejs,contact.ejs chi
</main>
//ani sarva .ejs files la lagnara css files he main-layout.ejs madhe link kar</main>
//!ani tyzhya home.ejs madhe boiler plate nasla tri chalal


⭐DYNAMIC ERROR page(customized via middleware)         
//404(not found) 504(internal server error)
1)view madhe error.js file banav 
2)server.ejs madhe don middleware lihi 
// app.use(req,res,next)=>{
//     const error = new Error("404 page not found")
//     next(error)
// }
// app.use(err,req,res,next)=>{
//     res.render('error',{error:err.message})                            //render kela karan apan ejs use kartoy
// }
3)ata error.ejs madhe lihi this is error template or html file 
<h1><%=error%></h1>





⭐⭐⭐⭐⭐⭐MONGODB⭐⭐⭐⭐⭐⭐296
//nosql , stores data in json like format,  documentbased , 
//!in sql type of data must be specified earlier so mongodb for large data, rapid development, complex datatype (json array)
//!sql is vertical scalable(needs more powerful single server) , mongodb horizontal(multiple server can be added)
//!sql(ACID),mongodb(consistency)
//collection == table
//document == row
//fields == columnname

⭐MONGODB ATLAS //cloud based DB services allows tosecurity, manage,update databases, multi cloud support(allows to spread data across aws,azure,google cloud)
⭐MONGODB DRIVERS  //connect app(js,py,c#) to databases

npm init --yes  //directly downloads
npm i express
npm i mongodb

CREATE THE server.js

//you will require mongodb connection string 300 vide0
//!video 302
mongodb.com=>resources=>mongodbdrivers=>select node.js=>click on quickstart=>download and install=>scroll down and mongodb deployment=>create connection string=>go to mongodb.com=>try free => try free =>create a project and name it =>create project =>create => select free plan =>select provide as aws, region => create deployment =>username and password =>click create db user=>choose connection method =>drivers=>downside connection string is present=>review setup steps =>Done

Now go in Network Access tab on left if you want ot allow to access anyone from anywhere click on Add Ip address and then Allow Access From Anywhere then confirm

in overview tab on left you can see the data 



OR
directly go on mongodbnodejs drivers



//!watch 301 inside server.js file
⭐CONNECTION  (mongodb atlas madhun connection string bhetal ani ti takaychi mongodbcompass madhe connect karaysathi)
const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb"); //mongoclient is class , serverapiversion is object contains which version of server api to use

// Database credentials                         
const username = "vaithon";
const password = "Vaibhav@123";
const databaseName = "student-database"; // Corrected database name
const mongodburl = `mongodb+srv://${username}:${password}@vaibhav.oucgfq7.mongodb.net/${databaseName}student-database`;
//FINAL URL    ==  mongodb+srv://vaithon:Vaibhav%40123@vaibhav.oucgfq7.mongodb.net/student-database
const serverApiOptions = {  //additional settings
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true,
};

// Function to connect to MongoDB
const connectDb = async () => {
  try {
    //create client
    const client = new MongoClient(mongodburl, { serverApi: serverApiOptions });
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

// Connect to MongoDB
connectDb();
//start the server
const PORT = process.env.PORT||8082;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));


⭐MONGODB COMPASS AND VS CODE EXTENSION 303
//go to mongodbcompass(gui for mongodb) => download mongodbcompass => openit and paste your mongodb connection string(means url) there and click connect
//vs code extension "mongodb for vs code"download kr
click on mongodb logo in vs code and add Connection then connect(paste url and enter)

⭐
//collection == table
//document == row  json like format
//fields == columnname
//index = allows to perform queries or to find the document
//Sharding = distributing data across multiple servers


⭐insert,insertOne,insertMany([{},{},{}])
//insert is old method
//insertMany to insert array of object
//*Perform all the operations under connectDB function under client.connect();
//1.Database name (school);
const database = client.db('oxford');
//2.Collections (student)
const students = database.collection('students');
//3.documents()
const result = await students.insertOne({
    name:"d",
    age:23,
    subjects:["math","phy"],
});
//*you can see the database and collection in mongodb atlas, compass, 


⭐find,findOne,aggregate()                  
// const resultreturn = students.find();              //students is collection name
resultreturn is a cursor pointing to the document so conver to array
// const resultarray = await resultreturn.toArray();  //before console.log do to array

// const resultreturn = students.findOne({age:23});   //students is collection name
// console.log(resultreturn)


⭐updateOne(),updateMany(),findOneAndUpdate()                            
//findOneAndUpdate and updateOne are same but findOneAndUpdate returns the documents
collectionname.updateOne({name:"san"},{$set:{age:40}})

const result = students.findOneAndUpdate(
    {name:"v"},{$set:{age:32}}
);


⭐deleteOne(),deleteMany(),findOneAndDelete()    
//findOneAndDelete() deletes one and return deleted document
const result  = await students.deleteOne({name:"v"})
console.log(result);

⭐Cursor used to iterate the query result.


⭐QUERY OPERATOR
Common operators:
// `$eq': Equal to specified value
// `$ne`: Not equal to specified value
//  $gt: Greater than specified value
//  $gte: Greater than or equal to specified value
//  $lt': Less than specified value
// `$lte`: Less than or equal to specified value
//  $in': In specified array values
//  $nin: Not in specified array values // find({age:{$nin:[23,34,56]}})
//RESULT IS ALWAYS A CURSOR SO
-const resultCursor = student.find({age:{$gt:40}})  🔥           
-const resultCursor = student.find({age:{$nin:[40,30,20]}})  🔥           
-const resultCursor = student.find({age:{$gt:40, $lt:50})  🔥           
//now you got cursor now use forEach loop to print or use toArray method
-const result = resultCursor.forEach((doc)=>{console.log(doc)})  //
or use resultCursor.toArrray();

Common operators:LOGICAL operators
//!we specify the array after this operator
// $and
// $or      //collectionname.find({$or:[{age:30},{marks:{$gt:40}}])
// $not
// $nor



⭐⭐⭐ MONGOOSE⭐⭐⭐⭐            
//ODM(object-data-modelling library of mongodb for rhobust way for managing and interracting with mongodatabase)
// Mongodb is schemaless 
//USED TO DESIGN SCHEMA and also FOR VALIDATIONS more ABSTRACTION
npm init 
npm i express 
npm i express mongoose

const mongoose =require("mongoose")
const PORT = process.env.PORT||3000;
const express = require("express");
const app = express();
//connect to db
const connectToDB = async ()={
    try{
        mongoose.connect('url').then(()=>{console.log("connected")})
    }
    catch(e){
        console.log(e);
    }
}
connectToDB();
//start server 
app.listen(PORT,()=>{console.log("started server")})
//TO RUN THE FILE  🧡npm run start or node --watch server 


SCHEMA=>MODEL=>DOCUMENT
⭐SCHEMA = defines structure of document, specifies the type of data  
            to manage complex relationships
⭐MODEL = used to create instance of document.
⭐DESIGN SCHEMA
//!CREATE TEH SCHEMA
// const userProfileSchema = new mongoose.Schema ({
//     username: String, //String
//     age: Number, //Number
//     birthday: Date, //Date
//     isActive: Boolean, //Boolean
//     hobbies: [String], //Arrays of strings
//     objectId: mongoose. Schema.Types.ObjectId, //ObjectId
//     address:{
//     street: String,
//     city: String,
//     postCode: Number,
//     }, //Embed
//     customData: mongoose. Schema.Types. Mixed,

//!COMPILE THE SCHEMA TO FORM THE MODAL
const User = mongoose.model('User',userProfileSchema)           
//users navach colleciton bante

//⭐CRUD OPERATION 
//Create DOCUMENT from model using
const newUser = new User({        //creating instance(document) of User
    username:"vaibhav",age:45,birthday:new Date('2000-12-19'),isActive:true,hobbies:["football","riceball"],address:{street:"sathe",city:"nanede",postCode: 43324,},customData:{country:"india",}
})
//SAVE THE DOCUMENT
newUser.save().then((data)=>console.log(data)).catch((e)=>console.log(e))

⭐CRETEOPERATIONS
//!.save()     //ith new modal karun document create karav lagal
//!.create()   //ith no need to use new keyword direct modelname.create()

//!.insertMany()   //ith no need to use new keyword direct modelname.insertMany() we give arrray of object
User.create({}).then((data)=>{console.log("created")}).catch(e)=>cl(e))
User.insertMany([{},{},{}]).then((data)=>{console.log("created")}).catch(e)=>cl(e))


⭐READOPERATIONS
.find()     //ith new modal karun document create karav lagal
.findOne()   //ith no need to use new keyword direct modelname.create()
.findById()   //ith no need to use new keyword direct modelname.insertMany

User.find().then((user)=>console.log(user)).catch((e)=>console.log(e))
User.findOne({age:40, name:"vai"}).then((user)=>console.log(user)).catch((e)=>console.log(e))
User.findById("id here").then((user)=>console.log(user)).catch((e)=>console.log(e))

⭐.where(),sort(),limit() refine query
User.find().where('age').gte(34).sort({username:-1}).limit(4) 1 for desc

⭐UPDATE 
User.updateOne({username:vaibhav},{age:30,name:"tel"},{new:true}) //query,update,config
.findOneAndUpdate({name:"vai",},{age:32,name:"tw",},{new:true,})
.findByIdAndUpdate('id',{age:32,name:"vda",},{new:true,}

⭐ADVANCED UPDATE 
User.findOneAndUpdate({name:"v",},{$set:{age:43},})
User.findOneAndUpdate({name:"v",},{$unset:{age:1},})
User.findOneAndUpdate({name:"v",},{$addToSet:{hobbies:'reading'},})
//`$set`: Set field value in document.
// `$unset`: Remove field from document.
Array Update Operators:
// $addToSet Add item if not exists in array.
// $push': Adutitem to array.
//`$pop`: Remove item from array.
User.findOneAndUpdate({name:"v",}, {$pop:{hobies:1},}, {new:true,})
// `$pull`: Remove all instances of value from array.
// `$pullAll': Remove all matching values from array.
Arithmetic Operators:
// - `$inc`: Increment field's value.
    User.findOneAndUpdate({name:"v",}, {$inc:{age:1},}, {new:true,})
// - `$mul`: Multiply field's value.
// - `$min': Update field to minimum of current and given values.
// - $max': Update field to maximum of current and given values.
Date Operators:
// - `$currentDate: Set field to current date.


⭐DELETE   
.deleteMany()
.findOneAndDelete()
User.findByIdAndDelete({})                      //it wil return

const deleteDoc = async ()=>{
    try{
        User.deleteMany({age:{$gt{30}}})
        const deleted = await User.findOneAndDelete({name:"va"});
        const deleted = await User.findByIdAndDelete("id here")
    }catch(e){

    }
}


⭐VALIDATORS
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please username is required"],
        unique:true,
        minLength:2,
        maxLength:3,
        max:23,
        min:34,     //for number
        match: /@/  //should contain @  email madhe lau shakto
        enum: ["male","female"] //mhnje user should select from these two
        default:"male"
    },
    age:{

    },
    {timestamps:true}       //configuration
})


⭐CUSTOM VALIDATION using validate property
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"enter username it's required"]
        validate:{
            validator: function ((value)=>{
                return /^[a-zA-Z0-9]+$/.test(value)
                OR return value.endsWith("@gmail.com")
            },
            message:"user name can only alphanumeric"
            )}}})
            
            
⭐THIRDPARTY VALIDATION
npm i validator
cosnt validator = require("validator") //🧡
const userSchema = new mongoose.Schema({
    age:{
        type:Number,
        validate:{
            validator: function ((value)=>{
                return validator.isInt(value,{min:0,max:30})//🧡
                return validator.isEmail(value);
            },
            message:"invalid age or invalid email"
            )}}})
            
            
⭐set and get
sets = format the data before saving to db 
get = format the data after retrieving from db
const userSchema = new mongoose.Schema({
    age:{
        type:Number,
        set:(value)=>{value.trim()}
        set:(value)=>{`https://vaibhav.com/book/${value}`}
        set:(value)=>{value.map(tag=>tag.toLowerCase())}
    }})



⭐⭐DATA MODELING  //to design datastructure and replationship to embeed
// document inside document is embeded document. 
  //addressSchema
  const addressSchema = new mongoose.Schema(
    {
      street: String,
      city: String,
      state: String,
      zip: Number,
    },
    {
      timestamps: true,
    }
  );
  //UserSchema
  const userSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      address: addressSchema, //embedded document              
      //if you wamt to create multiple addressess then one change just do address:[addressSchema]  means you can give [{},{},{}]
    },
    {
      timestamps: true,
    });
//!compiling the user schema
  const User = mongoose.model("User", userSchema);
  
  const createUser = async () => {      //creating user
    try {
      //create the user
      const newUser = await User.create({
        name: "Emmanuel",
        email: "emma@gmail.com",
        address: {
          street: "Kumasi OT2",
          city: "Camp",
          state: "Ghana",
          zip: 1122,
        },
      });
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };

//!ARRAYS OF SUBDOCUMENTS
//if you wamt to create multiple addressess then one change just do address:[addressSchema]  means you can give [{},{},{}] after creating user module and document


⭐⭐ DATA REFERENCING - referencing one model into other schema
//?means in data modelling we were passing the schema into other schema to get all the data of 1st schema into second 
//?But in refferencing we want only id of the first schema so we pass the model as ref: into others schema.
  //authorSchema
const authorSchema = new mongoose.Schema(
    {
      name: String,
    },
    {
      timestamps: true,
    }
  );
  const Author = mongoose.model("Author", authorSchema);
  //bookschema
  const bookSchema = new mongoose.Schema(
    {
      title: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author", //REFERENCING   //ONE TO ONE RELATIONSHIP HERE AS AUTHOR USED IN BOOK SCHEMA
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  //creating model
  const Book = mongoose.model("Book", bookSchema);
//?now when you create the author document then it will create two collections book and author


⭐RELATIONSIPS ;
-1:1 = single document in one collection matches in another collection
//*above example of embedded approach and referencing approach is one:one
//*as we have passed one in other
-1:many = single document in one collection matches in many other collection
//*single post can have many comments 
//*if you wamt to create multiple addressess then one change just do address:[addressSchema]  means you can give [{},{},{}] after creating user module and document
-many:1
-many:many =multiple docuemnt in one collection associate with multiple document in another.
//* (single student can take many course many course can be taken by single student)
student collection-
enrolledCourse : [{type:mongoose.Schema.Type.ObjectId,ref:'course'}]  //i.d's of course
course collection-
enrolledStudent: [{type:mongoose.Schema.Type.ObjectId,ref:'student'}]  //id's of student
//!now create document of collection 
student.create({
    enrolledCourse:[{title:"history"},{title:"maths"}]
})




 ⭐AUTHENTICATION FLOW⭐
 browser > nodejs server > mongodatabase
 Client is (browser,postman) not the user
HTTPS is stateless means it doesnot remember the logedin client so we used AUTHENTICATION Mehtods(cookie,token,session)
COOKIE BASED 
//once logedin server gives cookie to browser and after that whenever you want to acces you give cookie with request
Therefore it generates coockies(random string given and stored at client),token(random string given and stored at server)
cookie - string saved at the client(browser) side 
session - string saved at the server itself

res.redirect('/dashboard')

///!COOKIE BASED
browser provides credentinal -> server sends to database -> if valid server sends cookie using https to browser ->cookie stored locally ->now for new request browser sends (cookie and request) to server -> server checks the cookie if valid then go ahead 

cookie approach is not recommended as stored at browser and can be got with javascript

//*setup server 
npm init --yes
npm i express ejs
npm i nodemon -D 
//create views folder and create home.ejs, login.ejs, dashboard.ejs use bootstrap
// in server.js
const express =require("express");
const path = require("path");
const app = express();
//?Middleware
app.use(express.urlencoded({extended:true}));//allows to send data from html forms
app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views")) //no need 

//?simulated database of users no database so used this
const users= [
    {name:'john',password:'123', role:"admin"},
    {name:'vai',password:'123', role:"user"},
];

//?HOME ROUTE
app.get('/',(req,res)=>{
    res.render("home.ejs")      //rendering the home template
                            //can neglect the .ejs
});

//?LOGIN ROUTE- login has <form action="/login" method="post"></form>
//?as this form will send the data to server wiht id and password
//?name="username" input will have name: and value:john
app.get('/login',(req,res)=>{
    res.render("login.ejs")      //rendering the home template
});
//?when clicked on login button this end point should be called
app.post('/login',(req,res)=>{
    //!find user login details
    const userFound = users.find((user)=>{
        return user.username===req.body.username && 
               user.password===req.body.password
    });

    //!Create some cookie 
    //*prepare the login user data
    //*setting the cookie with user data
    res.cookie("userData",JSON.stringify(userFound),{ //variable holds the data
        maxAge:3*24*60*1000,   //3days expiration  
        httpOnly:true,         //saves from sss attacks
        secure:false,  //in production is should be true
        sameSite:'strict',
    })//this will send the data in the inspect on browser
    //inspect>Application>

    //!Render the user dashboard
    if(userFound){
        res.redirect('/dashboard') //points to the route
    }
    //!else Redirect the user to login page
});

//?DASHBOARD ROUTE contains Hi<%=username%>
app.get('/dashboard',(req,res)=>{
    //!making this endpoint secure if login then only access by grabbing user from the cookie.
    //!if user stored in cookie then only redirect  
    //npm i cookie-parser
    const cookieParser = require("cookie-parser")
    app.use(cookieParser()) // makes easy to take the cookie from client request.
 
    //check the user present in cookie or not
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData):null;
    const userName = userData? userData.username:null
    if(userName){
        res.render('dashboard',{userName})//passing username catched in <%=username%> under dashboard.ejs
    }
    //!else redirect to login
    else{
        res.redirect('/login')
    }
    })
});

//?LOGOUT ROUTE
app.get('/logout',(req,res)=>{
    res.clearCookie('userData')
    res.redirect('/login')
});

//?START THE SERVER
const PORT = process.env.POR||3000;
app.listen(PORT,console.log("started server"));
//now do npm run server






⭐WHILE BUILDING API's WE don't have the UI so WE use res.json() not res.render()⭐
const express= require("express");
const cookieParser = require("cookie-parser");//to get cookie from request
const app = express();

app.use(express.json()) //to get data from client
app.use(cookieParser());

const users = [
    {username:"john", password:"123", role:"admin"},
    {username:"sarah", password:"123", role:"user"},
]

//?HOME ROUTE 
app.get('/',(req,res)=>{
    res.json({message:"welcome to the API"});
})


//?when clicked on login button this end point should be called
app.post('/login',(req,res)=>{
    //!find user login details
    const userFound = users.find((user)=>{
        return user.username===req.body.username && 
               user.password===req.body.password
    });

    //!Create some cookie 
    //*prepare the login user data
    //*setting the cookie with user data
    res.cookie("userData",JSON.stringify(userFound),{
        maxAge:3*24*60*1000,   //3days expiration  
        httpOnly:true,         //saves from sss attacks
        secure:false,  //in production is should be true
        sameSite:'strict',
    })
    //inspect>Application>

    //!Render the user dashboard
    if(userFound){
        res.json({message:"login success"})
    }
    //!else Redirect the user to login page
    else{
        res.json("Login failed")
    }
});

//?DASHBOARD ROUTE contains Hi<%=username%>
app.get('/dashboard',(req,res)=>{
    //!if user stored in cookie then only redirect  
    //npm i cookie-parser
    const cookieparser = require("cookie-parser")
    app.use(cookieParser()) // makes easy to take the cookie from client.
 
    //check the user present in cookie or not
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData):null;
    const userName = userData? userData.username:null
    if(userName){
        res.json({message:`welcome ${userName}, role:${userData.role}`})//passing username catched in <%=username%> under dashboard.ejs
    }
    //!else redirect to login
    else{
        res.json({
            message:"please login"
        })});

//?LOGOUT ROUTE
app.get('/logout',(req,res)=>{
    res.clearCookie('userData')
    res.json({message:"loggedout"});
});
   
//Now start the server
create a route in postmane 
POST and http://llocalhost:2000/login
under body raw and json we need to give the username and password 
{
    "username":"parth",
    "password":"123",
}

//!now the server has generated the cookie and asssigned to user right 
so in postman in headers >  click 10 hidden items > there are cookies

//!when we loge out the cookie is deleted from the headers as clearCookie

⭐⭐//!NOW INTEGRATE THE DATA BASE⭐⭐ 

//*setup server 
npm init --yes
npm i express ejs
npm i nodemon -D 
npm i mongoose
//create views folder and create home.ejs, login.ejs, dashboard.ejs use bootstrap
// in server.js
const express =require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

//*connecting the database
mongoose.connect("mongodb://localhost:23232/userAuthDB").then(()=>{//userAuthDB is database name
    console.log("db has been connected");
}).catch(e)=>{
    console.log(e);

};
//*create users schema
const userSchema = mongoose.schema({
    username:String,
    password:String,
    role:{
        type:String, default:"student",
    },
});
//*Compile the schema to model
const User = mongoose.model('User',userSchema)

//?Middleware
app.use(express.urlencoded({extended:true}));//allows to send data from html forms
app.set("view engine","ejs");

//?HOME ROUTE
app.get('/',(req,res)=>{
    res.render("home.ejs")      //rendering the home template
                            //can neglect the .ejs
});

//?Admin Route check if is logged in means check that the cookie has the data then check if the role is user of admin if admin give access to this if user don't give
//*for this we will create 2 custom middleware
const isAuthenticated = (req,res,next)=>{ //!Authentication
    //check the user inside the cookies
    cost userDataCookie = req.cookies.userData;
    try{
        const userData = userDataCookie && JSON.parse(userDataCookie); //ghetana kadhi pn parse and detana .stringify
        if(userData && userData.username){ //?means user is logged in
            //!add the login user into the req
            req.userData = userData; //!we will have access to userdata in admin route
            return next();
        }
        else{
            res.send("you are not logged in");
        }
    }
    catch(e){
        res.send(e);
    }
};
//*second middleware to check admin or user 
const isAdmin = (req,res,next)=>{
    if(req.userData && req.userData.role ==='admin'){
        return next();  //?giving access as person is admin
    }else{
        res.send("you don't have access to the admin route");
    }
}
//!pass these both middleware to the admin route
//?How to protect the route
app.get("/admin", isAuthenticated, isAdmin, async(req,res)=>{
    res.render("admin.ejs");
})

//!worked here
//?REGISTER ROUTE
app.get('/register',(req,res)=>{
    res.render("register.ejs")      //rendering the home template
});
//?REGISTER ROUTE Logic to take the username and password
app.post('/register',async (req,res)=>{
    const {username, passowrd} = req.body;
    //got the username and password from req.body which comes from name in form input
    //now create the data in mongodb
    //bycrypt
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt)
    await User.create({
        username:username,
        password:hashpassword,   //storing password as it is so use npm i bcryptjs and user hashedpassword and while login we use bcrypt.verify
        role:"gendu",
    })

    //redirect to login
    res.redirect("/login");
});



//?LOGIN ROUTE- login has <form action="/login" method="post"></form>
app.get('/login',(req,res)=>{
    res.render("login.ejs")      //rendering the home template
});
//?when clicked on login button this end point should be called
app.post('/login',async (req,res)=>{
    const {username, password} = req.body;
    //!find user in the database
    const userFound = await User.findOne({username:username})
    //check password
    if(userFound && await bcrypt.compare(password, userFound.password)){
        
            //!Create some cookie 
            //*setting the cookie with user data
            res.cookie("userData",JSON.stringify(userFound),{ //userFound contains password so this is not the correct practice so JSON.stringify({username:userFound.username,role:userFound.role})
                maxAge:3*24*60*1000,   //3days expiration  
                httpOnly:true,         //saves from sss attacks
                secure:false,  //in production is should be true
                sameSite:'strict',
            })//this will send the data in the inspect on browser
            //inspect>Application>

            res.redirect('/dashboard') 
    }
    else{
        res.send('Invalid login credential');
    }


    //!Render the user dashboard
    if(userFound){
        res.redirect('/dashboard') //points to the route
    }
    //!else Redirect the user to login page
});

//?DASHBOARD ROUTE contains Hi<%=username%>
app.get('/dashboard',(req,res)=>{
    //!making this endpoint secure if login then only access by grabbing user from the cookie.
    //!if user stored in cookie then only redirect  
    //npm i cookie-parser
    const cookieParser = require("cookie-parser")
    app.use(cookieParser()) // makes easy to take the cookie from client request.
 
    //check the user present in cookie or not
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData):null;
    const userName = userData? userData.username:null
    if(userName){
        res.render('dashboard',{userName})//passing username catched in <%=username%> under dashboard.ejs
    }
    //!else redirect to login
    else{
        res.redirect('/login')
    }
    })
});

//?LOGOUT ROUTE
app.get('/logout',(req,res)=>{
    res.clearCookie('userData')
    res.redirect('/login')
});

//?START THE SERVER
const PORT = process.env.POR||3000;
app.listen(PORT,console.log("started server"));
//now do npm run server






⭐npm i bcryptjs⭐ 
//your username and password stored in database can be hacked
//while register in website we do like this 
const bcrypt = require(bcryptjs)

const salt = await bcrypt.genSalt(10)
const hashpassword = await bcrypt.hash(password,salt)



⭐SESSION BASED AUTHENTICATION⭐improvement to cookie based authentication
1.more secure 
2.when person logsin session id is stored at client and server 
3.client sends session id along with the request 
4.server checks the session data and confirms authentication
session is stored on server and cookie is stored on client(browser) side
5.will use mongodb to store the sessions 
const hashedpassword = await bcrypt.hash(password,10)
if(userFound && bcrypt.compare(password, userFound.password))

⭐npm i express-session
⭐npm i connect-mongo  //?to store the session in database
const session = require("express-session")
const MongoStore = require("connect-mongo")
app.use(session({
    secret:'gsls039434', //to sign the session id
    resave:false,  //session will not resave even if modified
    saveUninitialized:true,
    cookie:{//check the cookie under inspect > application 
        maxAge:60*60*1000,       //storing session in cookie expire 1 hr
    }
    store:MongoStore.create({
        mongoUrl:"paste url here",
    }),
}))
//!now we have created the session now store the user in session so that we can acces user data in any route
req.session.userData ={
    username:userFound.username, //userFound is data from database
    role:userfound.role,
}

if(req.session.userAuth)
req.session.destroy()

//*isAuthenticated middleware
const isAuthenticated = (req,res,next)=>{
 const username = req.session.userData?req.session.userData.username:null;
 if(username){
    return next();
 }
 else{
    res.redirect("/login");
 }
}

//*isAdmin middleware
const isAdmin = (req,res,next)=>{
 const role = req?.session?.userData.role==="admin"//req asel tr session asel tr userData asel tr role check kr admin aahe ka
 if(role){
    return next();
 }
 else{
    res.send("only admin can access");
 }
}


//*DASHBOARD ROUTE 
app.get("/dashboard",isAuthenticated, isAdmin, (req,res)=>{
    const username = req.session.userData?req.session.userData.username:null;
    res.render("dashboard",{username});//no need to check whether username there or not as we used isAuthenticated
  
})
//*LOGOUT ROUTE
app.get("/logout",(req,res)=>{
    res.session.destroy();
    res.redirect("/login")
})






⭐⭐JWT TOKEN BASED AUTHENTICATION⭐⭐
-For implementing authentication like id no need to continuously loggingin
-modern and more secure
-contains (header,payload,signature)
-header- token type, signing algo
-payload - like user 
-signature - ensure message is not changed along the way
-stateless- contains all info

//?cookie are sent to the browser session created,stored by server and send back to browser token is generated by server and give to user the user decide whether to store it on the browser or on the cookie on server

//?we generate the token using userid or username after user login using sign method
npm i jsonwebtoken
npm i cookie-parser
const jwt = require("jsonwebtoken")
app.use(cookieparser()) //browser can pass cookie from browser to server
//generate token
 //token to be stored in localstorage or session
 --under login route 
 app.post("/login",async (req,res)=>{
    const {username, password} = req.body;
    const userFound = await User.findOne({username:username};
    
    if(userFound && bcrypt.compare(password, userFound.password)){
        //!Generate token here sign using username or id 
        const token = jwt.sign({username: userFound.username}, "anykey",{expiresIn:"3d"})
        //  SAVE THE TOKEN INTO COOKIE session
        res.cookie("token",token,{
            maxAge: 3*24*60*60*100,
            httpOnly:true,
        })
        res.redirect("/dashboard");
    }
    else{
        res.send("invalid login");
    });
 });
//!NOW ACCESS THAT IN isAuthenticated middleware to know if user logged in or not
const isAuthenticated = (req,res,next)=>{
    //access the token from req.cookie
    const token = req.cookie?req.cookie.token:null
    if(!token){
        return res.redirect('/login');
    }
    jwt.verify(token,'anykey',(err,decoded)=>{ //decoded is actual usernam
        if(err){
            console.log("token invalid")
        }
        else{
             // ADD USER INTO req object so we can use the data
             req.userData = decoded
             next();
        }
    })
}
//you can use this middleware in admin route and use the req.userData



⭐ERROR HANDLING⭐
1.Syntax error - typo error
2.Runtime error - while program is running divide by 0
3.Logical error - different o/p
4.Compiler error - syntax error 
SOLn - Built-in, middleware, synchronous, Asynchronous error handler 

//!BUILT IN ERROR HANDLER
npm i express 
const express = require("express");
const app = express();
const PORT = process.env.PORT||3000;

//MIDDLEWARE ERROR handler
app.use((req,res,next)=>{ //when any route is hit this middleware function is run
    //!simulate an error 
    const error = true;
    try{
        if(error){
            const err = new Error("user not found");
            next(err)
        }
        next();
    }
    catch(e){
        next(e);
    }
})        
//ROUTE
app.get("/",(req,res)=>{
    res.json({message:"hi"});
})
//START SERVER 
app.listen(PORT,console.log("started server"));


//!ERROR HANDLING MIDDLEWARE - to format the error
//Always write this after the route

app.use((err,req,res,next)=>{ //this err gets data from next(err) of above
    res.status(err.status||500);
    res.json({message:err.mesage,stack:err.stack}) //can see in postman
    //err.stack shows which file error
})

//!SYNCHRONOUS ERROR HANDLING 
synchronous- code that blocks further execution until they are complete


//!ASYNCHRONOUS ERROR HANDLING
npm i axios
const axios = require("axios");

//ROUTE TO FETCH POST
app.get("/post", (req,res,next)=>{
    try{
        const response = axios.get("") //URL of /posts from typicode.com
        res.json(response.data);
    }
    catch(e){
        next(e); //this will go to custom middleware error handler
    }
})
//CUstom error middleware
app.use(err,req,res,next)=>{    //err comes from above next(e)
    if(err.response){
        res.status(err.response.status||500);.json(err.response.data); //as axios we used err.response.status
    }
    else if(err.request){ //what if url passed is incorrect means request
        res.status(503).json({message:"service unavailable"});
    }
    else{
        res.status(500).json({message:"something broke"});
    }
}


//!TO STRUCTURE or maintain code DESIGN PATTERNS ARE USED
⭐MVC⭐   355
sequence is client>controller > model > view > database 
client requrests=>CONTROLLER sends request to =>MODEL sends to databse =>DATABASE sends response to => MODEL sends data to controller for processing ==>CONTROLLER sends to view==>VIEW
-model(manages data like storage)
-view(display data)
-controller(mediator between model and controller)

//*MVC FOLDER STRUCTURE 357
npm i node_modules  //?installs all the required packages
//views folder has all the .ejs files
//Create controllers, model, router(postRouter.js) folder
under postRouter.js
const express= require("express");
const postRouter= express.Router();
postRouter.get()
module.exports = postRouter;
//in server.js
const postRouter = require("./router/postRouter");
app.use("/",postRouter);

//in controller create postController.js
const showPostCreateForm = (req,res)=>{
    res.render("createPost.ejs")
}
module.exports = {showPostCreateForm};
//in postRouter.js in router folder
const showPostCreateForm = require(./router/postController.js)
app.get("/",showPostCreateForm);

//now create model folder and creat post.js file inside this 
const mongoose = require("mongoose");
const postSchema = new mongoose.schema({
    title:string,
})
const Post = postSchema.model("Post", postSchema);
module.exports = Post;
// on controller.js 
const Post = require("../model/post");




⭐UPLOAD VIDEO,image TO CLOUD⭐ 358
cloudinary.com //supports images,pdf,video login freely
// from the site take the following
1. Cloud name, 2. API key, 3. API secret
//cloudinary(to save files to cloudinary)
// multer(to let server access form data)
npm i express cloudinary multer multer-storage-cloudinary  

node --watch server //no need nodemon or to save and restart the server  or node server +  
npm i dotenv

const express= require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const {cloudinaryStorage} = require("multer-storage-cloudinary");
const PORT= 5000;
const app = express();
//create .env file and put the sensitive data like api key
CLOUDINARY_CLOUD_NAME = copy from cloudinary.com dashboard
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET =
MONGODB_URL= 

//?configure cloudinary
cloudinary.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    cloud_name:process.env.CLOUDINAR_CLOUD_NAME,
    api_secret:process.env.CLOUDINARY_API_SECRET,

})    

//?configure multer storage cloudinary
const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    param:{
        folder:'images-folder', //creates folder on cloudinary
        format:async(req,file)=>'png',//converts to png
        public_id:(req,file)=> file.fieldname+"_"+Date.now(),//to delete
        transformation:[{
            width:800,
            height:600,
            crop:'fill',
        }]    
    }    
})    

//?configure multer
const upload = multer({ //?can use this as middleware in any route where wer are uploading hte file
    storage:storage,
    limits:1024*1020*5, //5mb limit
    fileFilter: function(req,file,cb){
        if(file.mimetype.startsWith('image/')){
            cb(null,true);
        }else{
            cb(new Error('not an image', false))
        }    
    }    
})    

//UPLOAD ROUTE
npm i dotenv
require("dotenv").config();
//?STORING the cloudinary url of image from req.file into mongodb
npm i mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:3000/image-upload").then(()=>{
    console.log("connected")
}.catch(e){
    console.log(e);
})
//image schema
const imageSchema = new mongoose.schema({
    url:String,
    public_id:String,
})
//image model
const image = mongoose.model("image",imageSchema);

app.post("/upload",upload.single('file'), async(req,res)=>{
    //?in postman create POST http://localhost:5000/upload
    //?in body select form-data, select file and type file as key and value as any image from computer hit send 
    req.file
    //?storing in database
    const uploaded = await image.create({
        url:req.file.path,
        public_id: req.file.filename,
    })
    res.json({message:"file uploaded",uploaded})
})

//ROUTE TO FETCH ALL THE IMAGES
app.get("/images",async(req,res)=>{
    try{
        const images = image.find();
        res.json({images});
    }catch(e){
        res.json(e);
    }
})


app.listen(PORT, console.log("server running"));



⭐⭐⭐⭐AI TO BUILD THE PROJECTS⭐⭐⭐⭐ see the video great
-cursor.ai, postman for api testing
⭐Prompt  in chat gpt 
//Act as an experienced backedn developer using nodejs/express and mongodb/mongoose and assist me to build a comprehensive API but first provide me all the models needed
-put all models in module.md file in vs code 
//Now to get features : based on these models, provide me the features for this ecommerce api and finally paste all models
-put all features in features.md file in vs code
//Now to get folder structure copy all the features : based on these features provide me the folder and file structure using mvc design pattern and paste features in chatgpt
//chat gpt : combine them in one structure 
⭐Use cursor Ai
-create three files in cursor.ai (models.md,features.md,structure.md) 
-click on cursor > settings>cursor settings > models use claude-sonnet
-click on down arrow in file structure > Extension> tinacious,helium,prettier,code spellchecker, mongodb,
-click on dabba-ardh-bharlela has chat feature

NOW TO BUILD THE FOLDER STRUCTURE click shift+ctrl+i and give prompt - "Your task is todevelop ecommerce api using mongoose and express. These are the models, features and folder structure files @structure.md @models.md, @features.md but first provide the files and folders for this project. make sure to prepare the scripts and place it in a folder calle "script" so that when i run it should generate the files and folders based on @structure.md"
-click on Accept all button
-will give scripts folder and inside setup-project.sh file
-again shift+ctrl+i and write for the script use node therefore the script must have .js extension
-it will now give the "node script/setup-project.js"  finally click AcceptAll button
-now under Scripts folder setup-project.js file created
-now open the terminal and run the code "node script/setup-project.js" it will automatically generate folders and files


⭐Go to mongodb.com > singnin > new project > copy password > create user > choose connection methods > click Drivers > copy the url > Click on Network Access > Add Ip address Allow access from anywhere
⭐paste the url in utils>.env and don't forget to update password
⭐Now run server by node --watch app.js
⭐go to mongoDB extension > AddConnection button > click Connect > paste url with updated password and enter 
⭐now in .env you can update the url to "mongodb://localhost:3000/ecommerce-api"

⭐⭐In postman
-Click on Workspace> Create WorkSpace > next > Name as "Ecommerce-api" > create > Click + to create new collection give name and now we can create the endpoints

-before this we can take all the endpoints so do shift+ctrl+i and give prompt
"create a file called authAPI.md and provide complete endpoints based on @authController.js @authRoutes.js @app.js" enter and then acceptALl

-this will create a file now open the chat right side write "provide me sample json data to use to use in postman for registrating a user"   copy the code 

-Now go to collection and create folder named "auth" inside this create new request
POST and http://localhost:5000/api/v1/auth/register     //baseurl= /api/v1/auth
select the body > raw and json and paste the data and send
now check the data in extension of mongodb

now crete new request for login 
POST and http://localhost:5000/api/v1/auth/login    and send now the user is loggedin and token is generated





⭐⭐⭐⭐⭐⭐⭐⭐REACT JS⭐⭐⭐⭐⭐ ⭐ 
//JS LIBRARY, for building interfaces, no reloading(gmail), (spa)SINGLE PAGE APP means only one html, component based, dynamic content update, reduce server load

⭐Requirement - 
1.NODEJS - as environment       node -v
2.npm - to manage packages      npm -v
3.Create react app - to create react application


/npx create-react-app quizapp --use-npm    
/cd in the project and then npm run start     
/ nodemodule => contains dependencies
/ public folder => contains static files images, css
/ src folder => where source code goes
/ gitignore => files that should not be tracked by git version control
/ package-lock.json => tracks exact npm package version
/ package.json => packages your project depends on
/readme.md => contains info about project

//remove src folder and create new src folder create index.js
//only one index.html and has root element 

in index.js =>  it takes root id from html of publicfolder   422    
//IN SRC FOLDER create index.js inside that
import React form "react"
import ReactDom from "react-dom/client" //allows to put dynamic content into .html
import App from "./App"                     //App.js is component
//component is normal funciton that returns jsx
const root = ReactDom.createRoot(document.getElementById("root")
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
)

//?under App.js  Traditional it's html page but called as react
const App = ()=>{
    return(<h1>this is my first app</h1>); 
}
export default App;


//IN SRC FOLDER create App.js  which is component
component(rafce) => is a funciton where we return html and we do export default component and catch that in index.js as import componentName from "path" and we use in <component/>
const App=()=>{
    return (
        <div><h1>hello {2+2}</h1></div>
    )} 
    

⭐JSX⭐   
 //mixes HTML with js code, simplifies adding html in react 
//IN APP.JS FILE insted of return <h1> hello </h1> we do 
const App = ()=>{
    const element= (
        <div>
            <h1>hello {2+2}</h1>
        </div>
    )
    return element
}
export default App;


⭐CSS IN REACT 4 WAYS ⭐
2) <h2 style={{color:"black", borderRadius:'50%'}}
5) Inline 
const App = ()=>{
    const contStyle = {
        textAlign:"center",
        color:"red",
    }
    return(
        <div style={contStyle}>
            <p>hi vaibhav </p>
        </div>
    )
}
export default App;

6)create folder userprofile.css and write the css 
.cname{
    color:red;
    margin:30px;
}
//!to apply the css in App.js
const App = {
    return(
        <div className ="cname">
        </div>
    )
}
export default App;

//!in App.js 
import './userProfile.css';

7)create folder userprofilemodule.css and write the css 
.cname{
    color:red;
    margin:30px;
}
//!to apply the css in App.js
const App = {
    return(
        <div className = {style.cname}>
        </div>
    )
}
export default App;

//!in App.js 
import style from './userProfilemodule.css';


4) Use REACT BOOTSTRAP, Tailwind css, Material ui, bootstrap,
in Tailwind css (click on get started > copy the script cdn from play CDN button >  paste inside the div of index.html) and now in App.js component we can use the sample code like 
return (
    <h1 className= "text-3xl font-bold">
        Hello
    </h1>
) where we get css for component you just need to get cdn script link and paste it in index.html

8) ReactBootstrap
-npm i bootstrap@5.3.2 
OR
copy the cdn link and paste in index.html under head tag


⭐COMPONENTS⭐ building block of react, reusable in different part of application
-functions that accepts the input called props
1.functional - simple , return jsx
2.class based -extends react.component, manage state  but is depricated

Parent Component pass the props to child components

-Always create component folder under src folder and filename starts with Upper case 

⭐PORPS⭐  
 //arguments passed from parent-component to child-component are for reading purpose only called as uni directional flow
import Childcomponent from "./component/Childcomponent"
const App=()=>{
    return (
        <div>
            <Childcomponent name="vaibhav"                                      
            age=23
            />
            <Childcomponent name="va"                                      
            age=22
            />
        </div>
    )} 
const Childcomponent = (props)=>{  //or ({age})
    return(
        <div>
            <h1>{props.age}  </h1>
        </div>
    )   
}


STATE => //!data that can change over time this is where redux comes in
updated using setState or useState
const [state,setState] = useState(initialState);
//state is current state
//setState is function which updates state with new value
//initialState  is initial value of state
⭐useState⭐  //it's a hook to manage state variable in functional component
//?create Counter.js in component folder
import react,{useState} from "react";
const Counter = (){
    //*initilize the counter state wiht 0
    const [counter,setCounter] = useState(0)
    //Function
    const incrementCounter(){
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>counter: {counter}</h1>
            <button onClick ={incrementCounter}>increment</button>
        </div>
    )
}
//?in App.js
import Counter from "./components/Counter";
const App=()=>{
    return(
        <div>
            <counter/>
        </div>
    )
}



⭐useEffect⭐   //USED FOR SIDE EFFECT     LIKE REQUESTS
//use it for fetching data after component mount   
//to make http request in API (rapid api)
useEffect(()=>{                                             
//has two things 1.callfunction 2.dependencies
    //sideeffect logic
    return()=>{

    }
},[dependencies])                                           
//dependencies mhnje component la render whayla sangto ani jevha fetch hoil data tevha dependencies madhle variable takayla sangto tya madhe- j apan useState madhe j variable dila t dyach

go to jsonplaceholder website inside scroll to post and copy url 
now create post component
import{useEffect,useState} from "react";
import axios from "axios";
const url = "paste the url of jsonplaceholder posts data"
//post.js is component that goes in App.js
const Post = ()=>{                          //component 
    //?useState
    const[post,setPost] = useState([])
    //?useEffect
    useEffect(()=>{
        //sideeffect LOGIC          //npm i axios    
        axios.get(url)
        .then((post)=>{setPost(post.data)}
        .catch(e)=>{console.log(e)})
    },[])

    return (
        <div>
            <div>
                {posts.map((post)=>{   //as post is array
                    return(
                        <div>
                            <h2>{post.title}</h2>
                            <h2>{post.body}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//!CRETE HTTP folder in component folder and crete httprequrest.js file
⭐useEffect HTTP request⭐        
 //we can use fetch OR axios which are client to make http request
//!inside httprequest.js 
import react,{useEffect,useState} from "react"
const httprequest = ()=>{
    const APIurl = "https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
        //HTTP REQUEST SIDE EFFECT CODE HERE
        fetch(APIurl).then((data)=>data.json().then((post)=>{console.log(post)}).catch((e)=>{console.log(e)}))
    },[])                   //dependencies
    
    return(
        <div>
            <h1>HTTP REQUREST</h1>
        </div>
    )
}


437
⭐FORM-HANDLING IN REACT⭐ //Always controlled component(mens form bhartana backend update vhav)
//component folder madhe register.js navach component banav in that 
import {useState, useEffect} from "react"

const Register=()=>{
    //give initial value for each form input
    const[formData,setFormData] = useState({
        fullname:"",
        email:"",
        password:"",
    });

    //onchange   //you won't be able to type in input field so create onchange
    const onChangeHandler = (e)=>{
        setFormData({
            [e.target.name] : e.target.value,      //to set that 
        })
    }                       

    //SUBMIT HANDLER
    const onFormSubmit = (e)=>{
        e.preventDefault()              
        //refresh thambavta ani input kelela values tasach ast udat nahi
        console.log(formData)
    }
    return (
        <div>
            <h2>RegisterForm</h2>
            <form onSubmit={onFormSubmit}> 
                <div>
                    <input name ="fullname" type="text" placeholder="Full name" value="{formData.fullname}" onChange={onChangeHandler}/>                 //you won't be able to type in input field so create onchange
                </div>
                <div>
                    <input name ="email" type="email" placeholder="email" value="{formData.email}" onChange={onChangeHandler}/>
                </div>
                <div>
                    <input name ="password" type="password" placeholder="password" value="{formData.password}" onChange={onChangeHandler}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>)}






⭐FULL STACK APP⭐
MERN 
MEVN 
MEAN    => MongoStore,express,vue,node
LAMP    => linux,apache,mysql,php


⭐BLOG PROJECT⭐
//!mongodb=>createproject=>Free=>Ip(0.0.0.0)=>createkr=>connect vr click karun connection string
//*connection string= "mongodb+srv://vaithon:Vaibhav@123@blogproject.sntxgej.mongodb.net/fullstack-blog?retryWrites=true&w=majority                    //? ch adhi database ch naav aahe 
//ani connection string should be stored in .env file

//!while working with api you do res.json


⭐Portfolio⭐
//!CSS  FOR SEAMLESS TRANSITION
transition: all 0.3s ease-in-out;
yarn add react-typical

<h2>
    I'm a {""}
    <Typical
    steps={[
        " MERN Stack Developer 🚀",
        1000,
        "Frontend Developer ✅",
        1000,
        "Backend Developer 🏆",
        1000,
        "React Developer ⚛️",
        1000,
    ]}
    loop={Infinity}
    wrapper="b"
    />
</h2>



⭐CONTEXT API⭐
//Instead of prop drilling use Context Api 
// CREATE context folder and inside UserAuthContext.js file in src.
//createContext creates the object allows to share data across the component
//useContext is a hook allows us to access the data created using createContext
import react, {createContext, useContext useState} from "react"        
//useState bcoz we are drilling state
export const UserAuthContext = createContext()//creating and exporting instance of createContext
export const UserAuthProvider = ({children})=>{//children is the component
    const[user,setUser] = useState({
        name:"vai",
        email:"vaibhavparsewar.scoe.it@gmail.com"
    })
    return(
        <UserAuthContext.Provider value={user}>
            {children} //children is component that wanted to acces the user data
        </UserAuthContext.Provider>
    )}

//!NOW WE HAVE TO USE THIS IN COMPONENT SO IN APP.JS
import {UserAuthProvider} from "./Context/UserAuthContext"

const App =()=>{
    return(
        <UserAuthProvider>
            <componentA />                  //NOW YOU CAN USE UserAuthContext everything into componentA
        </UserAuthProvider>
    )}
//!NOW IN componentA.js file
import react, {useContext} from "react"                     //HOOK
import {UserAuthContext} from "./context/UserAuthContext"

const componentA = ()=>{
    const user = useContext(UserAuthContext)
    return(
        <div>
            <h1>Name:{user.name}</h1>
        </div>
    )}
//!in app.js you are using <UserAuthProvider> insted use it in index.js
return(
    <userAuthProvider>
        <app />
    </userAuthProvider>
)


⭐useReducer⭐ //same as useState
//reducer is function that takes initialState like count and action like increment or decrement
import {useReducer} from "react"

export const TodoContext = createContext()

//initial state
const initial_State= {count:0,}  //OBJECT
//reducer function to be passed in useReducer
const reducer= (state,action)=>{ //state is data like count action has type like increment or decrement
    if(action.type === "INCREMENT"){
        return{...state, count:state.count+1};
    }
    else if (action.type === "DECREMENT"){
        return(...state, count:state.count-1);
    }
    else{
        return state;  //return original state
    }
}

const Counter = ()=>{
    const [state,dispatch] = useReducer(reducer, initialState); //to dispatch action

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({"INCREMENT"})}>-</button>
        </div>
    )
}




⭐useReducer AND contextAPI combining⭐
//means we gonna make the initial state and the reducer function global so each commponent can use it
import {useReducer, createContext, useContext} from "react"

export const TodoContext = createContext()

//initial state
const initial_State= {count:0,}  

const reducer= (state,action)=>{ 
    if(action.type === "INCREMENT"){
        return{...state, count:state.count+1};
    }
    else if (action.type === "DECREMENT"){
        return(...state, count:state.count-1);
    }
    else{
        return state; 
    }
}

//configure the context
const CounterContext = createContext();

const CounterProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer, initialState);//made it global
    return(
        <CounterContext.Provider value={{state,dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

const Counter = ()=>{
    const {state, dispatch}= useContext(CounterContext);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({"INCREMENT"})}>-</button>
        </div>
    )
}

//To able to access we have to wrap the provider with counter component
const App = ()=>{
    return(
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )
}





⭐React Router Dom⭐   //for navigation  npm install react-router-dom
//Create the component folder and create post.js, user.js and navbar.js
//and entry point will be the index.js under src
//in App.js do this

import {
    BrowserRouter as Router,
    Routes,
    Route
} from react-router-dom

//TO USE IT IN APP.js FIrst of all all content should be wrapped in <BrowserRouter></BrowserRouter> and then inside this use this
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Navbar from "./component/Navbar";

const App=()=>{
    <BrowserRouter>
        <Navbar/>    //as we need this on each page

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path = '/posts/:postId' element = {<PostsDetails/>}/>
            //! if there is no route then
            <Route path="*" element={<h1 style={{textAlign:center}}>404. Not Found</h1>} /></h1>
        </Routes>
    </BrowserRouter>

}

//In navbar.js
import React from "react";
import {Link} from "react-router-dom";
const navbar = ()=>{
    return(
        <nav>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
//In post.js
const Posts = ()=>{
    return (
        {posts.map((post)=>{
            <Link to="/posts/${post.id}">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </Link>
        })}
    )
}


//in PostDetails.js use this
import {useParams} from "react-router-dom"
const PostDetails = ()=>{
    const postId = useParams().postId;   
    const post = posts.find(post)=> post.id === parseInt(postId));
    return(
        <div>
            <h1>{postId}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </div>
    )              
    //apan j link madhe deto n  localhost://product/:id  he id acquire karte
}


⭐⭐⭐⭐REACT REDUX AND REACT QUERY ⭐⭐⭐⭐
//!REDUX = to manage the state of app in single central location, middleware support, immutable state, 

//!REDUX TOOLKIT = designed to simplify redux task, like reduced the boilerplate code, simplifies store setup, handling async logic, immutability made easy


Redux Store
|
React App    <->   Redux  <->   Nodejs


-react app makes the async request this request is sent to the Redux and redux sends to nodejs node js sends the response and redux sends the data response to app and it is stored in Redux Store 
-so redux provides the processing of async request and  manage global storage in redux store
-We use react query to cut down the more line of code


⭐React Query⭐
-library for fetching, caching , synchronizing and updating server state

App   <->   React Query  <->   API 
app requests data to react query, react query tells fetch data to API or server, API returns data react query update the state with data in App


⭐REACTQUERY VS REDUX⭐
-we will use react query to handle async request from app to server 
-we will use redux to handle the global state

⭐️Redux store
store is js object holding the state, only one store exists for all the states
⭐️Action
-using dispatch() we send the data from application to store
when user wants to login the action is called as loggingin, so we will get data and this data is payload this payload is sent to the store using reducer
⭐️STATE 
-curernt data in the application
⭐️REDUCERS 
-takes current state and action to produce new state means changes state based on action
-------------------------------APIS-----------------------------------------⭐️ConfigureStore 
//-simplifies redux store setup
⭐️useSelector
//hook to access the state in redux store 
⭐️CreateSlice 
//function which simplifies the creation of reducer logic.
//automatically generates action creators and action types based on reducer
⭐️Dispatch 
//function to send action to redux store to change the state

⭐️under src create redux folder and inside create store and slice folder
store is redux store and slice are the feature in application

505
//! create frontend folder
1.vite.com > getstarted > npm create vite@latest //to create the react app using vite and when using vite the component should be end with .jsx extension
//?Always routing done in App.jsx
2.Redux-toolkit.com > get started > npm i @reduxjs/toolkit 
npm i react-redux
3. React-icon.com > npm istall react-icons --save
4 Formik.com to handle form > npm i formik --save
5.Yup package = we can implement validation on form  npm i yup
6.TailWindcss >  framework guides > Vite 
    npm i -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    //FOLLOW THE STEPS
7.TranStack.com > read the doc > Installation > npm i react-query
    click on quickstart > devtools >
    finally install axios npm i axios
    finally install dom   npm i react-router-dom


//*Create redux folder inside create slice folder and store folder inside  slice create authSlice.js file and inside store folder create store.js file
//*In authSlice.js        //slice is feature of the react application
import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    //!initial state
    name: 'auth',             //to identify the slice
    initialState:{
        user:null,
    }
    //!reducers
    reducers:{
        //!login
        loginAction: (state,action)=>{   //store is data from store
            state.user = action.payload; //after login token is payload
        },  
        //!logout
        logoutAction: (state,action){
            state.user = null;
        },
    },
})
//!Generate the actions
export const {loginAction, logoutAction} = authSlice.actions;
//!Generate the reducers
const authReducer = authSlice.reducer;
export default authReducer

//*TO USE ABOVE AUTHREDUCER
go in store.js 
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from '../slices/authSlice';

const store = configureStore({
    reducer:{
        auth:authReducer;
    }
})
export default store;

//*Now in main.jsx 
import react from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store/store.js'
import {provider} from "react-redux";

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>  //?wrapped in store
            <App/>
        </Provider>
    </React.StrictMode>
)
//?download the redux dev tools extension helps to see the flow of data

//Now we done with redux 
//!now we want to get reactquery to make async request download from tanstack and install both reactquery and dev tools using npm

//*Now in main.jsx 
import react from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store/store.js'
import {provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
//to configure dev tool
import {ReactQueryDevtools} from '@tanstack/react-query-devtool';

//!create instanc e of react query
const queryClient = new QueryClient();
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>  //?wrapped in store
            <QueryClientProvider client ={ queryCilent}>
                <App/>
                <ReactQueryDevtools initialIsOpen ={false} />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
)
508,509
//*REACT QUERY - WE NEED only 2 apis 
//react query used to make asyn request and after getting data we dispatch the action to store in redux store
//Query is nothing but getting something from server we use "useQuery" hook to fetch or get data from server 
//"useMutation" hook to deal with post,put,delete 

//Now we have to use for login.jsx and method is post so use mutation
//?in src add the services folder and create userService.js in it
//?in login.jsx
const login = (){
    //!Mutation
    const mutation = useMutation({
        mutationFn: loginAPI    //from userService.js
        mutationKey: ['login']
    });
    const formik = useFormik({
        initialValuse:{
            email:"thomas@gmail.com",
            password:"12345",
        },
        validationsSchema,
        onSubmit:(values)=>{
            //Implement of form submission
            mutation.mutate(values);
        }
    })
}

//?in userService.js
import axios from 'axios';
export const loginAPI = async (userData)=>{
    const response = await axios.post('http://localhost:8000/api/users/login',{
        email:userData.email,
        password:userData.password,
    })
    //return a promise
    return response.data;
}




//!AS SOON AS USER LOGSIN STORE IT IN LOCAL STORAGE AND THEN  PULL USER FROM LOCAL STORAGE AND PUT IN INITIAL STATE
localStorage.setItem("userInfo", JSON.stringify(data));
user: localStorage.getItem("userInfo");





















⭐⭐⭐⭐SOCKET 
1.WebSockets= full duplex commun protocol
2.WebRTC = peer to peer Audio,video communication 
3.Push Notification = data from server client browser



















































//!NO RELOAD OF PAGE
import {Link} from "react-router-dom"
//a should be replaced with Link and href should be replaced with to

⭐PROTECTING A ROUTE⭐
//In Authentication component 
const Authentication = ({children})=>{         
     //children is the component that we are going to give in app.js

    const isLogin = false;
    if(isLogin){return <h>Access Denied</h1>}
    else{
        return(<children/>)
    }}

//In app.js
//import Authentication 
<Routes>
    <Route path='/admin' element={
        <Authentication>
            <admin/>                       
        ////passing admin component to Authentication as children
        </Authentication>
    }/>
</Routes>
















































⭐Paisa⭐
npm i express@4.18.1 
npm i mongoose@6.5.3 
npm i bcryptjs@2.4.3
npm i jsonwebtoken@8.5.1
npm i cookie-parser

//!inside config file create dbConnect.js file where we are connecting app to database
//!call it in server.js to call funciton  require("./config/dbConnect")
//!now extension mongodb and paste connection string and click on connect

//!we have three models (user,accounts,transaction) how they are related it is very imp
const User = mongoose.model("User",userSchema)      //creating model of userSchema and "User" is colleciton name

//! middleware folder madhe globalErrorHandler.js ahe
//!.utils madhe appErr.js banavla karan dr veles aplyala new Error("") jamat nahi tr apan class banavta appError from error
class AppErr extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.status = "failed";
    }}
  const appErr = (message, statusCode) => {             //insted of class we can use function
    let error = new Error(message);
    error.statusCode = statusCode;
    return error;
  };
  
  module.exports = {                    //means you can use class as well as function
    AppErr,
    appErr,
  };
  

//!generateToken(id)                //in utils folder
npm i jsonwebtoken
npm i cookie-parser


⭐FRONT-END⭐
⭐Tailwind css
//!create react app named client
//!tialwind css -> docs -> Framework guide ->create-react-app -> copy second code and paste in terminal in client
npm install -D tailwindcss npx
npx tailwindcss init
//now you will have tailwind.config.js file now replace the inner code with online(tailwind css website) code
//now in our index.css remove everything and include that online(tailwind css website code) 
//install tailwind css plugin
//!go to react router dom website -> i am new ->
npm install react-router-dom@6
//!additional dependencies
npm install @heroicons/react
npm i axios
//!we placed navbar component outside the Routes because we want this everywhere
//!install peacock to change the color of dashboard in vs code -> go to view->command pallet ->search peacock

npm i cors          //in server.js file app.use(cors())   we use it when we are sending data from frontend server to backend server as boths port are different and for security purpose it is requrie

//!REDIRECT
window.location.href = "/dashboard"