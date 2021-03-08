
var x = prompt("write your first name ");
var y = prompt("write your second name");
var c = x+" "+y ;
var z =prompt("do you like coast citys ?");
while (z != "yes" && z != "no" )
{
   z= prompt("do you like coast citys ?(your answer should be yes or no)" );
}
var a = prompt ("how many times you visited aqaba?")

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
function mohammad() {
   console.log ("i think your information is wronge")
}
if (x.length<3 ||y.length<3||a==0)
{
    mohammad()
}
