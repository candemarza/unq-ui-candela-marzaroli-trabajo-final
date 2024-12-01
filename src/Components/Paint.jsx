import "./css/Paint.css";
import "../Home/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//tool selected es chosen para estilo :P
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
              style={{ backgroundColor: "#000" }}
            ></div>
            <div
              className="color main c-two"
              style={{ backgroundColor: "#fff" }}
            ></div>
          </div>
          <div className="all-colors">
            <div className="color" style={{ backgroundColor: "#000" }} />
            <div className="color" style={{ backgroundColor: "#808080" }} />
            <div className="color" style={{ backgroundColor: "#800000" }} />
            <div className="color" style={{ backgroundColor: "#808000" }} />
            <div className="color" style={{ backgroundColor: "#008000" }} />
            <div className="color" style={{ backgroundColor: "#008080" }} />
            <div className="color" style={{ backgroundColor: "#000080" }} />
            <div className="color" style={{ backgroundColor: "#800080" }} />
            <div className="color" style={{ backgroundColor: "#808040" }} />
            <div className="color" style={{ backgroundColor: "#004040" }} />
            <div className="color" style={{ backgroundColor: "#0080FF" }} />
            <div className="color" style={{ backgroundColor: "#004080" }} />
            <div className="color" style={{ backgroundColor: "#4000FF" }} />
            <div className="color" style={{ backgroundColor: "#804000" }} />
            <div className="color" style={{ backgroundColor: "#FFF" }} />
            <div className="color" style={{ backgroundColor: "#C0C0C0" }} />
            <div className="color" style={{ backgroundColor: "#f00" }} />
            <div className="color" style={{ backgroundColor: "#FF0" }} />
            <div className="color" style={{ backgroundColor: "#0F0" }} />
            <div className="color" style={{ backgroundColor: "#0FF" }} />
            <div className="color" style={{ backgroundColor: "#00F" }} />
            <div className="color" style={{ backgroundColor: "#F0F" }} />
            <div className="color" style={{ backgroundColor: "#FFFF80" }} />
            <div className="color" style={{ backgroundColor: "#00FF80" }} />
            <div className="color" style={{ backgroundColor: "#80FFFF" }} />
            <div className="color" style={{ backgroundColor: "#8080FF" }} />
            <div className="color" style={{ backgroundColor: "#FF0080" }} />
            <div className="color" style={{ backgroundColor: "#FF8040" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Paint;
