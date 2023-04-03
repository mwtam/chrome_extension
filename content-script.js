console.log("content-script.js start");

// var someText = document.body.textContent;
// console.log(someText);

// var someText = document.body.innerHTML;
// console.log(someText);

var someText = document.body.getElementsByTagName("h1");
console.log(someText);

document.body.style.backgroundColor = "yellow";
// document.body.textContent = document.body.textContent.replace("Example", "<u>Example</u>");
var targetHTML = document.body.getElementsByTagName("h1")[0].innerHTML;
document.body.getElementsByTagName("h1")[0].innerHTML = targetHTML.replace("Example", "<u>Example</u>");

console.log("======");
var someText = document.body.getElementsByTagName("h1");
console.log(someText);

console.log("content-script.js end");