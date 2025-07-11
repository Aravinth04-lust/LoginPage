
// //variables
// let name = "aravinth";
// let number1 = 5;
// let number2 = 5;
// name = "kavi";
// const name2 = "yan";

// let result = number1 + number2;
// alert("value is" + result);
// alert(name);
// alert(name2);
// console.log(name);
// console.log(name2);

// //object
// let person = {
//   name: "aravinth",
//   age: 18,
//   gender: "male",
//   family: {
//     father: "ayyasamy",
//     mother: "chitra",
//   }
// };
// //dot object
// console.log(person.family.father);
// console.log(person.age);
// //Bracket notation
// console.log(person["name"]);
// //array
// let favColor = ["blue", "green", "black"];
// favColor[3] = "white";
// console.log(favColor);
// console.log(favColor.length);

// //function
// function add(number1, number2){
// console.log(number1 + number2);
// }
// add(40,60);

// //function
// function peoples(firstName, LastName){
//     let msg = "hallo "+ firstName +" you are "+ LastName+ " clan bye";
//     console.log(msg);  
// }
// peoples("naruto", "uzumaki");
// peoples("sasuke","uchiha");

// //Assaingnment and arthametic operator
// x = 5;
// a = 5;
// //one way to use arthemetic operator
// x = x + 5;
// //second way
// a +=5;
// console.log(x);
// console.log(a);

// // arthametic operator

// let number1 = 2;
// let number2 = 2;
// console.log(number1++);
// console.log(number1);

// console.log(++number2);

// //comparition operators

// //relational operator
// let x = 5;
// // console.log(x >= 5);

// //Equality operator
// // console.log(x ===5);
// // console.log(x !==5);

// //string comparision
// console.log("aravinth" < "akash");

// //comparion to different types
// console.log(5 >'1');
// console.log(true == 1);//1 = true or 0 = false

// //strict equality operator
// // console.log(1 === 1); //need same datatype (number === number);
// // console.log('1' === 1); //(string ===number);

// //loss equality operator
// console.log(1 == 1); //important point is first value datatype takes to another value // (number ==number);
// console.log('1' == 1); //(string ==number); but its take (string ==string)

// //Ternary operator
// let age = 18;
// let type = age >=18 ? "adult" : "child"; //condition ? 'value1' : 'value2';
// console.log(type);

// //logical operator
// //application for loan
// let CibileValue = 7.5;
// let HighIncome = true;
// let CibilScore = CibileValue <= 8 ? "true" : "false";
// let EligibilePerson = HighIncome && CibilScore;
// let ApplicationStatus = EligibilePerson;
// console.log("EligiblePerson: " + EligibilePerson);
// console.log("Application status: " + ApplicationStatus);

// //logical operator with non boolien
// //Application for choose color
// let userColor = "";
// let defaultColor = "blue";
// let selectedColor = userColor || defaultColor;
// console.log( "Selected Color is: " +selectedColor );

// //if else
// let hour = new Date().getHours();

// if(hour >=0 && hour <=13)
//     console.log("Good Morning");
// else if(hour >13 && hour <=17)
//     console.log("Good Evening");
// else
//     console.log("Good night");

// //swith case statement
// let mark = 90;
// switch(true){
//     case (mark >=90):
//         console.log("S grade");
//         break;
//     case (mark >=50):
//         console.log("pass");
//         break;
//     case (mark <50):
//         console.log("fail");
//         break;
//     default:
//         console.log(Unknown);  
// }

// //if else statement assignment
// let savings = 3 ;

// if( savings >= 60){
//     console.log("buy a iphone");
// }
// else if(savings >=10){
//     console.log("Buy a normal phone");
// }
// else if(savings > 5 && savings <10){
//     console.log("buy a basic smart phone");
// }
// else{
//     console.log("buy later");
// }

// //switch case assignment
// let savings = 2000;
// switch(true){
//     case (savings >=60000):
//         console.log("Buy iphone");
//         break;
//     case (savings >=10000):
//         console.log("buy normal phone");
//         break;
//     case (savings >5000 && savings <10000):
//         console.log("Buy basic phone");
//         break;
//     default:
//         console.log("Buy later");       
// }

// //for loop
// for(i = 0;i<= 10;i++){
//     if(i % 2 ===0)
//     console.log("Even number is"+ i);
    
// } 

// for(let i=10;i>0;i--)
// {
//     if(i%2 !==0)
//     {
//         console.log("Odd number"+ i);
//     }
// }

// //while loop
// let i = 0;
// while(i<=10){
//     console.log("Number is" + i);
//     i++
// }

// //Do while loop
// let i = 0;
// do{
//     if(i % 2 !==0){
//     console.log("Odd number is"+ i);
//     }
//     i++; 
// }while(i<=10);

//for in loop

// let person ={
//     name : "Aravinth",
//     age : 18,
//     Gender : "Male"
// };
// for(let key in person){
//     console.log(key +":", person.key);
    
// }

// //Object
//  let person = {
//     name : "Aravinth",
//     gender : "male",
//     age : "18",
//     isAlive : true,
//     address:{
//         city : "Coimbatore",
//         pincode : 642109,
//     }
//  };


// // Object
//    let name = "Aravinth";
//     let gender = "male";
//     let age = 18;
//     isAlive = true;
//     let address = {
//         city : "Coimbatore",
//         pincode : 642109,
//     }
 
//  function greeting(){
//     let msg =`My name is ${name}, My age is${age}`;
//     console.log(msg);
    
//  }
//  greeting();

// //Factory function

// function CreatePerson(name){
//    let person={
//       name,
//       greeting(){
//          let msg = `my name is ${name}`;
//          console.log(msg); 
//       }
//    };
//    return person;
// }
// let aravinth = CreatePerson("aravinth");
// let hakai = CreatePerson("hakai");
// aravinth.greeting();
// hakai.greeting();

// function createperson(name) {
//     return{
//     name,
//     greeting()
//     {
//         let msg = `my name is ${this.name}`;
//         console.log(msg);
        
//     }
// }
// };
// let anbu = createperson("Andu");
// anbu.greeting();

// //Constructor function

// function Person(name){
//     this.name = name;
//     this.greeting = function(){
//         console.log(`my name is ${this.name}`);    
//     }
// }
// let person = new Person("Aravinth");
// person.greeting(); 


    


    
    
    
























