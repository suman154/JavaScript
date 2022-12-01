

// JavaScript Objects


// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// Note: If you are familiar with other programming languages, JavaScript objects are a bit different. 
// You do not need to create classes in order to create objects.

// Here is an example of a JavaScript object.

// // object


// const student = {
//     firstName: 'ram',
//     class: 10
// };

// Here, student is an object that stores values such as strings and numbers.

// JavaScript Object Declaration


// The syntax to declare an object is:

// const object_name = {
//    key1: value1,
//    key2: value2
// }


// Here, an object object_name is defined. Each member of an object is a 
// key: value pair separated by commas and enclosed in curly braces {}.

// For example,

// object creation


// const person = { 
//     name: 'John',
//     age: 20
// };


// console.log(typeof person); // object

// You can also define an object in a single line.

// const person = { name: 'John', age: 20 };


// In the above example, name and age are keys, and John and 20 are values respectively.


// JavaScript Object Properties

// In JavaScript, "key: value" pairs are called properties. For example,

// let person = { 
//     name: 'John',
//     age: 20
// };


// Here, name: 'John' and age: 20 are properties.

// Example of JavaScript object properties

// JavaScript object properties

// Accessing Object Properties

// You can access the value of a property by using its key.



// 1. Using dot Notation

// Here's the syntax of the dot notation.

// objectName.key

// For example,

// const person = { 
//     name: 'John', 
//     age: 20, 
// };

// accessing property

// console.log(person.name); // John




// 2. Using bracket Notation

// Here is the syntax of the bracket notation.

// objectName["propertyName"]

// For example,

// const person = { 
//     name: 'John', 
//     age: 20, 
// };

// // accessing property
// console.log(person["name"]); // John




// JavaScript Nested Objects

// An object can also contain another object. For example,

// // nested object
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// accessing property of student object
//console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
// console.log(student.marks.science); // 70

// In the above example, an object student contains an object value in the marks property.




// JavaScript Object Methods

// In JavaScript, an object can also contain a function. For example,

// const person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function() { console.log('hello') }
// }

// person.greet(); // hello
// Here, a function is used as a value for the greet key. 
// That's why we need to use person.greet() instead of person.greet to call the function inside the object.



// JavaScript Objects

// A javaScript object is an entity having state and behavior (properties and method).
//  For example: car, pen, bike, chair, glass, keyboard, monitor etc.

// JavaScript is an object-based language.
//  Everything is an object in JavaScript.

// JavaScript is template based not class based.
//  Here, we don't create class to get the object. But, we direct create objects.


// Creating Objects in JavaScript

// There are 3 ways to create objects.



// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword)


// 1) JavaScript Object by object literal


// The syntax of creating object using object literal is given below:

// object={
//     property1:value1,
//     property2:value2
//     .....propertyN:valueN}  

// As you can see, property and value is separated by : (colon).

// Let’s see the simple example of creating object in JavaScript.


// let emp={
//     id:102,
//     name:"Shyam Kumar",
//     salary:40000}  

// document.write(emp.id+" "+emp.name+" "+emp.salary);  



 
// 2) By creating instance of Object

// The syntax of creating object directly is given below:


// var objectname=new Object(); 


// Here, new keyword is used to create object.

// Let’s see the example of creating object directly.


// var emp=new Object();  
// emp.id=101;  
// emp.name="Ravi Malik";  
// emp.salary=50000;  
// document.write(emp.id+" "+emp.name+" "+emp.salary);  




// 3) By using an Object constructor



// =============================
// What is a Constructor in JavaScript?

// A constructor is a special function that creates and initializes an object instance of a class. 
// In JavaScript, a constructor gets called when an object is created using the new keyword.

// The purpose of a constructor is to create a new object and set values for any existing object properties.

 

// What Happens When A Constructor Gets Called?

// When a constructor gets invoked in JavaScript, the following sequence of operations take place:

// A new empty object gets created.
// The this keyword begins to refer to the new object and it becomes the current instance object.
// The new object is then returned as the return value of the constructor.
 

// JavaScript Constructor Examples

// Here’s a few examples of constructors in JavaScript:

// Using the "this" Keyword
// When the this keyword is used in a constructor, it refers to the newly created object:

// //Constructor
// function User() {
//     this.name = 'Bob';
// }

// var user = new User();
 

// Create Multiple Objects
// In JavaScript, multiple objects can be created in a constructor:

// //Constructor
// function User() {
// this.name = 'Bob';
// }

// var user1 = new User();
// var user2 = new User();
// In the above example, two objects are created using the same constructor.

 

// Constructor with Parameters
// A constructor can also have parameters:

// //Constructor
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }

// var user1 = new User('Bob', 25);
// var user2 = new User('Alice', 27);
// In the above example, arguments are passed to the constructor during object creation. This allows each object to have different property values.

 

// ==========================

// Here, you need to create function with arguments. 
// Each argument value can be assigned in the current object by using this keyword.


// The this keyword refers to the current object.

// The example of creating object by object constructor is given below.

 
// function emp(id,name,salary)
// {  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
// }  

// let e=new emp(103,"Vimal Jaiswal",30000);  
  
// document.write(e.id+" "+e.name+" "+e.salary);  




// Defining method in JavaScript Object

// We can define method in JavaScript object.
//  But before defining method, we need to add property in the function with same name as method.

// The example of defining method in object is given below.


// function emp(id,name,salary)
// {  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  

//     function changeSalary(otherSalary)
//     {  
//         this.salary=otherSalary;  
//     }
//     this.changeSalary=changeSalary;  
      
// }  


// let e=new emp(103,"Sonoo Jaiswal",30000); 


// document.write(e.id+" "+e.name+" "+e.salary);  

// e.changeSalary(45000);  

// document.write("<br>"+e.id+" "+e.name+" "+e.salary);  




// =====================================================

// function student(FirstName, LastName, Age)
// {
//     this.FirstName = FirstName;
//     this.LastName = LastName;
//     this.Age = Age;

//     function getAddress()
//     {
//         return "Kathmandu"
//     }

//     this.getAddress = getAddress;

//     function changeAge(newAge)
//     {
//         this.Age = newAge
//     }

//     this.changeAge = changeAge;


//     this.displayData = function()
//     {
//         document.write("FirstName : " + this.FirstName + "<br>")
//         document.write("LastName : " + this.LastName + "<br>")
//         document.write("Age : " + this.Age + "<br>")
     
//     }
// }


// let student1 = new student("ram", "shrestha", 24)

// document.write(student1.FirstName+ " " + student1.LastName+ " " + student1.Age + " " + student1.getAddress() + "<br>")

// student1.displayData();



// let student2 = new student("shushana", "shrestha", 17)
// document.write(student2.FirstName+ " " + student2.LastName+ " " + student2.Age + " " + student2.getAddress()+  "<br>")

// student2.changeAge(40) // change the age 

// document.write(student2.FirstName+ " " + student2.LastName+ " " + student2.Age + " " + student2.getAddress()+  "<br>")



// =================================================

// let emp = new Object()

// emp.name = "ram"

// emp.getAge = function()
//             {
//                 return " 24"
//             }


// document.write(emp.name)

// document.write(emp.getAge())



// ======================================

// let x = new Number(20)
// document.write(typeof x + "<br>")
// document.write(x)



// let y = new String("hello")
// document.write(typeof y + "<br>")
// document.write(y)


// let y = new Array()
// y = [1,2,3]
// document.write(typeof y + "<br>")
// document.write(y)



// let y = new Array(5) // giving size of array
// y = [1,2,3,4,5]
// document.write(typeof y + "<br>")
// document.write(y)


//  let i = new Image()
// i.setAttribute("alt", "hello")
// document.body.appendChild(i)







// ==========================M!2 ===============================

// in js we can create object using 

// 1 using the object literal

// 2 using the new keyword or operator

// 3 using the object constructor




// 1 object liters


// let student = {
//     name: "ram",
//     age: 34,
//     get_address: function()
//     {
//         return "lathamdnu"
//     } 
// }

// document.write(student.name + " " + student.age + "<br>")
// student.name = "hari"
// document.write(student.name + " " + student.age + "<br>")
// document.write(student.get_address())


// 2 using the new operator or keywod




// let student = new Object()

// student.name = "ram"

// student.age =35

// student.get_address = function()
// {
//     return "kathmandu"
// }

//  document.write(student.name + " " + student.age + "<br>")

//  document.write(student.get_address())






// 3 using object constroctor

// object based or prototype based 

// not object oreanted

function student(name, age, address)
{
    this.name =name;
    this.age = age;
    this.address = address;

    function get_college( college_name)
    {
        
        return college_name
    }
    this.get_college = get_college;
}


let std1 = new student("ram", 24, "kathmandu")
document.write(std1.name + " "+ std1.age + " " + std1.address +"<br>")
// std1.age = 50
// document.write(std1.name + " "+ std1.age + " " + std1.address +"<br>")
document.write(std1.get_college("kmc") + "<br>")




// let std1 = {

//     name:"ram",
//     age:24,
//     address:"kathmandu",
//     get_college : function()
//     {
//         return "NIST"
//     }
// }


let std2 = new student("hari", 45, "prk")
document.write(std2.name + " "+ std2.age + " " + std2.address)
document.write(std2.get_college("nist") + "<br>")








// let std1 ={
//     name: "ram",
//     age: 24,
//     address: "kathmandu"
// }



// let std2 ={
//     name:"hari",
//     age=45,
//     address:"prk"
// }

























