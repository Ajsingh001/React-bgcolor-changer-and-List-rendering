import Bgcolor from "./color-change";
import "./App.css";
import "./bgcolor.css";

function App() {
  const colordata = [
    { color: "GREEN", key: 1 },
    { color: "RED", key: 2 },
    { color: "BLUE", key: 3 },
    { color: "ORANGE", key: 4 },
    { color: "PURPLE", key: 5 },
  ];
  return (
    <>
      <Bgcolor colordata={colordata} />
    </>
  );
}

export default App;
