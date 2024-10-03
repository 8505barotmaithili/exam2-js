//1
// var name="maithili";
// var age=21;
// var color="black";

// console.log(name,age,color)
// 



//2

// var a=parseInt(prompt("enter num a:"))
// var b=parseInt(prompt("enter num b:"))
// var sum=parseInt(a+b);


// console.log(sum);



//3

// var greetings="hello everyone";
// var name= "maithili";

// console.log(greetings,"my name is ",name)

//4


// var num=44;
// if(num>10 && num<20){
//     console.log("number is true");
// }
// else{
//     console.log("num is false ")
// }

//5

// var age=7;

// if(age>=18){
//     console.log("yes,they are adult")
// }
// else{
//     console.log("no ,they are not adult")
// }

//6

// var a=31;
// (a%2==0)?console.log("even num "):console.log("odd num")


//7

//  var day=3;
//  switch(day){
//     case 1:
//         console.log("somvar");
//         break;

//         case 2:
//             console.log("mangadvar");
//             break;

//             case 3:
//                 console.log("budhavar");
//                 break;

//                 case 4:
//                     console.log("guruvar");
//                     break;
        
//  }
 

//8
// var i;
// for(i=1;i<=10;i++){
//     console.log(i)
// }


//9


// var i=1;

// while(i<5){
   
//    if(i%2==0){
//     console.log(i)
   
//    }
 

//    i++;
// }


//10


//11
// var arr=["mango","kiwi","banana","pineapple","apple"]

// console.log(arr[2])
// console.log(arr[4])


//12

// var arr=["maithili","honey","zeel","trusha"]
// var newarr=arr.pop("trusha")


// console.log(newarr)
// console.log(arr)

// var newarr1=arr.push("trusha")
// console.log(newarr1)
// console.log(arr)



//13

// var arr=["maithili","honey","trusha","aayushi","sonu"]
// //  arr.splice(2,2)
// //  console.log(arr)

// var newarr=arr.slice(2,4)
// console.log(newarr)



//14

// let stu={
//     name:"maithili",
//     age:21,
//     grade:"A"
// }
// console.log(stu.name,stu.grade);

//15


//16

// var squre1=()=>{

// let squre=Math.sqrt(4);
// console.log(squre);
// }

//17

// let add = (a, b) => {
//     return a + b;
//   };

//   function sum() {
   
//     let addition = add(10,20);
//     console.log(addition);
//   }

//   sum();

  //18


//   function elements(){
//     var i=-30;
//     if(i>0){
//       return "positive";

//     }
//    else
//    {
//     return "negative";
//    }
   
    
// }
// let ans=elements()
// console.log(ans);
 


//19


  
// let fun=function(){
//     console.log('welcome to our website');

// }
// fun();

//20

// let add = (a, b) => {
//     return a * b;
//   };

//   function mul() {
   
//     let addition = add(10,20);
//     console.log(addition);
//   }

//   mul();

//21
// var arr=[10,20,30,40]
//  var newarr=arr.map(x=>x*2)
// console.log(newarr)


//22

// var arr=[10,21,30,45,50]
//  arr.filter((value)=>{
 
//     console.log(value%2==0);

//  });

//26
// let car=
//     {
//         name:"SCORPIO",
//         color:"black",
//         year:2010
//     }
   
// 
//  console.log(car[0]);

//27

// let stu=[
//         {
//             name:"aayushi",
//             age:21
//         },
//         {
//             name:"maithili",
//             age:22
//         }
       
//     ]
//      for(let key in stu){
//         console.log(stu[key])
//      }

//28

// function fun(){
//     let book={
//         name:"styana prayogo",
//         price:300,
//         year:2010

//     }
//     console.log(book);
// }
// fun();

//29

// var stu=[
//     {
//         name:"mahi",
//         age:21
//     },
//     {
//         name:"hina",
//         age:23
//     },

//     {
//         name:"khushi",
//         age:24
//     }]
//     console.log(stu);


//30

// var arr=[10,21,13,30]
// arr.find((value)=>{
// console.log(value>18)
// });



//31


// let minimum=Math.min(4,1,5,6,7,8);
// console.log(minimum);


// let maximum=Math.max(4,1,5,6,7,8);
// console.log(maximum);


// let random=Math.floor(Math.random(100)*100);
// console.log(random)

// let round=Math.round(5.5)
// console.log(round)

//32



// var date1=new Date();
// var birth=new Date('2004-11-07')
 
// month=birth.getMonth()-date1.getMonth();
// console.log(month);

// diff=date1.getFullYear()-birth.getFullYear();//age calculate
// console.log(diff);


// diff1=date1-birth;  //miliseconds
// console.log(diff1)

// seconds=Math.floor(diff1/1000);//seconds
// console.log(seconds)

// minutes=Math.floor(seconds/60);//minutes
// console.log(minutes)

// hours=Math.floor(minutes/60);//hours
// console.log(totalhours);

// days=Math.floor(diff1 / (1000 * 60 * 60 * 24));//days
// console.log(days)


// months=Math.floor(diff*12+month)
// console.log(months)
