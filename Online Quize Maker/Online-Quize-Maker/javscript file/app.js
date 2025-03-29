// select DOM element
let heading = document.querySelector("#heading");
let container1 = document.querySelector(".container1");
let container = document.querySelector(".container");
let body = document.querySelector("body");

// flag
let flag = true;

// make "change function" which return promise
function change(text, time) {
  // promise check condition and then give
  return new Promise((fullfile, reject) => {
    if (flag === true) {
      setTimeout(() => {
        fullfile(text);
      }, time);
    } else {
      reject(console.log("Not response"));
    }
  });
}
// give argument in "change function"
change((heading.innerHTML = "Welcome"), 1000)
  .then(() => {
    return change((heading.style.transform = "scale(0)"), 400);
  })
  .then(() => {
    return change((heading.innerHTML = "To"), 0000);
  })
  .then(() => {
    return change((heading.style.transform = "scale(1)"), 1000);
  })
  .then(() => {
    return change(
      (heading.style.transform = "translateX(-100px) scale(0.5)"),
      (heading.style.transition = "1s"),
      1000
    );
  })
  .then(() => {
    return change((heading.innerHTML = "Game"), 1000);
  })
  .then(() => {
    return change(
      (heading.style.transform = "translateX(100px) scale(0.8)"),
      (heading.style.transition = "1s"),
      1000
    );
  })
  .then(() => {
    return change((heading.innerHTML = "Zone"), 1000);
  })
  .then(() => {
    return change(
      (heading.style.transform = "translateX(0px) scale(1)"),
      (heading.style.transition = "1s"),
      1000
    );
  })
  .then(() => {
    return change((heading.innerHTML = "Game Zone"), 1000);
  })
  .then(() => {
    return change(
      (container1.style.transform = "scale(0)"),
      (container.style.transform = "scale(1)"),
      body.classList.toggle("add"),
      1000
    );
  });