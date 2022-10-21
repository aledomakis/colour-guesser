import "./index.css";

const Colourbox = ({ color }) => {
  return (
    <div
      className="colorbox"
      style={{
        backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
      }}
    ></div>
  );
};

export default Colourbox;
