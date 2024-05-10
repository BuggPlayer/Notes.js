import { useState, useEffect } from "react";
const useFetch = () => {
  const [data, setdata] = useState({});
  const [counter, setCounter] = useState(1);
  const fetData = async () => {
    let responses = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${counter}`
    );
    let jsonData = await responses.json();
    setdata(jsonData);
  };
  const handler = () => {
    setCounter((c) => c + 1);
  };
  useEffect(() => {
    fetData();
  }, [counter]);

  return { data, counter, setCounter: handler };
};

export default useFetch;
