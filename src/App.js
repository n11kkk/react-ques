import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [list1, setList1] = useState([
    { name: 1, isSelected: false },
    { name: 2, isSelected: false },
    { name: 3, isSelected: false }
  ]);
  const [list2, setList2] = useState([
    { name: 4, isSelected: false },
    { name: 5, isSelected: false },
    { name: 6, isSelected: false }
  ]);

  const onClickItemList1 = (event) => {
    const target = event.target.id;
    // event.target.className =
    //   event.target.className == "ListButton"
    //     ? "ListButtonSelected"
    //     : "ListButton";
    const updatedList = list1.map((item) => {
      if (item.name == target) {
        console.log("found");
        return { ...item, isSelected: item.isSelected == false ? true : false };
      }
      return item;
    });
    setList1(updatedList);
    console.log(updatedList);
  };
  const onClickItemList2 = (event) => {
    const target = event.target.id;
    // event.target.className =
    //   event.target.className == "ListButton"
    //     ? "ListButtonSelected"
    //     : "ListButton";
    const updatedList = list2.map((item) => {
      if (item.name == target) {
        console.log("found");
        return { ...item, isSelected: item.isSelected == false ? true : false };
      }

      return item;
    });
    setList2(updatedList);
    console.log(updatedList);
  };
  const moveFromList1ToList2 = (event) => {
    const currList2 = list2;
    const currList1 = [];
    list1.map((item) => {
      if (item.isSelected == true) {
        currList2.push({ ...item, isSelected: false });
      } else {
        currList1.push({ ...item });
      }
    });
    setList2(currList2);
    setList1(currList1);
  };
  const moveFromList2ToList1 = () => {
    const currList1 = list1;
    const currList2 = [];
    list2.map((item) => {
      if (item.isSelected == true) {
        currList1.push({ ...item, isSelected: false });
      } else {
        currList2.push({ ...item });
      }
    });
    setList2(currList2);
    setList1(currList1);
  };
  return (
    <div className="App flex">
      <div className="ListTreeNode">
        <div className="ListParent">
          {list1.map((item) => (
            <button
              id={item.name}
              className="ListButton"
              onClick={function (event) {
                onClickItemList1(event);
              }}
            >
              {" "}
              {item.name}{" "}
            </button>
          ))}
        </div>
        <div className="ListParent">
          <button
            className="moveButton"
            onClick={(event) => moveFromList1ToList2(event)}
          >
            {" "}
            {">"}{" "}
          </button>
          <button
            className="moveButton"
            onClick={(event) => moveFromList2ToList1(event)}
          >
            {" "}
            {"<"}{" "}
          </button>
        </div>
        <div className="ListParent">
          {list2.map((item) => (
            <button
              id={item.name}
              className="ListButton"
              onClick={(event) => onClickItemList2(event)}
            >
              {" "}
              {item.name}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
