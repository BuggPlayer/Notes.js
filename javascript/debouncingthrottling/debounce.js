
let searchInput = document.getElementById("search-input");

function debounce(cb, deplay = 1000) {
  let clear;
  return (...args) => {
    clearTimeout(clear);
    clear = setTimeout(() => cb(...args), deplay);
  };
}

function inputFunc(params) {
  console.log("event", params.target.value);
}

searchInput.addEventListener("input", debounce(inputFunc, 2000));
