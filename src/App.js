import Colourbox from "./Colourbox";

function App() {
  return (
    <div className="container">
      <h1>GUESS THE COLOR</h1>
      <Colourbox />
      <div className="name-input">
        <input type="text" placeholder="Vorname" />
        <input type="text" placeholder="Nachname" />
      </div>
      <div className="color-input">
        <div className="text-color-input">
          <input
            type="text"
            placeholder="red"
            style={{ backgroundColor: "rgba(255,0,0,0.3)" }}
          />
          <input
            type="text"
            placeholder="green"
            style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
          />
          <input
            type="text"
            placeholder="blue"
            style={{ backgroundColor: "rgba(0,0,255,0.3)" }}
          />
        </div>
        <div className="slider-color-input">
          <input type="range" style={{ trackcolor: "red", color: "green" }} />
          <input type="range" />
          <input type="range" />
        </div>
      </div>
    </div>
  );
}

export default App;
