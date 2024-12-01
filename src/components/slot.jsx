import { useState } from "react";
import { TbRuler2 } from "react-icons/tb";

let Slot = ({ identity, p, booking,booked }) => {
  let [Book, setBook] = useState(booking);

  return (
    <div
      className={`${booked===true? "booked-slot" : "slot"}`}
      id={identity}
      onClick={p}
    >
      {""}{" "}
    </div>
  );
};

export default Slot;
