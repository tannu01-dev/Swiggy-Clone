import "./../style/Checkout.css";
import { useNavigate, useOutletContext } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useOutletContext();

  console.log(import.meta.env.VITE_RZP_KEY);

  // Total Amount
  const itemTotal = cartItems.reduce((total, item) => {
    const price =
      (item.defaultPrice || item.price) / 100;
    return total + price * item.quantity;
  }, 0);

  // Razorpay Options
  const options = {
    key: import.meta.env.VITE_RZP_KEY,
    amount: parseInt(itemTotal * 100),
    currency: "INR",
    name: "Tannu",
    description: "Food Order",
    handler: function (response) {
      console.log("Payment Success");
      console.log(response);

      alert("Payment Successful");

      // Later:
      // navigate("/payment-success");
    },
    theme: {
      color: "#3399cc",
    },
  };

  // Payment Function
  const handlerPayment = () => {
    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="left-section">

          <div className="step">
            <div className="icon-box">👤</div>

            <div className="card1">
              <h2>Account</h2>

              <p>
                To place your order now, log in to your existing account or
                sign up.
              </p>

              <div className="btns">
                <button className="login-btn">LOG IN</button>
                <button className="signup-btn">SIGN UP</button>
              </div>
            </div>
          </div>

          <div className="step">
            <div className="icon-box">📍</div>

            <div className="card">
              <h2>Delivery Address</h2>
            </div>
          </div>

          <div className="step">
            <div className="icon-box">💳</div>

            <div className="card">
              <h2>Payment</h2>

              <button
                className="btn1"
                onClick={handlerPayment}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>

        <div className="Right-section">
          <div className="order-card">

            <div className="order-items">
              {cartItems.map((item) => {
                const info = item;

                const price =
                  (info.defaultPrice || info.price) / 100;

                return (
                  <div key={info.id} className="order-item">
                    <p>{info.name}</p>

                    <p>
                      ₹{price} × {item.quantity}
                    </p>
                  </div>
                );
              })}

              <hr />

              <div className="total">
                <span>Total</span>

                <span>₹{itemTotal}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;