import "../styles/payment.css";
import { ImCross } from "react-icons/im";
import { HiMiniCurrencyRupee } from "react-icons/hi2";

import { RxCross2 } from "react-icons/rx";

let PaymentPage = ({ exit ,booking=false}) => {






  return (
    <div className="payment-page">
      <h2>
        {" "}
        Pay <HiMiniCurrencyRupee className="rupee-icon" />
      </h2>
      <div className="exit-payments" onClick={exit}>
        <RxCross2 />
      </div>

      <div className="payment-form" onSubmit={booking}>
        <form action="">
          <input type="text" placeholder="Name On Card" />
          <input type="text" placeholder="Card Number" />
          <input type="date" />
          <input type="number" placeholder="CVD" />
          <p>
            
            
            Card Type: - <input type="radio" name="card-type" id="card-type" />
            Visa <input type="radio" name="card-type" id="card-type" />
            Dankort{" "}
          </p>
          <button type="submit" onClick={booking}>Pay</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
