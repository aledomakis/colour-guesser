import Colourbox from "./Colourbox";
import Inputs from "./Inputs";
import { useState } from "react";
import useColorGenerator from "./useColorGenerator";
import { renderIntoDocument } from "react-dom/test-utils";

function App() {
  const [trueColor, setTrueColor] = useState({
    red: 255,
    green: 200,
    blue: 255,
  });
  const generatedColor = useColorGenerator();
  const handleGenerate = () => {
    setTrueColor(generatedColor);
    console.log(trueColor);
  };
  return (
    <div className="container">
      <h1>GUESS THE COLOR</h1>
      <Colourbox color={trueColor} />
      <Inputs />
      <button onClick={handleGenerate}>Create color</button>
    </div>
  );
}

export default App;
