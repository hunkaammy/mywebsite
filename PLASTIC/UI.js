$(document).ready(function() {
setTimeout(popup, );
function popup() {
$("#logindiv").css("display", "block");
}
$("#login #cancel").click(function() {
$(this).parent().parent().hide();
});
$("#onclick").click(function() {
$("#contactdiv").css("display", "block");
});
$("#contact #cancel").click(function() {
$(this).parent().parent().hide();
});
// Contact form popup send-button click event.
$("#send").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var contact = $("#contactno").val();
var message = $("#message").val();
if (name == "" || email == "" || contactno == "" || message == ""){
alert("Please Fill All Fields");
}else{
if (validateEmail(email)) {
$("#contactdiv").css("display", "none");
}else {
alert('Invalid Email Address');
}
function validateEmail(email) {
var filter = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
if (filter.test(email)) {
return true;
}else {
return false;
}
}
}
});
// Login form popup login-button click event.
$("#loginbtn").click(function() {
var cnameLoc11 = $("#cnameLoc11").val();
var descLoc11 = $("#desc11").val();
if (cnameLoc11 == "" || descLoc11 == ""){
alert("PLEASE ENTER VALID SHOP NAME");
}else{
$("#logindiv").css("display", "none");
}
});
});
