//alert
const button1 = document.querySelector(".btn-1");
function alertbtn1() {
  alert('I am also example 1');
};
button1.addEventListener('click', alertbtn1);
const btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {
//   console.log("Clicked");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("Mouse over");
// });

// btn.addEventListener("mouseout", () => {
//   console.log("Mouse out");
// });


//adding mouseover
const newBackgroundColor = document.querySelector(".box-2");
function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "lightblue";
}
newBackgroundColor.addEventListener('mouseover', changeBgColor);

//width
const newWidth = document.querySelector(".box-3");
function changeWidth() {
  newWidth.style.width = "20px";
}
newWidth.addEventListener('click', changeWidth);