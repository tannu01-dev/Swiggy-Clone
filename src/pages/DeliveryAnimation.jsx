import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import deliveryVideo from "../assets/d0F492p4D8S3iBaKIY.webm"; // apni file ka naam
import "./../style/Deliver.css"

const DeliveryAnimation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="delivery-animation">
      <video
        src={deliveryVideo}
        autoPlay
        muted
        playsInline
        className="delivery-video"
      />
    </div>
  );
};

export default DeliveryAnimation;