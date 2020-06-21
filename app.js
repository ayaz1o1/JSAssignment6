
// 21-25
// 1. take 2 input first name , last name, n merge in full name
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var fullName = fname + " " + lname ;
alert("Welcome! " + fullName);

// 2 Favourite mobile model

var fmobile = prompt("enter your favourite mobile model");
var lstring = fmobile.length ;
document.write("My favourite mobile model is " + fmobile + "<br>");
document.write("Length of string is: " + lstring);


// 3.find index of n in pakistani

var name = "Pakistani" ;
var nindex = name.indexOf("n");
document.write("String is:  Pakistani" + "<br>");
document.write("index of n is: " + nindex);


// 4. find last index of letter l

var name = "Hello world" ;
var nindex = name.lastIndexOf("l");
document.write("String is:  Hello world " + "<br>");
document.write("Last index of letter l is: " + nindex);


// 5. find the character at index 3

var name = "Pakistani" ;
var char = name.charAt(3);
document.write("String is: " + name + "<br>");
document.write("Character at index 3 is: " + char + "<br>");


// 6 concatensate

var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var fullName = fname + " " + lname ;
alert("Welcome! " + fullName);


// 7. after replacement 

var name = "Hyderabad" ;
var nname = name.slice(5);
var newn = "Islam" + nname;
document.write("City : "  + name + "<br>" );
document.write("after replacement : "  + newn + "<br>" );


// 8. replace and with &


var message = "Ali and Sami are best friends.They play cricket and football together.";

for (let i = 0; i < message.length; i++) {
    var nmessage = message.replace(/and/g , "&");
alert(i + nmessage); 
document.write(nmessage);   
    break;
}


// 9. value n type


var value = "472";
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof(value) + "<br>");
document.write("Value: " + value + "<br>");
value = +(value);
document.write("Type: " + typeof(value) + "<br>");

// 10. to upper case

var input = prompt("Enter any word");
document.write("User input: " +   input + "<br>");
input = input.toUpperCase();
document.write("UPPER CASE : " +   input + "<br>");


// 11 . show user input in title case

var input = prompt("Enter any word");
for (let i = 0; i < input.length; i++) {
    if (input[0] !== " "){
   var  ninput = input.slice(0, 1);
//    alert(ninput);
   ninput = ninput.toUpperCase();
   input = input.slice(1);
//    alert(input);
   var input = ninput + input ;
//    alert(input);
   break;
  }

  
  }

  for (let i = 0; i < input.length; i++) {
    //   alert(input + " second loop" + i);
      if (input[i] == " "){
        var  ninput = input.slice(i, i+2);
        // alert( "sexond loop"+ ninput + i);
        ninput = ninput.toUpperCase();
        input = input.slice(0, i) + ninput + input.slice(i+2);
        // alert("sexond loop " + input + i ); 
        
         
       }
      
  }
  document.write(input);





  //12. convert 35.36 to 3536

  var input = 35.36;
input = input.toString();
alert(input);
  for (let i = 0; i < input.length; i++) {
      
      if (input[i] == "."){
        
        input = input.slice(0, i)  + input.slice(i+1);
        alert("second loop " + input  );        
       }
  }
  document.write(input)


  
// 13. enter only valid char

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  for( i = 0; i < x.length; i++){
  if (x.charAt(i) == "!" || x.charAt(i) == "," || x.charAt(i) == "."
  || x.charAt(i) == "@") {
    alert("enter valid name");
    return false;
  }
  }
}



// 14. user input searching in an array

var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;

var uinput = prompt("Welcome to ABC Bakery, what do you want to order sir/madam");
uinput = uinput.toLowerCase();


for (let i = 0; i < A.length; i++) {
  
  
  if (A.indexOf(uinput) >= 0) {
    alert(uinput + "available at index " + i + "in our Bakery");
    
  }
  else {
    alert("We are sorry " + uinput + " is not available in our bakery");
  }
  break;
} 

// 15. ENTER password with validation min 6 char + alphanumeric + first char not number

var upassword = prompt("Please enter password", "password should be alphanumeric, at least 6 character long, should not start with number");
var illegalchar = true;
if ( !isNaN(upassword.charAt(0)) == false){
  illegalchar = false;
  // var letters = /^[0-9a-zA-Z]+$/;
  var letters1 = /^[a-zA-Z]+$/;
  var letters2 = /^[0-9]+$/;

  alert("first char is not a number");
  alert(typeof(upassword));
  for (let i = 0; i < upassword.length; i++) {
   

// if((upassword.charAt(i)).match(letters1) ) {
if ( upassword.charAt(i).match(letters2) && upassword.length >= 6) {
  alert("number found and its length is minimum 6" );

  for (let j = 0; j < upassword.length; j++) {
    if ((upassword.charAt(j)).match(letters1)) {
      alert("character found");
      illegalchar = true; 

       }
    
      }

    }  
  }



   if ( illegalchar === true){
     alert("password is valid");
     document.write("Entered password : " + upassword + "<br>")
     document.write("Password is valid " + "<br>");
   }
   else {
     illegalchar = false;
     alert("Sorry password is not valid , okease enter a valid password");
     document.write("Entered password : " + upassword + "<br>")
     document.write("Password is invalid because first character is not number OR it does not contain alphabet n numbers OR its not minimum 6 characters long " + "<br>");
   }
   


 }

  else {
    alert("Sorry password is not valid , okease enter a valid password");
    document.write("Entered password : " + upassword + "<br>")
     document.write("Password is invalid" + "<br>");
  }
  


  // 16. split into array

  var university = "University of Karachi" ;
var newUniversity = university.split("");
document.write(newUniversity);
for (let i = 0; i < newUniversity.length; i++) {

document.write(newUniversity[i] + "<br>");  
}

//17. last index

var userinput = prompt("Please input Pakistan");
document.write("User input : " + userinput + "<br>");
document.write("Last character : " + userinput.charAt(userinput.length -1) + "<br>");



// 18. occurence of " the"
//  You have a string 
//  “The quick brown fox jumps over the lazy dog”. 
//  Write a program to count number of occurrences of word 
//  “the” in given string. 

var Text = "The quick brown fox jumps over the lazy dog" ;
var occurence = 0;
alert(Text);
for (let i = 0; i < Text.length; i++) {
  if(Text.slice(i, i+3).toLowerCase() == "the"){
    occurence = ++occurence ;
    alert("occurence " + occurence);
    
    alert("the found");
  }

  
}
document.write( "Text "  + Text + "<br>");
document.write("There are " + occurence + "occurence (s)  of 'the' " + "<br>");


//chap 21-25 completed at this point



// chapter 26-30 started
// 1. enter any number and round, ceil, floor
var number = +prompt("enter any number including fractional numbers");
if ( number > 0 ){
alert("value is positive");

document.write("number: " + number + "<br>");
document.write("round off value: " + Math.round(number) + "<br>");
document.write("floor value: " + Math.floor(number) + "<br>");
document.write("ceil value: " + Math.ceil(number) + "<br>");
}

else {
  alert("value is negative, please enter positive number");
}


// 2. negative float value

var number = parseFloat(prompt("enter negative float value"));
if (number < 0 && (number % 1 !== 0 ) ){
  alert("number is negative and float value");
  document.write(" number: " + number +"<br>");
  document.write("round off number : " + Math.round(number) +"<br>");
  document.write(" ceil value of number : " + Math.ceil(number) +"<br>");
  document.write(" Floor value : " + Math.floor(number) +"<br>");

}

else {
  alert("number is invalid , please enter negative float value");
}

// 3. absolute value
var number = +prompt("enter any number");

if ( number < 0 ){
  number = number* -1;
document.write(" The absolute value of -" + number + " is " + number);  
}

else {
  document.write(" The absolute value of " + number + " is " + number);
}



//4. random dice value

document.write("<input onclick='dicefun()' type='button' value='Dice through'>");

function   dicefun(){
  // var randomnumber = prompt(" enter any number form 1 to 10");
  var improvedNum = Math.random() * 10 + 1;
  var newNum = Math.floor(improvedNum);
  document.write("Random dice value: " + newNum);
}


//5, random coin value

document.write("<input onclick='dicefun()' type='button' value='Coin toss'>");

function   dicefun(){
  // var randomnumber = prompt(" enter any number form 1 to 10");
  var improvedNum = Math.random() * 2 + 1;
  var newNum = Math.floor(improvedNum);
  if ( newNum == 2){
    document.write("Random coin value : Heads " + newNum);

  }

  else {
    document.write("Random coin value : Tails " + newNum);

  }
}



// 6 . random number between 1 - 100

document.write("<input onclick='dicefun()' type='button' value='Random number between 1-100'>");

function   dicefun(){
  // var randomnumber = prompt(" enter any number form 1 to 10");
  var improvedNum = Math.random() * 100 + 1;
  var newNum = Math.floor(improvedNum);
  document.write("Random number between 1 -100 is: " + newNum);

}


// 7. user weight 

var userweight = prompt("enter your weight");
if (userweight % 1 == 0 ) {
  userweight = parseInt(userweight);
  document.write("The weight of use is: " + userweight+ "kilograms");
}

else {
  userweight = parseFloat(userweight);
  alert("else executed");
  document.write("The weight of use is: " + userweight+ "kilograms");

}
