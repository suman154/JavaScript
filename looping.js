// // JavaScript Loops

// // Different Types of Loops in JavaScript

// // Loops are used to execute the same block of code again and again, 
// // as long as a certain condition is met. The basic idea behind a loop 
// // is to automate the repetitive tasks within a program to save the time 
// // and effort. JavaScript now supports five different types of loops:


// // for —        loops through a block of code until the counter reaches a specified number.

// // for…in —     loops through the properties of an object.
// // for…of —     loops over iterable objects such as arrays, strings, etc.

// // for..each - loops over iterable objects such as arrays, strings, etc. // advance level

// // while —      loops through a block of code as long as the condition specified evaluates to true.

// // do…while —   loops through a block of code once; then the condition is evaluated. 
//                 // If the condition is true, the statement is repeated as long as the specified condition is true.




// // break -   it breaks the loop and control come out of loop

// // continue - it skips the current iteration and continue execution from next iteration



// // 1. The for Loop

// // The for loop repeats a block of code as long as a certain condition is met. 
// // It is typically used to execute a block of code for certain number of times. 

// // Its syntax is:

// // for(initialization; condition; increment) 
// // {
// //     // Code to be executed
// // }





// // The parameters of the for loop statement have following meanings:

// // initialization —    it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.
// // condition —         it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.
// // increment —         it updates the loop counter with a new value each time the loop runs.


// // The following example defines a loop that starts with i=1. 
// // The loop will continued until the value of variable i is less than or equal to 5. 
// // The variable i will increase by 1 each time the loop runs:

// // for(var i=1; i<=5; i++) 
// // {
// //     document.write("The number is " + i );
// //     document.write('<br>')
// // }



// // An array with some elements

// // var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// // // Loop through all the elements in the array 

// // for(var i=0; i<fruits.length; i++) 
// // {
// //     document.write( fruits[i] );
// //     document.write('<br>')

// // }



// // for loop in string

// let str = "hello"

// for(let i = 0; i<str.length; i++)
// {
//     document.write(str[i])
//     document.write("<br>")
// }


// BREAK

// for(let i = 0 ; i<=5; i++)
// {
//     document.write(i + "<br>")
//     if(i==3)
//         break;
// }




// for(let i = 0 ; i<=5; i++)
// {
//     document.write(i + "<br>")
//     if(i==3)
//     {
//         break;
//     }
        
// }





// // CONTINUE


// // for(let i = 0 ; i<=5; i++)
// // {
    
// //     if(i==3)
// //         continue;

// //     document.write(i + "<br>")
// // }




// // for(let i = 0 ; i<=5; i++)
// // {
// //     
// //     if(i==3)
// //     {
// //         continue;
// //     }
    
//     // document.write(i + "<br>")
// // }






// //========================================  M16 ===================================================//

// // simple for loop with increment

// // for(let i = 0; i <= 10; i++)
// // {
// //     document.write(i)
// //     document.write("<br>")
// // }


// // FLOW OF FOR LOOP

// // 1. initializaton
// // 2. condition
// // 3. statement executed
// // 4. increment/decrement 


// // Simple for loop with decrement

// // for(let i =10; i>=0; i--)
// // {
// //     document.write(i)
// //     document.write('<br>')
// // }





// // For loop accessing array element

// // let number = [20,30,40,50,60]   



// // document.write(number[3])
// // number[3] = 100
// // document.write(number[3])



// // array index start from 0 ==> 0 1 2 3 4
// // above array length is 5

// //document.write(number.length)

// // for(let i = 0 ; i < number.length; i++)
// // {
// //     document.write(number[i]); // number[0]
// //     document.write("<br>")
// // }


// // for(let i = number.length-1; i >= 0 ; i--)
// // {
// //     document.write(number[i])
// //     document.write("<br>")
// // }



// //  sum of natural number 1 to 10

// // let sum = 0;

// // for(let i = 1; i<=10; i++)
// // {
// //     sum += i; //  sum = sum + i
// //     document.write(sum)
// //     document.write("<br>")
// // }

// // document.write(sum)




// // let str1 = "hello"

// // // document.write(str1.charAt(4))

// // for(let i = 0; i< str1.length; i++)
// // {
// //     document.write(str1.charAt(i) )

// //     document.write("<br>")
// // }




// // let arr1 = [1,2,3];
// // let arr2 = [1,2,3];

// // let arr3 = []; // [2,4,6]


// // // arr3[0] = 2
// // // arr3[1] = 4 

// // for(let i = 0; i< arr1.length; i++)
// // {
// //     arr3[i] = arr1[i] + arr2[i]
// // }


// // document.write(arr1)
// // document.write("<br>")

// // document.write(arr2)
// // document.write("<br>")

// // document.write(arr3)
// // document.write("<br>")





// //  Nested for loop


// // for(let i = 0; i<=3; i++)
// // {
// //     for(let j = 0; j<5; j++)
// //     {
// //         document.write(i + " ===> "+ j)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }





// // for(let i = 1; i<=10; i++)
// // {
// //     for(let j =1; j<=10; j++)
// //     {
// //         document.write(` ${i} * ${j} ====>  ${i*j}`)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }





// //  dunamic tabel

// // let start_num = parseInt(prompt("Enter a startnum"))
// // let end_num = parseInt(prompt("Enter a end number"))

// // for(let i = start_num; i<=end_num; i++)
// // {
// //     for(let j =1; j<=10; j++)
// //     {
// //         document.write(` ${i} * ${j} ====>  ${i*j}`)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }





// // let num = parseInt(prompt("ENter a number"))

// // for(let i = num; i<=num; i++)
// // {
// //     for(let j =1; j<=20; j++)
// //     {
// //         document.write(` ${i} * ${j} ====>  ${i*j}`)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }




// // While loop


// // let i = 0;

// // while(i<=5)
// // {
// //     document.write(i + "<br>")
// //     i++
// // }



// // let arr= [4,5,6,7,8]

// // let i = 0;
// // while(i<arr.length)
// // {
// //     document.write(arr[i] + "<br>")

// //     if(arr[i] === 5)
// //     {
// //         arr[i] = 50
// //     }
// //     document.write(arr[i] + "<br>")

// //     i++
// // }







// // do while loop




// // let i = 0;

// // do {
// //     document.write(i+ "<br>")
// //     i++

// // }while(i<=5)







// //  break and continue


// // for(let i = 1; i<=5; i++)
// // {
// //     document.write(i+ "<br>")
// //     if(i ==3)
// //     {
// //         break
// //     }
// // }



// // let i = 0;
// // while(i<=5)
// // {
// //     document.write(i+ "<br>")
// //     if(i==4)
// //     {
// //         break
// //     }
// //     i++
// // }



// // find 50 in arr

// // let arr1 = [1,2,3,4,50,6,6,7,8,9]

// // for(let i = 0; i<=10; i++)
// // {
// //     if(arr1[i] == 50)
// //     {
// //         document.write("we have 50 in arr")
// //         break
// //     }
// // }




// // continue



// // for(let i = 0; i<=5; i++)
// // {
// //     document.write("up")
// //     document.write("<br>")
// //     if(i == 3)
// //     {
// //         continue
// //     }
// //     document.write(i + "<br>")
// //     document.write("hello")
// //     document.write("<br>")
  

// // }




// // let arr = [20,30,40,50,60]

// // let i = 0;
// // while(i<arr.length)
// // {
// //     //document.write(i+ "<br>")
   
// //     if(arr[i]==40)
// //     {
// //         break;
// //     }
// //     document.write(i+ "<br>")
   
// //     i++
// // }














// //=======================================================================================//



// // ==============================================M12===================================================


// // FLOW OF FOR LOOP

// // 1. Inititalizition
// // 2. Condition check
// // 3. body or block of code exected
// // 4, Increment or Decrement




// // for(let i = 0; i < 5; i++)
// // {
// //     document.write(i + " <br> ");
// // }




// // for(let i = 5; i > 0; i--)
// // {
// //     document.write(i + "<br>")
// // }


// // sum of natural number 1 to 5

// // let sum = 0;
// // for(let i = 1; i <= 5; i++)
// // {
// //     sum += i;  // sum = sum + i
// //     document.write(sum + "<br>")
// // }

// // document.write(sum);



// // Even
// // let sum = 0

// // for(let i = 1; i<=100; i++)
// // {
// //     if( i%2 == 0)  // 2%2 == 0
// //     {
// //         document.write(i+ "<br>");
// //         sum += i;
// //     }
// // }
// // document.write(`The sum of even number between 1 to 100 is ${sum}`);





// //   let num_arr = [20,30,40];

// // //let length = num_arr.length; // 3

// // //document.write("The length of num_arr is: "+ length);


// // for(let i = 0; i < num_arr.length; i++)
// // {
// //     document.write(num_arr[i] + "<br>")
// // }



// // for(i = num_arr.length -1; i>= 0; i-- )
// // {
// //     document.write(num_arr[i] + "<br>")
// // }


// // document.write(num_arr)
// // document.write("<br>")

// // for(let i =  0; i< num_arr.length; i++)
// // {
// //     if(num_arr[i] == 30)
// //     {
// //         num_arr[i]= 60;
// //     }
// // }


// // document.write(num_arr)






// //let str1 = "hello";
// // document.write(str1.length)
// // document.write(str1.charAt(1))

// // for(let i = 0; i< str1.length; i++)
// // {
// //      document.write(str1.charAt(i) + ",")
// //    
// // }






// // let old_name = "jamyang dorje lama"
// // let new_name='';
// //jamyang, dorje, lama
// // for(let i = 0; i< old_name.length; i++)
// // {
// //     
//     // document.write(name.charAt(i))

// //    if(old_name.charAt(i)==' ')
// //    {
// //        new_name +=  ",";
// //    }
// //    else
// //    {
// //     new_name += old_name.charAt(i)  // new_name = new_name + name.charAt(i)
// //    } 
// // }
// // document.write(new_name)



// // let f_name = "ram"
// // let l_name = "shreshta"
// // document.write(f_name + "," + l_name)




// // let arr1 = [1,2,3]
// // let arr2 = [1,2,3]

// // let arr3 = [] // [2,4,6]

// // for(let i = 0; i< arr1.length; i++)
// // {
// //     arr3[i] = arr1[i] + arr2[i]
// // }

// // document.write(arr1)
// // document.write("<br>")

// // document.write(arr2)
// // document.write("<br>")

// // document.write(arr3)




// // let arr1 = []

// // document.write(arr1)
// // document.write("hi")

// // arr1[0] = 2
// // arr1[1]= 4
// // arr1[2] = 10

// // document.write(arr1)





// // for(let i =1; i<=2 ; i++)
// // {
// //     for(let j = 0; j<=5; j++)
// //     {
// //         document.write(i + "====" + j)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }


// // multiplication table

// // for(let i = 1; i<=10; i++)
// // {
// //     for(let j = 1; j<=10; j++)
// //     {
// //         document.write(`${i}  * ${j} ==== ${i*j}`)
// //         document.write("<br>")
// //     }

// //     document.write("<br>")
// // }






// //   for in loop



// // let student = {
// //                     name : "ram",
// //                     age: 28,
// //                     address: "kathmandu"
// //                 }


// // for(let prop in student)
// // {
// //     document.write(prop + "====" + student[prop])
// //     document.write("<br>")

// //     if(student[prop] === 28)
// //     {
// //         student[prop] = 40
// //         // break
// //         // continue
// //     }
   
// //     document.write(prop + "====" + student[prop])
    
// //     document.write("<br>")
// // }



// //  for of


// // let arr1 = [1,2,3,4]

// // for(let num of arr1)
// // {
// //     document.write(num) 
// //     if(num === 3)
// //     {
// //         document.write("i am 3")
// //     }
// // }



// // let str1 = "hello"

// // for(let str of str1)
// // {
// //     document.write(str + ",") 
 
// // }






// // let i = 0;

// // while(i<=5)
// // {
// //     document.write(i+ "<br>")
// //     i++
// // }



// let arr = [20,30,40,50]


// let i = arr.length -1

// while(i >=0)
// {
//     document.write(arr[i]+ "<br>")
//     i--; 
// }


















































// // ==============================practice ========================================================================



// // array addition

// // let arr1 = [1,2,3,4]
// // let arr2 = [5,6,7,8]

// // let arr3 = []

// // for(let i = 0 ; i< arr1.length; i++)
// // {
// //     arr3[i] = arr1[i] + arr2[i] 
// // }

// // document.write(arr3)




// // Neste for loop

// // for(let i = 0; i<=5; i++ )
// // {
// //     for(let j= 0; j<=5; j++)
// //     {
// //         document.write(i+ "====" + j + "<br>")
// //     }
// // }

// // for(let i = 0; i<=5; i++ )
// // {
// //     for(let j= 0; j<=i; j++)
// //     {
// //         document.write(i)
// //     }
// //     document.write("<br>")
// // }


// // for(let i = 0; i<=5; i++ )
// // {
// //     for(let j= 0; j<=i; j++)
// //     {
// //         document.write(j)
// //     }
// //     document.write("<br>")
// // }



// // for(let i = 5; i>=0; i-- )
// // {
// //     for(let j= 0; j<=i; j++)
// //     {
// //         document.write(j)
// //     }
// //     document.write("<br>")
// // }


// // for(let i = 5; i>=0; i-- )
// // {
// //     for(let j= 0; j<=i; j++)
// //     {
// //         document.write(i)
// //     }
// //     document.write("<br>")
// // }



// // multliplication table bet ween 1 to 10



// // for(let i = 1; i<=10; i++)
// // {
// //     for(let j = 1; j<=10; j++)
// //     {
// //         document.write(`${i} * ${j} ==  ${i*j}`)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }


// // Dynamic multiplicatin table

// // let start_num = parseInt(prompt("ENter a start number"))
// // let end_num = parseInt(prompt("Enter a end number"))

// // for(let i = start_num; i<=end_num; i++)
// // {
// //     for(let j = 1; j<=10; j++)
// //     {
// //         document.write(`${i} * ${j} ==  ${i*j}`)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }


// // For single table

// // let n = parseInt(prompt("ENter a number to find multi table"))
// // for(let i = n; i<=n; i++)
// // {
// //     for(let j = 1; j<=10; j++)
// //     {
// //         document.write(`${i} * ${j} ==  ${i*j}`)
// //         document.write("<br>")
// //     }
// //     document.write("<br>")
// // }





// // Addition of multi dimentional matrix or array

// // let arr1 = [
// //                 [1,2,3],
// //                 [3,4,5],
// //                 [6,7,8]
// //             ]

// // let arr2 = [
// //                 [1,2,3],
// //                 [3,4,5],
// //                 [6,7,8]
// //             ]


// // let arr1 = [[1,2,3], [4,5,6], [7,8,9]];
// // let arr2 = [[1,2,3], [4,5,6], [7,8,9]];












// // ============================================================================================




// // =====================================M11================================================

// // FOR loop flow

// // 1. Initiaization
// // 2. Condition check
// // 3. body execuded
// // 4. increment / decrement




// // for(let i = 0; i <= 5; i++)
// // {
// //     document.write(i + "<br>")
// // }


// // for(let i = 5; i>=0; i--)
// // {
// //     document.write(i + "<br>")
// // }







// // let arr1 = [20,30,40]

// // document.write(arr1[2])
// // arr1[2] = 100
// // document.write(arr1[2])

// //let len = arr1.length; // 3

// //document.write(len)

// // for(let i = 0; i < arr1.length; i++)
// // {
// //     document.write(arr1[i]+ "<br>")

//     // if(arr1[i] === 40)
//     // {
//     //     arr1[i] = 100
//     // }

//     // document.write(arr1[i]+ "<br>")
// //}



// // for(let i = arr1.length-1; i>=0; i--)
// // {
// //     document.write(arr1[i]+ "<br>")
// // }




// // let str1 = "hello"

// // document.write(str1.charAt(4))



// // for(let i = 0; i < str1.length ; i++)
// // {
// //     document.write(str1.charAt(i)+ "<br>")
// // }




















// // ============================================================================




































// // 2. The for...in Loop

// // The for-in loop is a special type of a loop that iterates over the properties of an object, 
// // or the elements of an array. The generic syntax of the for-in loop is:

// // for(variable in object) 
// // {
//     // Code to be executed
// // }


// // The loop counter i.e. variable in the for-in loop is a string, not a number. 
// // It contains the name of current property or the index of the current array element.



// // An object with some properties 
// // var person = {

// //     "name": "Clark", 
// //     "surname": "Kent", 
// //     "age": "36",
// //     address: "kathmandu"
// // };

// // document.write(person["address"]) // it works
// // //document.write(person[address]) // doesnt work
// // document.write(person.address)
// // //document.write(person."address");// doesnt work

// // for(let data in person)
// // {
// //     document.write(data + " == " + person[data])
// //     //document.write(data + " == " + person.data)
// //     document.write('<br>')
// // }


 
// // Loop through all the properties in the object  

// // for(var prop in person) 
// // {  
// //     document.write(prop + " = " + person[prop] ); 
// //     document.write('<br>')
// // }



// // FOr in loops for array but not recommended

//  // An array with some elements
// // var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
//  // Loop through all the elements in the array 

// // for(var i in fruits) 
// // {  
// //     document.write( fruits[i] );
// //     document.write('<br>')
// // }







// // 3. The for...of Loop -ES6

// // ES6 introduces a new for-of loop which allows us to iterate over arrays or 
// // other iterable objects (e.g. strings) very easily. Also, the code inside the 
// // loop is executed for each element of the iterable object.

// // The following example will show you how to loop through arrays and strings using this loop.


// // Iterating over array
// // let letters = ["a", "b", "c", "d", "e", "f"];

// // for(let letter of letters) 
// // {
// //    document.write(letter); // a,b,c,d,e,f
// //    document.write('<br>')

// // }

// // // Iterating over string
// // let greet = "Hello World!";

// // for(let character of greet) 
// // {
// //     document.write(character); // H,e,l,l,o, ,W,o,r,l,d,!
// // }



// // For each loop  ====> advance level not recommende for sylabbus

// // let std_name = ["ram", "hari", "sita", "gita"];

// // std_name.forEach(  name => {
// //     document.write(name)

// // })


// // let std_name = ["ram", "hari", "sita", "gita"];

// // function display_name(name, index)
// // {  
// //     //  document.write(index)
// //     // document.write(name)

// //     document.write(`${index} ===>  ${name}`)
// //     document.write("<br>")
// // }

// // std_name.forEach(display_name)






// // 4. The while Loop

// // This is the simplest looping statement provided by JavaScript.

// // The while loop loops through a block of code as long as the 
// // specified condition evaluates to true. As soon as the condition fails, 
// // the loop is stopped. 

// // The generic syntax of the while loop is:

// // while(condition) 
// // {

// //     // Code to be executed
// // }

// // The following example defines a loop that will continue to run as long as 
// // the variable i is less than or equal to 5. 
// // The variable i will increase by 1 each time the loop runs:


// // let i = 1;
// // while(i <= 5) 
// // {    
// //     document.write("The number is " + i  );
// //     document.write('<br>')
// //     i++;
// // }



// // 5. The do...while Loop

// // The do-while loop is a variant of the while loop, which evaluates 
// // the condition at the end of each loop iteration. With a do-while loop 
// // the block of code executed once, and then the condition is evaluated, 
// // if the condition is true, the statement is repeated as long as the specified 
// // condition evaluated to is true. 

// // The generic syntax of the do-while loop is:

// // do {
// //     // Code to be executed
// // }
// // while(condition);


// // The JavaScript code in the following example defines a loop that starts with i=1. 
// // It will then print the output and increase the value of variable i by 1. 
// // After that the condition is evaluated, and the loop will continue to run as long as 
// // the variable i is less than, or equal to 5.

// // var i = 1;
// // do {
// //     document.write("<p>The number is " + i + "</p>");
// //     i++;
// // }
// // while(i <= 5);



// // Difference Between while and do...while Loop

// // The while loop differs from the do-while loop in one important way — with a while loop, 
// // the condition to be evaluated is tested at the beginning of each loop iteration, 
// // so if the conditional expression evaluates to false, the loop will never be executed.

// // With a do-while loop, on the other hand, the loop will always be executed once even 
// // if the conditional expression evaluates to false, because unlike the while loop, 
// // the condition is evaluated at the end of the loop iteration rather than the beginning.