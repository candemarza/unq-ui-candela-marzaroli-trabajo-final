import "./css/Paint.css";
import React from "react";

//tool selected es chosen para estilo :P
const Paint = () => {
  return (
    <>
      <div className="paint-window">
        <div className="paint-titleBar">
          <div className="paint-icon"></div>
          <img className='paint-logo'  src={"assets/paint-tools/MS_Paint_Logo.png"}/>
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
            <img className="paint-tool" src={`assets/paint-tools/star.jpeg`}/>
            <img className="paint-tool" src={`assets/paint-tools/select.jpeg`}/>
            <img className="paint-tool" src={`assets/paint-tools/eraser.jpeg`}/>
            <img className="paint-tool" src={`assets/paint-tools/paint.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/dropper.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/zoom.jpeg`}/>
            <img className="paint-tool" src={`assets/paint-tools/pencil.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/brush.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/spray.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/a.jpeg`}/> 
            <img className="paint-tool" src={`assets/paint-tools/straight.jpeg`}/>
            <img className="paint-tool" src={`assets/paint-tools/s.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/rect.jpeg`}/>   
            <img className="paint-tool" src={`assets/paint-tools/l.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/oval.jpeg`}/>    
            <img className="paint-tool" src={`assets/paint-tools/squoval.jpeg`}/>
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
