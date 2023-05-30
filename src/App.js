// import './App.css';
import React from "react";
import NavBar from './Common/NavBar'
import Footer from './Common/Footer'
import SingleScreen from './Screens/SingleScreen'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SingleScreen/>
        <Footer/>
    </div>
  );
}

export default App;
