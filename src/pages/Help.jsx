import { useState } from "react";
import "./../Style/Help.css";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Go to Orders section and click on your current order to track it."
    },
    {
      question: "How do I cancel my order?",
      answer: "Open your order and click on Cancel Order if cancellation is available."
    },
    {
      question: "How can I get a refund?",
      answer: "Refund will be processed automatically if your order is cancelled or eligible."
    },
    {
      question: "Payment related issues",
      answer: "Check your payment history or contact customer support."
    },
    {
      question: "Restaurant Partner Support",
      answer: "Restaurant partners can contact the Swiggy Partner Support team."
    },
    {
      question: "Contact Customer Care",
      answer: "You can contact customer care through the Help section of the app."
    }
  ];

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="help">
      <div className="help-header">
        <h1>Help & Support</h1>
        <p>Let's take a step ahead and help you better.</p>
      </div>

      <div className="help-box">
        <h2>Frequently Asked Questions</h2>

        {faqs.map((item, index) => (
          <div key={index}>
            <div
              className="help-item"
              onClick={() => handleClick(index)}
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {openIndex === index && (
              <div className="answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;