import Inputs from "./Inputs";
import { useEffect, useState } from "react";
import useColorGenerator from "./useColorGenerator";
import { renderIntoDocument } from "react-dom/test-utils";

function App() {
  const [trueColor, setTrueColor] = useState({
    red: 255,
    green: 200,
    blue: 255,
  });
  const generatedColor = useColorGenerator();

  //generate initial Color when Page is called
  useEffect(() => {
    setTrueColor(generatedColor);
  }, []);

  //generate Color every time the user submits a color
  const generateNewColor = () => {
    setTrueColor(generatedColor);
  };
  return (
    <div className="container">
      <h1
        style={{
          color: `rgb(${trueColor.red},${trueColor.green},${trueColor.blue})`,
        }}
      >
        GUESS THE COLOR
      </h1>
      <div
        className="colorbox"
        style={{
          backgroundColor: `rgb(${trueColor.red},${trueColor.green},${trueColor.blue})`,
        }}
      ></div>
      <Inputs handleSubmit={generateNewColor} />
    </div>
  );
}

export default App;
