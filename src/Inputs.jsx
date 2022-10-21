import { useState } from "react";

const Inputs = ({ handleSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  return (
    <>
      <form
        className="input-form"
        onSubmit={() => {
          this.SubmitButton.disabled = true;
          return handleSubmit;
        }}
      >
        <div className="name-input">
          <input
            type="text"
            placeholder="Vorname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nachname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="color-input">
          <div className="text-color-input">
            <input
              type="text"
              placeholder="red"
              style={{ backgroundColor: "rgba(255,0,0,0.3)" }}
              value={red}
              onChange={(e) => setRed(e.target.value)}
            />
            <input
              type="text"
              placeholder="green"
              style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
              value={green}
              onChange={(e) => setGreen(e.target.value)}
            />
            <input
              type="text"
              placeholder="blue"
              style={{ backgroundColor: "rgba(0,0,255,0.3)" }}
              value={blue}
              onChange={(e) => setBlue(e.target.value)}
            />
          </div>
          <div className="slider-color-input">
            <input
              type="range"
              value={red}
              min="0"
              max="255"
              onChange={(e) => setRed(e.target.value)}
            />
            <input
              type="range"
              value={green}
              min="0"
              max="255"
              onChange={(e) => setGreen(e.target.value)}
            />
            <input
              type="range"
              value={blue}
              min="0"
              max="255"
              onChange={(e) => setBlue(e.target.value)}
            />
          </div>
        </div>
        <input type="submit" name="SubmitButton" value="Submit" />
      </form>
    </>
  );
};

export default Inputs;
