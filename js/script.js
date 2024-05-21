
// var name1 = 'waleed';
// var name2= ' abdullah';
// console.log(name1+name2);

// var firstName=window.prompt("enter your first name");
// var secondName=window.prompt("enter your second name");


//  function sayHi(  x , y    ){
//     var name1=x;
//     var name2=y;
//     var fullName=name1+name2;
//     return fullName
// }

// var x = sayHi(firstName,secondName);
// console.log(x);

//=====================================================

var userName= document.getElementById("name");
var userEmail= document.getElementById("email");
var userTele= document.getElementById("tele");
var userCountry= document.getElementById("country");

var disName=document.getElementById('disName');
var disEmail=document.getElementById('disEmail');
var disTele=document.getElementById('disTele');
var disCountry=document.getElementById('disCountry');



function Register(){
    disName.innerHTML='Hello ' + userName.value;
    disEmail.innerHTML= 'Email is: '+userEmail.value;
    disTele.innerHTML= 'Phone number is:' + userTele.value;
    disCountry.innerHTML= 'country name is:' + userCountry.value;

}

