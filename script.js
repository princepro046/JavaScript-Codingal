var msg = "hi my name is Arham!"
var search_position = msg.search("doing");
// document.getElementById("search_result").innerHTML = search_position

var x = 70;
var y = 90;
document.write(x+y);
document.write("<br>")
document.write(String(x)+String(y));
document.write("<br>")

try{
     alert("Greetings Sir");

}
catch(err) {
             document.getElementById("error_message").innerHTML = err.message;
}
add = (x,y) => x + y;
document.write("<br>" + add(150,84));
sub = (a,b) => a + b;
document.write("<br>" + sub(69,20));
divide = (x,y) => x + y;
document.write("<br>" + divide(80,2));



