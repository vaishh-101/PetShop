import React from 'react';
import HomeImg from "../../Assets/Homepage.jpg";

function Signup() {

  const centerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const inputStyle = {
    width: '100%', 
    padding: '10px', 
    fontSize: '19px', 
    border: "none",
    borderRadius: "8px"
  };

  const centerDivStyle = {
    width: "80vh",
    height: "70vh",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",

  };
  return (
       <div style={{backgroundImage: `url(${HomeImg})`, backgroundSize: 'cover', height: '100vh', ...centerStyle}}>
     <div style={centerDivStyle}>
        <h1 style={{fontSize: '30px', color: '#3D0C02' }}>Please Register Yourself</h1>
        <div>
        <input style={inputStyle} type="text" placeholder="Fullname" />
          <br /><br/>
          <input style={inputStyle} type="text" placeholder="Username" />
          <br /><br/>
          <input style={inputStyle} type="password" placeholder="Password" />
          <br /><br/>
          <div style={{ textAlign: 'center' }}>
              <button style={{ width: "100px", height: "40px", justifyContent: "center",  backgroundColor: '#3D0C02', borderRadius: "10px",
      color: 'white'}}>Submit</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Signup