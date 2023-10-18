import React from 'react';
import img from '../Assets/1.PNG'
import { useNavigate } from 'react-router-dom';
import HomeImg from "../Assets/Homepage.jpg";

function Home() {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const textContainerStyle = {
    marginLeft: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#704214',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const textSpacing = {
    margin: '0', 
    padding: '5px 0', 
  };

  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login'); 
  };

  const redirectToSignInPage = () => {
    navigate('/signup')
  }

  return (
    <div style={{backgroundImage: `url(${HomeImg})`, 
    backgroundSize: 'cover',}}>
    <div style={centerStyle}>
      <img
        src={img}
        alt="SQUIRREL"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      <div style={textContainerStyle}>
        <h4 style={{fontSize: "40px", fontFamily: "Harrington",  ...textSpacing }}>PETA'S VILLA !!!!!<br/>
        </h4>
        <h4 style={{ fontFamily: "Papyrus fantasy",  ...textSpacing }}> Welcome to the Villa</h4>
        <button style={buttonStyle} onClick={redirectToLoginPage}>Login</button>
        <button style={buttonStyle} onClick={redirectToSignInPage}>Register</button>
      </div>
    </div>
    </div>
  );
}

export default Home;
