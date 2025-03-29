// select DOM elements
let userName = document.querySelector(".name");
let userEmail = document.querySelector(".email");
let Submit = document.querySelector(".submit");
let loginPage = document.querySelector(".container");
let gameRulePage = document.querySelector(".gameRules");

// when button click so user value stor in local storage
Submit.addEventListener("click", () => {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("userEmail", userEmail.value);
});
// get user name and email from local storage
let name = localStorage.getItem("userName");
let email = localStorage.getItem("userEmail");

if (name.length > 0) {
  // alert(`Hello ${name} you are login`);
  loginPage.style.transform = "scale(0)";
  gameRulePage.style.transform = "scale(1)";
}