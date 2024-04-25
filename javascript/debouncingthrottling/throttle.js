
let shoot = document.getElementById("myButton");

function throttling(cb, delay) {
  console.log("cb", cb, delay);
  let calling = true;
  return function (...args) {
    if (!calling) return;
    cb(...args);
    calling = false;

    setTimeout(() => {
      calling = true;
    }, delay);
  };
}

function clickme() {
  console.log("clicked");
}

shoot.addEventListener("click", throttling(clickme, 1000));
