
// let  h1 = document.createElement("h1")
// h1.setAttribute("id", "myh1")
// h1.setAttribute("name" , "meroh1")
// h1.innerText = "kcga"

// document.body.appendChild(h1)



// document.write()


// let document= {

//     write : function()
//             {
                
//             }
//     html: 

//     head: <head>  </head>

//     body:
    
// }


// console.log(document.head.title.innerHTML)
// console.log(typeof document)


// let document = {

// }




// setTimeout(myfn, 2000)


// function myfn()
// {
//     let x = document.getElementById("first_h1")
//     x.innerHTML = "i am chage"
    
    
    
// }



// ==========================================================================================================================


// Selecting Elements by ID


// You can select an element based on its unique ID with the getElementById() method. 
// This is the easiest way to find an HTML element in the DOM tree.


// let first_h1 = document.getElementById("first_h1")
// document.write(first_h1)
// console.log(first_h1)


// let first_para = document.getElementById("first_para")
// document.write(first_para)
// console.log(first_para)

// let first_img = document.getElementById("first_img")
// document.write(first_img)
// console.log(first_img)

// var first_btn = document.getElementById("first_btn")
// document.write(first_btn)
// console.log(first_btn)

// console.log(first_btn.id)


// document.write("<br>")
// var first_btn ={
//     id: "first_btn",
//     name:"ram",
//     value:"hello"

// }

// document.write(first_btn.id)








// =============================================M11 ===================================



// function change_item()
// {
//     let first_h1 = document.getElementById("first_h1")
//     first_h1.innerHTML = "how are you"  
// }




// let container = document.getElementById("container");


// function add_ele()
// {
//     let para1 =  document.createElement("h2");
//     para1.innerHTML ="hello";
//     container.appendChild(para1);   
// }












// ===================================================================================




// ==========================M12================================================================





// ===============================M13==============================================



// let first_p = document.getElementById("first_p")

// console.log(first_p)

// first_p.innerHTML = "hello how are you"



// 1 create a h1 element  -- createElement()
//  tyo element lai container box vitra halxu




// let container = document.getElementById("container")



//  function add_me()
//  {
//     let h1 = document.createElement('h1')  // <h1> hello </h1>

//     h1.innerHTML = "hello00000";
    
//     container.appendChild(h1)
    
    
    
// }
















// function show_messege()
// {
//     document.write("hello")
// }


// show_messege()


// function additilon(a,b)
// {
//     let sum = a+b;
//     document.write(sum)
// }

// additilon(5,6)



// function addition()
// {
//     let a=30, b=50;
//     let sum = a+b;
//     return sum
// }


// // document.write(addition())

// let value = addition()

// document.write(value)



// function addition(a,b)
// {
//     let sum = a+b;
//     return sum
// }


// let value = addition(20,30)
// document.write(value)




// let addition = function()
//             {
//                 let a= 30, b=40
//                 document.write(a+b)
//             }


//  addition()







// let i = 0;
// while(i<=5)
// {
//     document.write(i+ "<br>")
//     if(i==3)
//     {
//         break;
//     }
// }
// // 0 123





// 0, 1245










// function changeme()
// {
//     // let x = document.getElementById("myh1")
//     // x.innerHTML = "how are you"
//     document.getElementById("myh1").innerHTML ="hpw are you"
// }





// createElement()  and appendClld()

// let container = document.getElementById("container")

// function addelement()
// {
//     // let h2 = document.createElement('h2')
//     // h2.innerHTML = "hi how are you"
//     // container.appendChild(h2)

    
//     let p = document.createElement("p")
//     p.innerHTML="this is p"
//     p.setAttribute("id", "myp")
//     p.setAttribute("class", "myclass")

//     container.appendChild(p)


//     let image = document.createElement('img')

//     image.setAttribute("alt", "monkey pic");
//     image.setAttribute("height", "500px");
//     image.setAttribute("width", "500px")
//     image.setAttribute("src", "monkey.jpg")
//     image.setAttribute("id", "ram")

//     container.appendChild(image)


// }














// function changeme()
// {
//     // let x = document.getElementById("myp")
//     // x.innerHTML= "how are you"

//     document.getElementById("myp").innerHTML= "how are  you"

// }

















// let container = document.getElementById("container")

// function  dosomething()
// {
//     let h1 = document.createElement('h1')  

//     h1.innerHTML = "hello"
//     h1.setAttribute("id", "myid")

//     container.appendChild(h1)


//     let image = document.createElement('img')


//     image.setAttribute("alt", "monkey pic")
//     image.setAttribute('src', 'monkey.jpg')
//     image.setAttribute('height', '500px')
//     image.setAttribute('width', '500px')
//     image.setAttribute('id', 'myimage')

//     container.appendChild(image)

// }








 


// =============================M12




// function changeele()
// {
//     let x = document.getElementById('myp')
//     x.innerHTML="how are you"
// }





// let x = document.getElementById("container")


// function addme()
// {

//     // let tag = document.createElement('p')
//     // tag.innerHTML="hello";

//     // tag.setAttribute('id', "merop")
//     // tag.setAttribute('class', 'meroclass')
//     // tag.setAttribute("name",'raj')



//     let image = document.createElement('img')
//     image.setAttribute('src', 'mokey.jpg')
//     image.setAttribute('alt',"this ismonkey")
//     image.setAttribute('height', '500px')
//     image.setAttribute('width', '500px')



//     x.appendChild(image)


// }






// function getvalue()
// {
//    let x = document.getElementById("myinput")
//    let ans = x.value

//    let y = document.getElementById("display");
//     y.innerHTML = ans
// }
















































// simple calculator

// let display_result = document.getElementById("display_result")

// let str =''
// function calculate(val)
// {
//     str += val
//     display_result.value = str
// }



// function find_result()
// {
//     display_result.value = eval(str)
//     str=''
// }

