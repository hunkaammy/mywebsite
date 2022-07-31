var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var numThree = document.getElementById("num-three");
var addSum = document. getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
numThree.addEventListener("input", add);

function add(){
  var one = Number(numOne.value) || 0;
  var two = Number(numTwo.value) || 0;
  var three = Number(numThree.value) || 0;
  var sum = Number(one*two+three);
  addSum.innerHTML = "PRODUCT PRICE: " + sum + " Rs. ";
}