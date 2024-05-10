import "./App.css";
import { useState } from "react";
const data = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
];
function App() {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);

  const handleClick = (id, title, direction) => {
    console.log(id, title);
    if (direction === "LEFT") {
      let copyList = [...leftItems];
      const itemToMove = leftItems[title];
      const newArray1 = leftItems.filter((item, i) => {
        console.log(item === title);
      });
      console.log(newArray1);
      // setRightItems(newArray1);
      // let copyy = leftItems.filter((value, index, arr) => {});
      // console.log("co", copyList);
      // copyList = checkedList(copyList, id, checked);
      //   console.log(copyList);
      setLeftItems(copyList);
      // } else {
      //   let copyList = [...rightItems];
      //   copyList = checkedList(copyList, id, checked);
      //   setRightItems(copyList);
      // }
    }
  };
  return (
    <div className="App">
      <h1>Transfer List</h1>
      <div className="container">
        <div className="box">
          {leftItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handleClick(id, title, "LEFT")}
              className={`item ${checked && "checked"}`}
              id={id}
              key={id}
            >
              {title}
            </div>
          ))}
        </div>

        <div className="box">
          {rightItems.map(({ title, id, checked }) => (
            <div
              // onClick={() => handleClick(id, checked, "RIGHT")}
              className={`item ${checked && "checked"}`}
              id={id}
              key={id}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
