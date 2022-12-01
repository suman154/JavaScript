


// OPERATOR IN JS

// Operators are symbols or keywords that tell the JavaScript engine 
// to perform some sort of actions or operations.

// for example 

// let sum = a+b  here a and b are operand 

// + are operator 
// a+b are operations




// Types of JS operator

// 1 Arithmetic Operators
// 2 Assignment Operators
// 3 String Operators
// 4 Incrementing and Decrementing Operators
// 5 Logical Operators
// 6 Comparison Operators
// 7 Conditional Operator or ternerary operator





// 1 Arithmetic Operators ===> [+ ,  -,  *,  /,  %]

    // The arithmetic operators are used to perform 
    // common arithmetical operations, such as addition,
    // subtraction, multiplication etc.

    // +	Addition	    x + y	Sum of x and y
    // -	Subtraction 	x - y	Difference of x and y.
    // *	Multiplication 	x * y	Product of x and y.
    // /	Division    	x / y	Quotient of x and y
    // %	Modulus	        x % y	Remainder of x divided by y
    








    // Arthemetic 


    // let x = 10;
    // let y = 4;

    // document.write(x + y); // 0utputs: 
    // document.write('<br>');

    // document.write(x - y); // 0utputs: 
    // document.write('<br>');

    // document.write(x * y); // 0utputs: 
    // document.write('<br>');

    // document.write(x / y); // 0utputs: 
    // document.write('<br>');

    // document.write(x % y); // 0utputs: 
    // document.write('<br>');








// 2 Assignment Operators  ===> [= ,  +=, -=, *=, /=, %=]

    // The assignment operators are used 
    // to assign values to variables.

    // =	Assign	x = y  This means ==>	 x = y
    // +=	Add and assign	x += y This means ==>	x = x + y
    // -=	Subtract and assign	x -= y This means ==>	x = x - y
    // *=	Multiply and assign	x *= y This means ==>	x = x * y
    // /=	Divide and assign quotient	x /= y This means ==>	x = x / y
    // %=	Divide and assign modulus	x %= y This means ==>	x = x % y






    // Assignment operator

    // let x;    // Declaring Variable
    // x = 10;
    // document.write(x); // Outputs: 
    // document.write('<br>');

// +=



    // x = 20;
    // x += 30;
    // document.write(x); // Outputs: 
    // document.write('<br>');
     


    // x = 50;
    // x -= 20;
    // document.write(x); // Outputs: 
    // document.write('<br>');
     


    // x = 5;
    // x *= 25;
    // document.write(x); // Outputs: 
    // document.write('<br>');
     


    // x = 50;
    // x /= 10; // x = x/10
    // document.write(x); // Outputs: 
    // document.write('<br>');
     


    // x = 100;
    // x %= 15;    // x = x%15
    // document.write(x); // Outputs: 
    // document.write('<br>');



















// 3 String Operators ===> [+ ,  +=]

// +	Concatenation	str1 + str2	  Concatenation of str1 and str2
// +=	Concatenation assignment	str1 += str2	Appends the str2 to the str1

// let str1 = "Hello";
// let str2 = " World!";

// document.write(str1 + str2); // Outputs: Hello World!
// document.write('<br>');

// str1 += str2;  // str1 = str1 + str2
// document.write(str1); // Outputs: Hello World!










// 4 Increment Decrement Operators  ===> [++ , --] =====> [++x, x++,  --x, x--]
    // The increment/decrement operators are used to 
    // increment/decrement a variable's value.

// let x=10;
    // ++x	Pre-increment	Increments x by one, then returns x
    // x++	Post-increment	Returns x, then increments x by one
    // --x	Pre-decrement	Decrements x by one, then returns x
    // x--	Post-decrement	Returns x, then decrements x by one







// 4 Increment Decrement Operators  ===> [++ , --] =====> [++x, x++,  --x, x--]

// let x; // Declaring Variable
 
// x = 10;
// document.write(++x); // Outputs: 
// document.write(x);   // Outputs: 
 
// x = 10;
// document.write(x++); // Outputs: 
// document.write(x);   // Outputs: 
 

// x = 10;
// document.write(--x); // Outputs:
// document.write(x);   // Outputs:
 

// x = 10;
// document.write(x--); // Outputs: 
// document.write(x);   // Outputs:






// 5 Logical Operators ====> [&&,  ||,  !]

    // The logical operators are typically used to
    //  combine conditional statements.

    //  &&	And 	x && y	True if both x and y are true
    //  ||	Or	    x || y	True if either x or y is true
    //  !	Not	    !x	    True if x is not true






    
// 5 Logical Operators ====> [&&,  ||,  !]

// let x=10;
// let y= 30;

// document.write((x>4) && (y>6));
// document.write('<br>');


// document.write((x<40) || (y<2));
// document.write('<br>');


// document.write(!(x==y));
// document.write('<br>');














// 6 Comparison Operators ===> [==, ===, !=, !==, <, >, >=, <=]

    // The comparison operators are used to 
    // compare two values in a Boolean fashion.

// ==	Equal	    x == y	True if x is equal to y
// ===	Identical	x === y	True if x is equal to y, and they are of the same type
// !=	Not equal	x != y	True if x is not equal to y

// !==	Not identical	x !== y	True if x is not equal to y, or they are not of the same type

// <	Less than	    x < y	True if x is less than y
// >	Greater than	x > y	True if x is greater than y
// >=	Greater than or equal to	x >= y	True if x is greater than or equal to y
// <=	Less than or equal to	    x <= y	True if x is less than or equal to 









// 6 Comparison Operators ===> [==, ===, !=, !==, <, >, >=, <=]



let x = 25;
let y = 25;
let z = "25";
 
// document.write(x == z);  // Outputs: 
// document.write('<br>');

// document.write(x === z); // Outputs: 
// document.write('<br>');

// document.write(x != y);  // Outputs: 
// document.write('<br>');


// document.write(x !== y); // Outputs: 
// document.write('<br>');

// document.write(x !== z); // Outputs: 
// document.write('<br>');

// document.write(x < y);   // Outputs: 
// document.write('<br>');

// document.write(x > y);   // Outputs: 
// document.write('<br>');

// document.write(x <= y);  // Outputs: 
// document.write('<br>');

// document.write(x >= y);  // Outputs: 
// document.write('<br>');



// let a= 2
// let b= 5
// let c='2';


// document.write(a===b);
// document.write(a!==b);



// document.write(a===c)
// document.write(a!==c);














// 7 Conditional Operator or Tenary Operator

    // JavaScript also contains a conditional operator that
    //  assigns a value to a variable based on some condition.

 //SYNTAX:   variablename = (condition) ? value1:value2 



let age = parseInt(prompt("ENter age: "));

let vote_eligible = (age >= 18)? "you are eligible to vote": "you are not eligible to vote";

document.write(vote_eligible)







//  conditional operator with multiple condition




// let month = parseInt(prompt("ENter a month: "));

// let value = (month==1)?"jan":(month==2)?"feb": (month==3)?"mar": (month==4)?"apr": 
//             (month==5)?"may":(month==6)?"jun": (month==7)?"jul":(month==8)?"aug":
//             (month==9)?"sep": (month==10)?"oct": (month==11)?"nov": (month==12)?"dec":"not a month";

// document.write(value)
    




// let a='';
// let b='20';

// document.write(typeof b)
// document.write('<br>')

// b= parseInt(b)
// document.write(b)

// document.write('<br>')
// document.write(typeof b)

// document.write('<br>')

// document.write(a);
// document.write('<br>')

// a=parseInt(a);
// document.write(a);




// let y =0;
// let z= 0;

// z = y++;

// document.write(z)
// document.write(y)


// let x = 0;
// let y = 0;
// y= ++x;

// document.write(y)
// document.write(x)

