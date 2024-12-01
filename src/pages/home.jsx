import { useEffect } from "react";
import "../styles/home.css";
import { FaSearch } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

let HomePage = () => {
  let navigate = useNavigate();



  let openBooking = (e) => {
    e.preventDefault();
 
   
    navigate("/booking");
  };



  return (
    <div className="home">
    <div className="home-page">
      <div className="home-header">
        <header>
          <h2>
            <FaCarSide className="parking-icon" />
            My <span>Bespeaking</span>
          </h2>
        </header>
      </div>
      <div className="home-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search Registered Parkings" />
      </div>

      <div className="home-parkings">
        <div className="parking" onClick={openBooking}>
          <p>Parking Number 1 , ideate Fest</p>
        </div>
        <div className="parking">
          <p>Parking Number 1 , ideate Fest</p>
        </div>
        <div className="parking">
          <p>Parking Number 1 , ideate Fest</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
