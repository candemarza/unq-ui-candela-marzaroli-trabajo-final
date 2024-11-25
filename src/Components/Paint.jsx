import img from "../assets/paint-frame-horizontal.png";
import "./css/Paint.css";

const Paint = () => {
  return (
    <>
      <div className="paint-window">
        <div className="paint-titleBar">
          <div className="paint-icon"></div>
          <div className="paint-title">ui - Paint</div>
          <div className="paint-buttons">
            <div className="paint-button">_</div>
            <div className="paint-button">[]</div>
            <div className="paint-button x">x</div>
          </div>
        </div>
        <div className="paint-configBar">
          <div className="paint-config">File</div>
          <div className="paint-config">Edit</div>
          <div className="paint-config">View</div>
          <div className="paint-config">Image</div>
          <div className="paint-config">Options</div>
          <div className="paint-config">Help</div>
        </div>
        <div className="paint-middle">
          <div className="paint-tools-bar">
            <div className="paint-tools">
                <div className="paint-tool">1</div>
                <div className="paint-tool">2</div>
                <div className="paint-tool">3</div>
                <div className="paint-tool">4</div>
                <div className="paint-tool">5</div>
                <div className="paint-tool">6</div>
                <div className="paint-tool">7</div>
                <div className="paint-tool">8</div>
                <div className="paint-tool">9</div>
                <div className="paint-tool">10</div>
                <div className="paint-tool">11</div>
                <div className="paint-tool">12</div>
                <div className="paint-tool">13</div>
                <div className="paint-tool">14</div>
                <div className="paint-tool">15</div>
                <div className="paint-tool">16</div>
            </div>
            <div className="paint-weirdSideRectangle" />
          </div>
            <div className="paint-canvas">
              <h1>Canvas</h1>
            </div>
        </div>
          <div className="paint-colorBar">
            <div className="paint-mainColors">
              <div
                className="color main-1"
                style={{ backgroundColor: "#000" }}
              ></div>
              <div
                className="color main-2"
                style={{ backgroundColor: "#fff" }}
              ></div>
            </div>
            <div className="all-colors">
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#800000" }} />
              <div className="color" style={{ backgroundColor: "#808000" }} />
              <div className="color" style={{ backgroundColor: "#008000" }} />
              <div className="color" style={{ backgroundColor: "#008080" }} />
              <div className="color" style={{ backgroundColor: "#000080" }} />
              <div className="color" style={{ backgroundColor: "#800080" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#fff" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#f00" }} />
              <div className="color" style={{ backgroundColor: "#ff0" }} />
              <div className="color" style={{ backgroundColor: "#0f0" }} />
              <div className="color" style={{ backgroundColor: "#0ff" }} />
              <div className="color" style={{ backgroundColor: "#00f" }} />
              <div className="color" style={{ backgroundColor: "#f0f" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              <div className="color" style={{ backgroundColor: "#000" }} />
              
            </div>
          </div>
        </div>
    </>
  );
};

export default Paint;
