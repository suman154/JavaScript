

// DATE FN IN JS

// let mydate = new Date();  // it return date object and store in mydate vriable

// getFullYear()	    Get the year as a four digit number (yyyy)
// getMonth()	        Get the month as a number (0-11)
// getDate()	        Get the day as a number (1-31)
// getHours()	        Get the hour (0-23)
// getMinutes()	        Get the minute (0-59)
// getSeconds()	        Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since January 1, 1970)
// getDay()	            Get the weekday as a number (0-6)






// let curr_date =  Date();
// curr_date = "Tue Feb 01 2022 11:56:21 GMT+0545 (Nepal Time)"

// let curr_date =  new Date()
// document.write(curr_date)
// document.write('<br>')
// document.write(typeof curr_date)
// document.write('<br>')
// document.write(curr_date.getFullYear())
// document.write('<br>')
// document.write(curr_date.getHours())
// document.write('<br>')
// document.write(curr_date.getSeconds())
// document.write('<br>')
// document.write(curr_date.getMinutes())
// document.write('<br>')
// document.write(curr_date.getMonth()) // 0 to 11 
// document.write('<br>')
// document.write(curr_date.getDate())
// document.write('<br>')
// document.write(curr_date.getDay()) // 0 to 6




// if(curr_date.getDay() === 2)
// {
//     document.write("tuesday")
// }
// else if(curr_date.getDay() === 3)
// {
//     document.write("wednesd")
// }










// function show_message()
// {
//    let curr_date = new Date();
//    document.getElementById("showsecond").innerHTML = curr_date.getSeconds()
// //    document.write(curr_date.getSeconds())
// //    document.write("<br>")
// }





// setInterval(show_message, 1000)












// curr_date = {
//     getFullYear: function()
//             {
//                 return 2022;
//             },

//     getHourrs: function()
//             {
//                 return 11
//             }
// }

// curr_date.getFullYear()




// let student = {
//     name: " ram",
//     age: 38,
//     get_address: function()
//                 {
//                     return " kathmandu"
//                 }
// }


// document.write(student.name);
// document.write(student.age);
// student.age = 40;
// document.write(student.age);
// document.write(student.get_address());






// document.write(curr_date)
// document.write("<br>")
// document.write(typeof curr_date)

// document.write("<br>")
// document.write(curr_date.getFullYear())





























// setInterval();







// let curr_date = new Date();

// document.write(curr_date)
// document.write("<br>")
// document.write(typeof curr_date)
// document.write("<br>")
// document.write(curr_date.getFullYear());
// document.write("<br>")
// document.write(curr_date.getHours());
// document.write("<br>")
// document.write(curr_date.getMinutes());
// document.write("<br>")
// document.write(curr_date.getSeconds());
// document.write("<br>")
// document.write(curr_date.getDay());
// document.write("<br>")
// document.write(curr_date.getMonth());
// document.write("<br>")
// document.write(curr_date.getMilliseconds());
// document.write("<br>")
// document.write(curr_date.getTime());
// document.write("<br>")
// document.write(curr_date.getDate());






// let a= 20
// let b = 30
// let sum = a+b
// document.write("The sum of " + a + " and " + b + " is " + sum);

// document.write(`The sum of ${a} and ${b} is ${sum}`);



// function show_message()
// {
//     let curr_date = new Date();
//     document.getElementById("showsecond").innerHTML = curr_date.getSeconds()
// }


// setInterval(show_message, 1000)












// if(curr_date.getMonth() === 1)
// {
//     document.write("feb")
// }




// curr_date = {

//     getFullYear: function()
//     {
//         return 2022
//     }
//     ,

//     getHours: function()
//     {
//         return 10
//     },

//     getDay: function()
//     {
//         return 2
//     }

// }











// curr_date.getFullYear()


// let student = {
//     name: " ram",
//     address: " kathmandu",

//     age : function()
//             {
//                 return 30
//             }
// }


// document.write(student.name);
// document.write(student.age())




































// let a= Number(prompt("enter number"))
// document.write(a)



// function getsec()
// {

//     // let curr_date = new Date();
//     // document.write(curr_date.getSeconds())
//     document.write("hello")

// }


// setInterval(getsec, 1000)



















// let curr_date = new Date();

// document.write(curr_date);
// document.write("<br>")
// document.write(typeof curr_date)
// document.write("<br>")

// document.write(curr_date.getFullYear())
// document.write("<br>")

// document.write(curr_date.getDate())
// document.write("<br>")

// document.write(curr_date.getMonth())
// document.write("<br>")

// document.write(curr_date.getDay())
// document.write("<br>")

// document.write(curr_date.getHours())
// document.write("<br>")

// document.write(curr_date.getMinutes())
// document.write("<br>")

// document.write(curr_date.getSeconds())
// document.write("<br>")

// document.write(curr_date.getMilliseconds())
// document.write("<br>")


// document.write(curr_date.getTime())
// document.write("<br>")





























// let curr_date = new Date()

// //document.write(curr_date);

// //document.write(curr_date.getMonth())

// let month_num = curr_date.getMonth();

// switch(month_num)
// {
//     case 0:
//         document.write("jan")
//         break;

//     default:
//         document.write("invalid date")
//         break;

// }



















// setInterval(f1, 1000)


// function f1()
// {
//     document.write(1)
// }


// let mydate = new Date();


// document.write( mydate);
// document.write('<br>')
// document.write(typeof mydate)
// document.write('<br>')
// document.write(mydate.getDay());







let mydate = new Date()

let day = mydate.getDay()

let today;

if(day == 0)
{
 today = "sunday"
}

else if(day ==1 )
{
    today = " monday";
}
else if(day ==2 )
{
    today = " tuesday";
}
else if(day ==3 )
{
    today = " wednesday";
}
else if(day ==4 )
{
    today = " thursday";
}
else if(day ==5 )
{
    today = " friday";
}
else 
{
    today = " saturday";
}


document.write(today);




// document.write('<br>')
// document.write( mydate.getFullYear());
// document.write('<br>')
// document.write( mydate.getMonth());
// document.write('<br>')
// document.write( mydate.getDate());
// document.write('<br>')
// document.write( mydate.getHours()); // please convert to 12 hr am and pm using condition
// document.write('<br>')
// document.write( mydate.getMinutes());
// document.write('<br>')
// document.write( mydate.getSeconds());
// document.write('<br>')
// document.write( mydate.getMilliseconds());
// document.write('<br>')
// document.write( mydate.getTime());
// document.write('<br>')






// JavaScript Conditional Statements


// Like many other programming languages, JavaScript also allows 
// you to write code that perform different actions based on the 
// results of a logical or comparative test conditions at run time. 
// This means, you can create test conditions in the form of expressions 
// that evaluates to either true or false and based on these results you 
// can perform certain actions.

// There are several conditional statements in JavaScript that you can use to make decisions:

// 1. The if statement
//     nested if statement
// 2. The if...else statement
// 3. The if...else if....else statement
// 4. The switch...case statement









































// The if Statement

// The if statement is used to execute a block of code only 
// if the specified condition evaluates to true. 

// SYNTAX

// if(condition)  // if condition is true then code will execute
//  {
//     // Code to be executed
//  }





// let a = 20;
// let b = 30;

// if(a>b)
// {
//     document.write("true")
// }
// else
// {
//     document.write("i amm else part")
// }






// let a = 50;
// let b =30;

// if(a<b)
// {
//     if(a<100)
//     {
//         document.write("i am greater")
//     }
//     else
//     {
//         document.write("i am lesser")
//     }
// }
// else
// {
//     document.write(" i am least")
// }





// let user_name = prompt("Enter your username");

// if(user_name == "nawaraj")
// {
//     let password = prompt("enter your password");

//     if(password == "123")
//     {
//         document.write("Welcome to your profile");
//     }
//     else
//     {
//         document.write("Yur have entered wrong password");
//     }
// }
// else
// {
//     document.write("invalid username");
// }























// let a= 20;
// let b =30;

// if(a>b)
// {
//     document.write('i am if part');
// }
// else
// {
//     document.write(" i am else part");
// }




// nested if


// let a = 20;
// let b = 30;

// if(a<b)
// {
//     if(a<100)
//     {
//         document.write("a is greater than 100")
//     }
//     else
//     {
//         document.write(" a is less than 100")
//     }
// }
// else
// {
//     document.write("a is less than b")
// }




// let user_name = prompt("Enter your username:")


//     let password = prompt("enter your password");

//     if((password == "123") && (user_name == "nawaraj"))
//     {
//         document.write("welcome to your profile")
//     }
//     else
//     {
//         document.write("your email and password is invalid")
//     }






// if  else if    else    ststemnt




// let num = parseInt(prompt("ENter a number"))

// if(num>0)
// {
//     document.write("positive number");
// }

// else if(num == 0)
// {
//     document.write("number is 0")
  
// }

// else if(num < 0)
// {
//     document.write(" Negative number")
// }


// else
// {
//     document.write("enter a valid number")
// }







// let perc = parseInt(prompt("Enter a percentage"))

// if((perc >= 80) && (perc <= 100))
// {
//     document.write("u have grade A");
// }

// else if((perc >= 60) && (perc < 80))
// {
//     document.write("u got grade B");
// }

// else if((perc >= 40) && (perc < 60))
// {
//     document.write("U got C");
// }

// else if((perc >= 20) && (perc < 40))
// {
//     document.write("u  fail u fool");
// }
// else
// {
//     document.write("please enter valid percentage")
// }

















































// if   else if    else



// let num = parseInt(prompt("ENter a number"));

// if(num > 0)
// {
//     document.write("positive number")
// }
// else if(num == 0)
// {
//     document.write("num is 0")
// }

// else if (num < 0)
// {
//     document.write("negative number");
// }

// else
// {
//     document.write("invalid number")
// }
























// let perc = parseInt(prompt("enter your percentage"))

// if((perc >= 90) && (perc <= 100))
// {
//     document.write(" you got A");
// }
// else if((perc >= 70) && (perc < 90))
// {
//     document.write("B");
// }
// else if((perc >= 50) && (perc < 70))
// {
//     document.write("c")
// }
// else if((perc >= 30) && (perc < 50))
// {
//     document.write("babu tme fail vayou")
// }
// else
// {
//     document.write("perc miline herera hala")
// }































































//document.write("i am outsider")





















// let a= 20;
// let b= 30;

// if(a>b)
// {
//     document.write("hello");
// }
// else
// {
//     document.write('how are you')
// }






//nested if

    // let a= 20;
    // let b= 30;

    // if(a<b)
    // {
    //     if(a<50)
    //     {
    //         document.write("i am greater than 50");
    //     }
    //     else
    //     {
    //         document.write("i am less that 50");
    //     }
    // }
    // else
    // {
    //     document.write("i am greater");
    // }





// let user_name = prompt("Enter your username:")

// if(user_name == "nawaraj")
// {
//     let password = prompt("Enter your password: ")

//     if(password == "123")
//     {
//         document.write("welcome to ypur profile")
//     }
//     else
//     {
//         document.write("wrong password")
//     }
// }
// else
// {
//     document.write("wront username")
// }









// if   else if     else



// let a = parseInt(prompt("enter a number"))

// if(a>0)
// {
//     document.write("positive number")
// }

// else if(a==0)
// {
//     document.write("num is zero")
// }

// else if(a<0)
// {
//     document.write("negative number")
// }

// else
// {
//     document.write("invalid number")
// }







// let per = parseInt(prompt("enter percentage"))

// if((per >= 90) && (per <= 100))
// {
//     document.write(" timro grade chai A+ ")
// }
// else if((per >= 70) && (per < 90))
// {
//     document.write(" timro grade chai B +")
// }

// else if((per >= 50) && (per < 70))
// {
//     document.write("timro grade chai c+")
// }

// else if((per >= 30) && (per < 50))
// {
//     document.write("tme fail vayoun grade chai E")
// }
// else
// {
//     document.write("diyako perc milena")
// }










// if(20<10)
// {
//     document.write(true)
// }
// else
// {
//     document.write(false)
// }




// if(20>10)
// {
//     if(20>15)
//     {
//         document.write("hello")
//     }
//     else
//     {
//         document.write("hi")
//     }
// }
// else
// {
//     document.write("k cha")
// }





// let user_name = prompt("enter yourname")
// if(user_name == "nawaraj")
// {
//     let password = prompt("enter password")
//     if(password == "123")
//     {
//         document.write("welcome to your profile")
//     }
//     else
//     {
//         document.write("invalid password")
//     }
// }
// else
// {
//     document.write("invalid username");
// }


// -----------------------------------------------------------------------------------------


// example 1

// check if the number is positive


// function checkpositive()
// {
//     const number = prompt("Enter a number: ");
//     if (number > 0) 
//     {
//       console.log("The number is positive");
//     }
//     console.log("The if statement is easy");
// }


// checkpositive();



// function findweekday()
// {
//     let now = new Date();
//     let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6
    
//     if(dayOfWeek == 5) {
//         alert("Have a nice weekend!");
//     }
    
// }



//    document.write("hello");

// document.write("hi")


// findweekday();





// let x= 10;
// if(x>20)   //if without braces
//  

// 2. The if...else Statement

// You can enhance the decision making capabilities of your JavaScript 
// program by providing an alternative choice through adding an else statement to the if statement.

// The if...else statement allows you to execute one block of code if 
// the specified condition is evaluates to true and another block of code 
// if it is evaluates to false. 



// SYNTAX

// if(condition) 
// {
//     // Code to be executed if condition is true
// } 
// else 
// {
//     // Code to be executed if condition is false
// }



// function voting_eligible(age)
// {
//     if(age >= 18)
//     {
//         document.write(`your age is ${age} and you are eligible to vote`)
//     }
//     else
//     {
//         document.write('your age is not eniugh to vote')
//     }
// }

// let age = parseInt(prompt("ENter age: "))

// voting_eligible(age);




// function weekday(now)
// {
   
//     let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

//     if(dayOfWeek == 1) 
//      {
//         return " Have a nice day";
//      } 
//      else 
//      {
//         return " have a bad day ";
//      }
// }


// let now = new Date(); // create data object and store in now var

// let wish = weekday(now);  //fn call and pass now to fn and store return value to wish

// document.write(wish); //print wish value





// let x= 0;
// x = x++;   
// x= x++;
// x = x++;

// document.write(x)





// 3. The if...else if...else Statement

// The if...else if...else a special statement that is used 
// to combine multiple if...else statements.

// SYNTAX

// if(condition1) 
//     {
//         // Code to be executed if condition1 is true
//     } 
// else if(condition2) 
//     {
//         // Code to be executed if the condition1 is false and condition2 is true
//     } 
// else 
//     {
//         // Code to be executed if both condition1 and condition2 are false
//     }







// function getday()
// {
//     var now = new Date();
//     var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

//     if(dayOfWeek == 5) 
//     {
//         alert("Have a nice weekend!");
//     } 
//     else if(dayOfWeek == 0) 
//     {
//         alert("Have a nice Sunday!");
//     } 
//     else 
//     {
//         alert("Have a nice day!");
//     }
// }

// getday()





// function gettime()
// {
//     // let date = new Date();
//     // let currtime = date.getHours();
//     let currtime = parseInt(prompt("enter hr"));

//      if(currtime == 00)
//     {
//         currtime =  12 + ':AM';
//       //  document.write(`Current time is ${currtime} and how are you`);
//     }
//     else if( currtime < 12 )
//     {
//         currtime = currtime + ':AM'; 
//       //  document.write(`Current time is ${currtime} and how are you`);   
//     }

//     else if(currtime == 12)
//     {
//         currtime =  currtime + ':PM';
//       //  document.write(`Current time is ${currtime} and how are you`);
//     }
    
//     else if((currtime>12) && (currtime<24))
//     {
//         currtime =  currtime - 12 + ':PM';
//        // document.write(`Current time is ${currtime} and how are you`);
//     }
//     else
//     {
//         document.write("This is nothing")
//     }

//     document.write(`Current time is ${currtime} and how are you`);

// }

// gettime()






// NESTED IF 

// SYNTAX

// if(condition)
// {
//     if(condition)
//     {
//          //statement
//     }
// }


// program o find largest of 3 number

// function find_largest(x,y,z)
// {
//     if (x > y) 
//     {
//         if (x > z) 
//         {
//           return "x is largest:" + x;
//         }
      
//       } 
//       else if(y > z) 
//       {
//         return "y is largest:" + y;
//       } 
//       else 
//       {
//         return "z is largest:" + z;
//       }
// }


// let x = parseInt(prompt("Enter first number"))
// let y = parseInt(prompt("Enter second number"))
// let z = parseInt(prompt("Enter third number"))

// let result = find_largest(x,y,z);
// document.write(result)




// The Ternary Operator

// The ternary operator provides a shorthand way of writing the
// if...else statements. The ternary operator is represented by the question mark (?) 
// symbol and it takes three operands: a condition to check,
//  a result for true, and a result for false.


// SYNTAX
// let  result = (condition) ? value1 : value2


// let age = parseInt(prompt("Enter age"))
// if(age>=18)
// {
//     document.write("eligible")
// }
// else
// {
//     document.write("not eligible")
// }



// // OR



// let voting_elibile = (age>=18)? "eligible" : "not eligible";
// document.write(voting_elibile)







// The Switch...Case Statement

// The switch..case statement is an alternative to the if...else if...else statement, 
// which does almost the same thing. The switch...case statement tests a variable or 
// expression against a series of values until it finds a match, and then executes the 
// block of code corresponding to that match. 

// switch(x)
// {
//     case value1:  x == value1

//         // Code to be executed if x === value1
//         break;

//     case value2:

//         // Code to be executed if x === value2
//         break;

    
//     default:
//         // Code to be executed if x is different from all values
// }







// let num = Number(prompt("ENter anumber netween 1 to 5"));



// switch(num)
// {
      
//       default:
//             document.write("Please choose number et 1 to 5 only");
//             break;
//       case 3:
//             document.write("Thsi is 3");
//             break;
//       case 4:
//             document.write("Thsi is 4");
//             break;
//       case 1: 
//             document.write("Thsi is 1");
//             break;

//       case 2:
//             document.write("Thsi is 2");
//             break;
   
//       case 5:
//             document.write("Thsi is 5");
//             break;

      
// }





// let value = prompt("ENter a string or char");

// switch(value)
// {
//       case 'apple':
//             document.write("this is case apple");
//             break;

//       case 'ball':
//             document.write("This is case ball ");
//             break;

//       case "c":
//             document.write("This is c");
//             break;

//       case '5':
//             document.write("this is case string 5")
//             break;

//       default:
//             document.write("this is defalut");
//             break;
// }






// let day = prompt('enter a days');

// switch(day)
// {
//       case 'sun':
//       case 'mon':
//       case 'tues':
//       case 'wed':
//       case 'thurs':
//             document.write("These are week days");
//             break;

//       case 'fri':
//       case 'sat':
//             document.write("These are weekend");
//             break;

//       default:
//             document.write("please choose day correctly")
//             break;

// }


























































// let num = parseInt(prompt("ENter a number between 1 to 6"))

// switch(num)
// {

//     default:
//         document.write("you have entered wrong number")
//         break;

//     case 1:
//         document.write("you eneter number 1");
//         break;

//      case 5:
//         document.write("You enter number 5");
//         break;

//      case 6:
//         document.write("You enter number 6");
//         break;
    
//     case 2:
//         document.write("You enter number 2");
//         break;

//      case 3:
//         document.write("You enter number 3");
//         break;

//      case 4:
//         document.write("You enter number 4");
//         break;


// }










// let perc = parseInt(prompt("ENter a percentage "))
// // document.write((perc/10))  //  25/10  = parseInt(2.5) = 2
// // document.write(parseInt(6.73463))
// switch(parseInt(perc/10))   
// {
//     case 1:
//         document.write("Garde I");
//         break;

//     case 2:
//         document.write("Grade H")
//         break;

//     case 3:
//         document.write("Grade G")
//         break;
    
//     case 4:
//         document.write("Garde F");
//         break;

//     case 5:
//         document.write("Grade E")
//         break;

//     case 6:
//         document.write("Grade D")
//         break;

//      case 7:
//         document.write("Garde C");
//         break;

//     case 8:
//         document.write("Grade B")
//         break;

//     case 9:
//         document.write("Grade A")
//         break;

//     case 10:
//         document.write("Grade a++");
//         break;

//     default:
//         document.write("please enter percentage aboube 10")
//         break;
// }






//  sun =1
// mun =2
// tues= 3
// wed = 4
// thurs=5
// fry=6
// sat=7

// let day = parseInt(prompt("Enter a day number between  1 - 7"))

// switch(day)
// {
//     case 1:
//     case 7:
//         document.write("this is weekend");
//         break;

//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         document.write("these are week days");
//         break;

//     default:
//         document.write("please enter a num bet 1 to 7");
//         break;
// }






// simple calculator using switch case


// let opr_num = parseInt(prompt("1. Addition " + "\n" + "2. Subtraction" + "\n"
//                                  + "3. Multiplication" + "\n" + "4. Division" 
//                                  + "\n" + "5.Modulus"))
// let num1, num2;

// switch(opr_num)
// {
//         case 1:
//             num1 = parseInt(prompt("Enter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let sum = num1+num2;
//             document.write(`The sum of ${num1} and ${num2} is: ${sum}`);
//             break;

//         case 2:
//             num1 = parseInt(prompt("Enter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let sub = num1-num2;
//             document.write(`The sub of ${num1} and ${num2} is: ${sub}`);
//             break;

//         case 3:
//             num1 = parseInt(prompt("Enter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let mul = num1*num2;
//             document.write(`The mul of ${num1} and ${num2} is: ${mul}`);
//             break;

//         case 4:
//             num1 = parseInt(prompt("Enter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let div = num1/num2;
//             document.write(`The div of ${num1} and ${num2} is: ${div}`);
//             break;

//         case 5:
//             num1 = parseInt(prompt("Enter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let mod = num1%num2;
//             document.write(`The mod of ${num1} and ${num2} is: ${mod}`);
//             break;

//         default:
//             document.write("wrong opr_num chocice");
//             break;

    
// }















// let num = parseInt(prompt("ENter a number between 1 to 5"));

// switch(num)
// {
//     case 1: 
//         document.write("this is 1");
//         break;

//     case 2:
//         document.write("this is 2");
//         break;

//     case 3:
//         document.write("this is 3");
//         break;

//     case 4:
//         document.write("this is 4");
//         break;

//     case 5:
//         document.write("this is 5");
//         break;

//     default:
//         document.write("Plesee choose num bet 1 to 5")
//         break;
// }







// let value = prompt("Enter a character or string")


// switch(value)
// {
//     case 'A':
//         document.write("this is A");
//         break;

//       case 'B':
//         document.write("this is B");
//         break;

//     default:
//         document.write("please choose a string")
//         break;


// }




// let num = parseInt(prompt("ENter a number between 1 to 5"));

// switch(num)
// {
//     default:
//         document.write("Plesee choose num bet 1 to 5")
//         break;
        
    
//     case 4:
//         document.write("this is 4");
//         break;

//     case 5:
//         document.write("this is 5");
//         break;

    
//     case 1: 
//         document.write("this is 1");
//         break;

//     case 2:
//         document.write("this is 2");
//         break;

//     case 3:
//         document.write("this is 3");
//         break;

// }






// let day = prompt("enter a day");

// switch(day)
// {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursda":
//     case "friday":
//         document.write("These are week days");
//         break;

//     case "saturday":
//     case "sunday":
//         document.write("These are weekend");
//         break;

//     default:
//         document.write("please enter day correctly")
//         break;

// }




















































































// let d = new Date();
	
// switch(d.getDay()) {
// 	case 0:
// 		alert("Today is Sunday.");
// 		break;
// 	case 1:
// 		alert("Today is Monday.");
// 		break;
// 	case 2:
// 		alert("Today is Tuesday.");
// 		break;
// 	case 3:
// 		alert("Today is Wednesday.");
// 		break;
// 	case 4:
// 		alert("Today is Thursday.");
// 		break;
// 	case 5:
// 		alert("Today is Friday.");
// 		break;
// 	case 6:
// 		alert("Today is Saturday.");
// 		break;   
// 	default:
// 		alert("No information available for that day.");
// 		break;
// }






// case can be of any order

// let d = new Date();

// switch(d.getDay()) {
//     default: 
//         alert("Looking forward to the weekend.");
//         break;
//     case 6:
//         alert("Today is Saturday.");
//         break; 
//     case 0:
//         alert("Today is Sunday.");
// }



// Multiple Cases Sharing Same Action

// let d = new Date();

// switch(d.getDay()) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         alert("It is a weekday.");
//         break; 
//     case 0:
//     case 6:
//         alert("It is a weekend day.");
//         break;
//     default: 
//         alert("Enjoy every day of your life.");
// }








// switch(3)
// {
//     case 1:
//         document.write("sunday");
//         break;

//     default:
//         document.write("i am default");
//         break;
       
// }










// Simple calculator using switch case

// let opr_num = parseInt(prompt("1 Addition " + "\n" + "2 Subtraction" + "\n"+ 
//                                 "3 Multiplication" + "\n"+ "4 Division"+ "\n"+ 
//                                 "5 Modulus"));

// let a , b
// switch(opr_num)
//  {
    
//     case 1:
//          a = parseInt(prompt("Enter a first number"));
//          b = parseInt(prompt("Enter a second number"));
//         let sum = a+b;
//         document.write(`The sum of ${a} and ${b} is :  ${sum}`);

//         break;

//     case 2:
//          a = parseInt(prompt("Enter a first number"));
//          b = parseInt(prompt("Enter a second number"));
//         let sub = a-b;
//         document.write(`The sub of ${a} and ${b} is :  ${sub}`);

//         break;

//     case 3:
//              a = parseInt(prompt("Enter a first number"));
//              b = parseInt(prompt("Enter a second number"));
//             let mul = a*b;
//             document.write(`The mul of ${a} and ${b} is :  ${mul}`);
    
//             break;

//     case 4:
//              a = parseInt(prompt("Enter a first number"));
//              b = parseInt(prompt("Enter a second number"));
//             let div = a/b;
//             document.write(`The div of ${a} and ${b} is :  ${div}`);

//             break;

//     case 5:
//              a = parseInt(prompt("Enter a first number"));
//              b = parseInt(prompt("Enter a second number"));
//             let mod = a%b;
//             document.write(`The mod of ${a} and ${b} is :  ${mod}`);
        
//             break;

//     default:
//             document.write("coose case correctly")
//             break;
    
//  }



// let perc = 90

// switch(parseInt(perc/10))
// {
//     case 1:
//         document.write("thuuka u r such a dabba fello")
//         break
//     case 5:
//         document.write("hi");
//         break;
//     case 6:
//         document.write("hi0");
//         break;
//     case 7:
//         document.write("h8i");
//         break;
//     case 8:
//         document.write("thhi");
//         break;
//     default:
//         document.write("perc cannot be less than 10")
        
// }






// let opr_num = parseInt(prompt("1. Addition" + "\n" + "2. SUbtraction" + "\n" 
//                             + "3. Multification" + "\n" + "4. Division" 
//                             + "\n" + "5. Modulus"));
// let num1, num2;
// switch(opr_num)
// {
//     case 1:
//             num1 = parseInt(prompt("ENter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let sum = num1+num2;
//             document.write(`The sum of ${num1} and ${num2} is : ${sum}`);
//             break;
//       case 2:
//             num1 = parseInt(prompt("ENter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let sub = num1-num2;
//             document.write(`The sub of ${num1} and ${num2} is : ${sub}`);
//             break;
//       case 3:
//             num1 = parseInt(prompt("ENter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let mul = num1*num2;
//             document.write(`The mul of ${num1} and ${num2} is : ${mul}`);
//             break;
//       case 4:
//             num1 = parseInt(prompt("ENter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let div = num1/num2;
//             document.write(`The div of ${num1} and ${num2} is : ${div}`);
//             break;
//       case 5:
//             num1 = parseInt(prompt("ENter a first number"));
//             num2 = parseInt(prompt("Enter a second number"));
//             let mod = num1%num2;
//             document.write(`The mod of ${num1} and ${num2} is : ${mod}`);
//             break;
    
//     default:
//                 document.write("please enter correct opr_num");
//                 break;


// }






// set of instruction 
// or lines of codes
// written in any programming language
// which hav a specific name 
// predefined task to perform


// fn without return type and without argument

// function addition()  // fn defination
// {
//     let a= 20;
//     let b = 30;
//     let sum = a+b;
//     document.write(sum);

// }


// addition()  // fn call



// fn assigning to a variable
// let sum = function()
//             {
//                 document.write("this is sum function");
//             }

// sum();



// fn with returntype and without argument

// function addition()
// {
//     let a= 20;
//     let b = 30;
//     let sum = a+b;
//     return sum;
// }


// document.write(addition())


//  let value = addition();
//  document.write(value)




//  fn  with argument and without returntype

// function mul(a,b)
// {
//     let multi = a*b;
//     document.write(multi);
// }



// let a= parseInt(prompt("enater a num1"));
// let b = parseInt(prompt("enter a num2"));
// mul(a,b)



// fn with argument and with return type


// function mul(a,b,c)
// {
//     let mul = a*b*c;
//     return mul;
// }

// let value = mul(10,20,30);
// document.write(value)


















// let student = {
//     name:"ram",
//     age:"24",
//     address : function()
//                 {
//                     return "gorkha"
//                 },

//     marks: 98,

// }

// document.write(student.address())
// student.age = 30
// document.write(student.age)
































