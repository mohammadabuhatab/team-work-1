var x;
var y;
var c;
var z;
var a;

function firstNameWrong() {
    alert ("we think your name is not true, pleas write your real name");
     x = prompt("write your first name ");
 }
 function secondNameWrong() {
     alert ("we think your name is not true, pleas write your real name");
     y = prompt("write your second name");
 }
 x = prompt("write your first name ");
if (x.length<3 )
{
    firstNameWrong()
}

 y = prompt("write your second name");


if (y.length<3){
secondNameWrong()
}

 c = x+" "+y ;
 z =prompt("do you like coast citys ?");
while (z != "yes" && z != "no" )
{
   z= prompt("do you like coast citys ?(your answer should be yes or no)" );
}
 a = prompt ("how many times you visited aqaba? ")

console.log("your full name is :"+x+' '+y);

document.write("<h1>"+ " welcome here " + c +"</h1>" );

if(z=="yes")
{
    document.write("<h3>" + "you are in the right place" + "<h3>");
}
else
{
    document.write("<h3>" + "please check to the linkes below" + "<h3>");
}
document.write("you are visit aqaba "+ a +" times") 

for (var i =0 ; i<a ; i++)
{
    document.write ("<img id='smallPhoto' src='images/2.jpg'>");
}
if (a==0){
    document.write(" <mark >you shold visit aqaba</mark>") 
}