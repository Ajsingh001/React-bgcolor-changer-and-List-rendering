import { useState } from "react";
import "./bgcolor.css";
import List from "./list-render";

export default function Bgcolor({ colorz }) {
  const [color, setcolor] = useState("#414141");
  let change = (e) => {
    setcolor(e.target.value);
  };

  const colorz1 = colorz.map((i) => {
    return (
      <li key={i.key}>
        <button
          value={i.color}
          onClick={change}
          style={{ backgroundColor: i.color }}
        >
          {i.color}
        </button>
      </li>
    );
  });

  let data = [
    { name: "Arjun-Singh", id: "1" },
    { name: "Sartaj-Singh", id: "2" },
    { name: "Akash-halder", id: "3" },
    { name: "Gurpreet-singh-Multani", id: "4" },
    { name: "Aman-rajput", id: "5" },
    { name: "Harjot-singh-bhadurgharia", id: "5" },
  ];

  return (
    <>
      <div className="main1" style={{ backgroundColor: color }}>
        <header>
          <h1>Color changer</h1>
          <div id="list">
            <h1>This is Rendring-List of React-API Data </h1>
            <List data={data} />
          </div>
        </header>
        <div className="colorlane">
          <ul>{colorz1}</ul>
        </div>
      </div>
    </>
  );
}
