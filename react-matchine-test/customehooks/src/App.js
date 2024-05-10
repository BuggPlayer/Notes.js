import "./App.css";

import useFetch from "./useFetch";
function App() {
  const { data, counter, setCounter } = useFetch();
  console.log(data, counter, setCounter);
  return (
    <div className="App">
      {/* {data?.map((item) => {
      })} */}
      <p>{data.title}</p>
      <button onClick={setCounter}>Increaced {counter}</button>
    </div>
  );
}

export default App;
