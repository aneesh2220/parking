import { useState } from "react";
import "../styles/bookingPage.css";
import { FaCarSide } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "../libs/firebase.js"; // Adjust according to your Firebase file path
import Slot from "../components/slot.jsx";
import PaymentPage from "./payment.jsx";
import { useNavigate } from "react-router-dom";

let BookingPage = (exit, booking, identity) => {
  const [docIds, setDocIds] = useState([]);

  // Fetch document IDs from Firebase when the component mounts
  useEffect(() => {
    const fetchDocumentIds = async () => {
      const querySnapshot = await getDocs(collection(dataBase, "slots"));
      let ids = querySnapshot.docs.map((val) => ({ id: val.id, ...val.data() })); // Get the IDs of the documents
      setDocIds(ids); // Store the IDs in the state
    };

    fetchDocumentIds();
  }, []);

  let [payment, setPayment] = useState(false);
  let [Book, setBook] = useState(booking);
  let navigate = useNavigate();

  let handleExit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <ImExit className="exit-icon" onClick={handleExit} />

        <h2>
          <FaCarSide className="parking-icon" />
          My <span>Bespeaking</span>
        </h2>
      </div>
      {payment === true ? (
        <PaymentPage
          exit={() => {
            setPayment(false);
          }}
          booking={(e) => {
            e.preventDefault();
            setBook(true);
            console.log("booked")
          }}
        />
      ) : (
        <div />
      )}

      <div className="booking-slots">
      {docIds.map((index) => {
            return(<Slot booked={index.booked} identity={index} p={()=>setPayment(true)} ></Slot>)
            
        })}
         


      </div>
    </div>
  );
};

export default BookingPage;
