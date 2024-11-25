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
            <img className="paint-tool" src={`../assets/paint-tools/1.jpeg`}/>
            <img className="paint-tool" src={`../assets/paint-tools/2.jpeg`}/>
            <img className="paint-tool" src={`../assets/paint-tools/3.jpeg`}/>
            <img className="paint-tool" src={`../assets/paint-tools/4.jpeg`}/>
            <img className="paint-tool" src={`../assets/paint-tools/5.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/6.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/7.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/8.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/9.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/10.jpeg`}/> 
            <img className="paint-tool" src={`../assets/paint-tools/11.jpeg`}/>
            <img className="paint-tool" src={`../assets/paint-tools/12.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/13.jpeg`}/>   
            <img className="paint-tool" src={`../assets/paint-tools/14.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/15.jpeg`}/>    
            <img className="paint-tool" src={`../assets/paint-tools/16.jpeg`}/>
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
                className="color main one"
                style={{ backgroundColor: "#000" }}
              ></div>
              <div
                className="color main two"
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
