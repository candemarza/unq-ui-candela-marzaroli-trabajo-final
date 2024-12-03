import "./css/Paint.css";
import React from "react";
import { FaRegWindowMinimize, FaRegWindowRestore } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Paint = ({ children }) => {
  return (
    <>
      <div className="paint-window">
        <div className="paint-titleBar">
          <div className="paint-icon"></div>
          <img
            className="paint-logo"
            src={"assets/paint-tools/MS_Paint_Logo.png"}
          />
          <div className="paint-title">ui - Paint</div>
          <div className="paint-buttons">
            <div className="paint-button">
              <FaRegWindowMinimize />
            </div>
            <div className="paint-button">
              <FaRegWindowRestore />
            </div>
            <div className="paint-button x">
            <IoClose/>
            </div>
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
              <img src={`assets/paint-tools/star.png`} />
              <img src={`assets/paint-tools/select.png`} />
              <img src={`assets/paint-tools/eraser.png`} />
              <img src={`assets/paint-tools/paint.png`} />
              <img src={`assets/paint-tools/dropper.png`} />
              <img src={`assets/paint-tools/zoom.png`} />
              <img src={`assets/paint-tools/pencil.png`} />
              <img src={`assets/paint-tools/brush.png`} />
              <img src={`assets/paint-tools/spray.png`} />
              <img src={`assets/paint-tools/a.png`} />
              <img src={`assets/paint-tools/straight.png`} />
              <img src={`assets/paint-tools/s.png`} />
              <img src={`assets/paint-tools/rect.png`} />
              <img src={`assets/paint-tools/l.png`} />
              <img src={`assets/paint-tools/oval.png`} />
              <img src={`assets/paint-tools/squoval.png`} />
            </div>
            <div className="paint-weirdSideRectangle" />
          </div>
          <div className="paint-canvas-greySpace">
            <div className="paint-canvas">{children}</div>
          </div>
        </div>
        <div className="paint-colorBar">
          <div className="paint-mainColors">
            <div
              className="color main c-one"
              style={{ backgroundColor: "#010100" }}
            ></div>
            <div
              className="color main c-two"
              style={{ backgroundColor: "#fffefe" }}
            ></div>
          </div>
          <div className="all-colors">
            <div className="color" style={{ backgroundColor: "#010100" }} />
            <div className="color" style={{ backgroundColor: "#887e7d" }} />
            <div className="color" style={{ backgroundColor: "#731f41" }} />
            <div className="color" style={{ backgroundColor: "#af3762" }} />
            <div className="color" style={{ backgroundColor: "#2e555c" }} />
            <div className="color" style={{ backgroundColor: "#1d4e8e" }} />
            <div className="color" style={{ backgroundColor: "#5c96a2" }} />
            <div className="color" style={{ backgroundColor: "#8507c2" }} />
            <div className="color" style={{ backgroundColor: "#2a17d5" }} />
            <div className="color" style={{ backgroundColor: "#3d545c" }} />
            <div className="color" style={{ backgroundColor: "#a884b6" }} />
            
            <div className="color" style={{ backgroundColor: "#fffefe" }} />
            <div className="color" style={{ backgroundColor: "#cbbdbc" }} />
            <div className="color" style={{ backgroundColor: "#e74183" }} />
            <div className="color" style={{ backgroundColor: "#f4a5a5" }} />
            <div className="color" style={{ backgroundColor: "#81d0f1" }} />
            <div className="color" style={{ backgroundColor: "#58a8f1" }} />
            <div className="color" style={{ backgroundColor: "#d4f2fc" }} />
            <div className="color" style={{ backgroundColor: "#cc7cf5" }} />
            <div className="color" style={{ backgroundColor: "#6f7df7" }} />
            <div className="color" style={{ backgroundColor: "#9bd5eb" }} />
            <div className="color" style={{ backgroundColor: "#ebd5f4" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Paint;
