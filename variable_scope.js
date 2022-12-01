


// Variable



// Variable is a name of memory block which store certain value
// Variables are used to store data, like string of text, numbers, etc
// You can create a variable with the var and let and const  keyword, whereas the assignment operator (=) 
// is used to assign value to a variable, like this: var varName = value;









// Naming Conventions for JavaScript Variables


// A variable name must start with a letter, underscore (_), or dollar sign ($).
// A variable name cannot start with a number.
// A variable name can only contain alpha-numeric characters (A-z, 0-9) and doller, underscores.
// A variable name cannot contain spaces.
// A variable name cannot be a JavaScript keyword or a JavaScript reserved word.

// let  first_name
// let  $myname







// // Declaring multiple Variables

// var name = "Peter Parker", age = 21, isMarried = false;





// TYPES OF VARIABLE
    // scope of variable

// 1 LOCAL variable
    // Variable declare inside the function 
    // local variable cannot be accessed from outside of function.

// 2 Global variable
    // Variable declare outside the function or at global level
    // Any function or every where we can acccess this global variable




    // function calculate()
    // {
    //     let a= 20;
    //     let b = 30;
    //     let sum = 20+30;

    //     document.write(`The sum of ${a} and ${b} is ${sum}`)
    // }


    // calculate()

    // document.write(`the a is ${a}`)


    // function calculate(a,b)
    // {
    //     let sum = a+b;
    //     document.write(`The sum of ${a} and ${b} is ${sum}`)
     
    // }

    // calculate(20,30)

    // document.write(`The sum of ${a} and ${b} is ${sum}`)

    


    // let a= 20;



    // //document.write(a)

    // function calculate()
    // {
    //     let b= 40;
    //     let sum = a+b
    //     document.write(sum)
    // }


    // calculate()

    // document.write("<br>")

    // function multipy()
    // {
    //     let mul = a*a;
    //     document.write(mul)
    // }


    // multipy()









// Different betwwen var let and const


// ES6 befor 2015 - var
// 2015 ES6 let const




// var first_name = "ram";


//document.write(first_name)



// 100 lines of code



// var first_name = "hari";
// document.write(first_name)



// let first_name = "ram";
// document.write(first_name)



// let first_name = "hari";
// document.write(first_name)




// var  yo chai function scope
// let and const yo chai block scope  {}



// function calculate()
// {
//     let a= 20;
//     var b= 30;
//     let sum = a+b;
//     document.write(sum)

//     if(10>5)
//     {
//         document.write(a)
//         let c= 100;
//     }

//     document.write("this is c"+ c)
// }

// calculate()
// document.write(a)



// for{



// }

// if()

// {



// }
// while{


// }




// function()
// {




// }
















// local variable example 1

    // function demo()
    // {
    //     let a=10; // this is local variable
    //     let b=20; // this is local variable
    //     let sum = a+b;  // this is local variable

    //     document.write(sum)
    // }

    // demo(); // calling fn
    // document.write(sum); // trying to access the local variable outside fn



// local variable example 2

    // function calculate(a,b,c)  // this a,b,c is also called local variable
    // {
    //     let sum = a+b+c;
    //     document.write(sum)
    // }
    // calculate(10,20,30);

    // document.write(a,b,c);// Trying to access local variable




// Global variable example



    // let a=100;  //  this is global variable
    // let b=200;  // this is global variable

    // function add()
    // {
    //     let sum = a+b;  // accessing global variable inside fn
    //     document.write(sum);
    // }

    // add();  // fn call

    // document.write('<br>')

    // function sub()
    // {
    //     let sub = b-a;   // accessing global variable inside fn
    //     document.write(sub);
    // }

    // sub();  // fn call

    // document.write('<br>')

    // let mul = a*b;  // accessing global variable outside fn 

    // document.write(mul);






    // DIfference between var , let and const

// NOTE --> while learning diff between var, let and const dont mix 
// the concept of local  and global variable 


// BEfore ES6 there is only one way of declaring js variable using
// Keyword var

// After ES6 They have added two new way of declaring a js variable using
// Keyword let and const



//  var keyword => 

    //  var keyword scope is of function level or
    //  it is of function scope ==> function functionname{}

    // once you declare a variable using var keyword again you can redeclare a same 
    // Variable using var keyword --> no error

//  let keyword

    //  let keyword is of block scope ==> {}
    // once you declare a variable using let keyword again you cannot redeclare a same 
    // Variable using let keyword --> gives error


//  const keyword
    //  everything is same as let
    // it is used to declare constant value and it cannot be reinitialized
    //  const variable must always initialize at the time of declaration only

   

    
    
    // function calculate()
    // {
    //     // for(var i =0 ; i==0; i++)
    //     // {
    //     //     var a = 100; // var declare this is of fn scope
    //     //     let b = 200; // let declare this is of block scope
    //     //     //document.write(i);
    //     //     document.write(a);
    //     //     document.write('<br>');
    //     //     document.write(b);
    //     //     document.write('<br>');
    //     // }
    //     //     // document.write(i)
    //     //     // document.write('<br>');
    //     //     document.write(a);
    //     //     document.write('<br>');
    //     //    // document.write(b);
    //     //     document.write('<br>');
    //     if(10<20)
    //     {
    //         var var_greater = 20;  // var declare this is of fn scope
    //         let  let_greater = 20; // let declare this is of block scope
    //     }
    //     //document.write(var_greater);
    //     document.write(let_greater);
    
    // }

    // calculate()




    // var a= 20;
    // var a = 30;
    // document.write(a)
    // document.write('<br>')


    // let b= 20;
    // let b = 30;
    // document.write(b)
    // document.write('<br>')


    // var c = 10;
    // let c= 20;
    // document.write(c)
    // document.write('<br>')


    // let d = 10;
    // var d= 20;
    // document.write(d)
    // document.write('<br>')


    // const a= 10;
    // const a= 20;
    // document.write(a)

    // const a = "hello";
    // document.write(a)

    // const b ;
    // b= "hello"

    // document.write(a)// give error











    




    // VAriable Hosting in js

    // console.log(a) // print undefined
    // console.log(b) // error
    // console.log(c)// error

    // var a;
    // let b;
    // const c;
































//  DIFFREENCE BETWEEN VAR LET CONST


// Var, Let, and Const 

// A lot of shiny new features came out with ES2015 (ES6). And now, since it's 2020, 
// it's assumed that a lot of JavaScript developers have become familiar with and have 
// started using these features.

// While this assumption might be partially true, 
// it's still possible that some of these features remain a mystery to some devs.

// One of the features that came with ES6 is the addition of 
// let and const, which can be used for variable declaration. 
// The question is, what makes them different from good ol' 
// var which we've been using? If you are still not clear about this, 
// then this article is for you.

// In this article, we'll discuss var, let and const  with respect to their scope, use, and hoisting. 
// As you read, take note of the differences between them 


// Var
// Before the advent of ES6, var declarations ruled. 
// There are issues associated with variables declared with var, though. 
// That is why it was necessary for new ways to declare variables to emerge. 
// First, let's get to understand var more before we discuss those issues.


// Scope of var

// Scope essentially means where these variables are available for use. 
// var declarations are globally scoped or function/locally scoped.

// The scope is global when a var variable is declared outside a function. 
// This means that any variable that is declared with var outside a function 
// block is available for use in the whole window.

// var is function scoped when it is declared within a function. 
// This means that it is available and can be accessed only within that function.


// To understand further, look at the example below.

//     var greeter = "hey hi";
    
//     function newFunction() 
//     {
//         var hello = "hello";
//     }

// Here, greeter is globally scoped because it exists outside 
// a function while hello is function scoped. So we cannot access 
// the variable hello outside of a function. So if we do this:

//     var tester = "hey hi";
    
//     function newFunction() 
//     {
//         var hello = "hello";
//     }
//     console.log(hello); // error: hello is not defined


// We'll get an error which is as a result of hello not being available outside the function.

// var variables can be re-declared and updated

// This means that we can do this within the same scope and won't get an error.

//     var greeter = "hey hi";
//     var greeter = "say Hello instead";

// and this also

//     var greeter = "hey hi";
//     greeter = "say Hello instead";


// Hoisting of var

// Hoisting is a JavaScript mechanism where variables and function declarations 
// are moved to the top of their scope before code execution. This means that if we do this:

//     console.log (greeter);
//     var greeter = "say hello"

// it is interpreted as this:

//     var greeter;
//     console.log(greeter); // greeter is undefined
//     greeter = "say hello"

// So var variables are hoisted to the top of their scope and initialized with a value of undefined.

// Problem with var

// There's a weakness that comes with  var. 

//     var greeter = "hey hi";
//     var times = 4;

//     if (times > 3) {
//         var greeter = "say Hello instead"; 
//     }
    
//     console.log(greeter) // "say Hello instead"

// So, since times > 3 returns true, greeter is redefined  to "say Hello instead". 
// While this is not a problem if you knowingly want greeter to be redefined, 
// it becomes a problem when you do not realize that a variable greeter has already been defined before.


// If you have used greeter in other parts of your code, you might be surprised at the output you might get. 
// This will likely cause a lot of bugs in your code. This is why let and const are necessary.



// Let

// let is now preferred for variable declaration. 
// It's no surprise as it comes as an improvement to var declarations. 
// It also solves the problem with var that we just covered. Let's consider why this is so.


// let is block scoped

// A block is a chunk of code bounded by {}. 
// A block lives in curly braces. Anything within curly braces is a block.

// So a variable declared in a block with let  is only available for use within that block. 
// Let me explain this with an example:

//    let greeting = "say Hi";
//    let times = 4;

//    if (times > 3) 
//    {
//         let hello = "say Hello instead";
//         console.log(hello);// "say Hello instead"
//     }

//    console.log(hello) // hello is not defined


// We see that using hello outside its block (the curly braces where it was defined) returns an error. 
// This is because let variables are block scoped .

// let can be updated but not re-declared.

// Just like var,  a variable declared with let can be updated within its scope. 
// Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

//     let greeting = "say Hi";
//     greeting = "say Hello instead";

// this will return an error:

//     let greeting = "say Hi";
//     let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// However, if the same variable is defined in different scopes, there will be no error:

//     let greeting = "say Hi";
//     if (true) 
//     {
//         let greeting = "say Hello instead";
//         console.log(greeting); // "say Hello instead"
//     }
//     console.log(greeting); // "say Hi"

// Why is there no error? This is because both instances are treated as different 
// variables since they have different scopes.

// This fact makes let a better choice than var. When using let, you don't have to bother 
// if you have used a name for a variable before as a variable exists only within its scope.

// Also, since a variable cannot be declared more than once within a scope, 
// then the problem discussed earlier that occurs with var does not happen.


// Hoisting of let

// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, 
// the let keyword is not initialized. So if you try to use a let variable before declaration, 
// you'll get a Reference Error.

// Const
// Variables declared with the const maintain constant values. const declarations 
// share some similarities with let declarations.

// const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.

// const cannot be updated or re-declared
// This means that the value of a variable declared with const remains the same within its scope. 
// It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

//     const greeting = "say Hi";
//     greeting = "say Hello instead";// error: Assignment to constant variable. 

// nor this:

//     const greeting = "say Hi";
//     const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

// Every const declaration, therefore, must be initialized at the time of declaration.

// This behavior is somehow different when it comes to objects declared with const. 
// While a const object cannot be updated, the properties of this objects can be updated. 
// Therefore, if we declare a const object as this:

//     const greeting = {
//         message: "say Hi",
//         times: 4
//     }

// while we cannot do this:

//     greeting = {
//         words: "Hello",
//         number: "five"
//     } // error:  Assignment to constant variable.


// we can do this:

//     greeting.message = "say Hello instead";

// This will update the value of greeting.message without returning errors.



// Hoisting of const

// Just like let, const declarations are hoisted to the top but are not initialized.

// So just in case you missed the differences, here they are:

// var declarations are globally scoped or function scoped while let and const are block scoped.

// var variables can be updated and re-declared within its scope; let variables can be updated 
// but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are 
// initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.






