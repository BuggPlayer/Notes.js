// debouncong debouncing_test()
let count = 0;

const getData = () => {
  console.log("fetching data ...", count++);
};

function debouncing_test(fn, delay) {
    // console.log("dddd");
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    const timer = setTimeout(() => {
      fn().apply(context , args);
    }, delay);
  };
}

const magicfunc = debouncing_test(getData, 300);
