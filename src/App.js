import { useState } from "react";
import "./App.css";
import BoxContent from "./BoxContent";
import SearchBox from "./SearchBox";
import ToggleButton from "./ToggleButton";

function App() {
  const [boxContent, setBoxContent] = useState("");
  const [color, setColor] = useState("black");
  const [hexValue, setHexValue] = useState("");
  return (
    <div className="App">
      <BoxContent boxContent={boxContent} color={color} hexValue={hexValue} />
      <SearchBox
        boxContent={boxContent}
        setBoxContent={setBoxContent}
        hexValue={hexValue}
        setHexValue={setHexValue}
      />
      <ToggleButton color={color} setColor={setColor} />
    </div>
  );
}

export default App;
