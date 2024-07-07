import Bgcolor from "./color-change";
import "./App.css";
import "./bgcolor.css";

function App() {
  const color = [
    { color: "GREEN", key: 1 },
    { color: "RED", key: 2 },
    { color: "BLUE", key: 3 },
    { color: "ORANGE", key: 4 },
    { color: "PURPLE", key: 4 },
  ];
  return (
    <>
      <Bgcolor colorz={color} />
    </>
  );
}

export default App;
