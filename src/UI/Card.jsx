import { useNavigate } from "react-router-dom";

const Card=({res,show})=>{
    const navigate=useNavigate();
    const redirecthandler=()=>{
        navigate(`/resturent/${res._id}`,{state:res})
    }

    return(
        <div className="card" onClick={redirecthandler}>
      <img
        className="card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${res.cloudinaryImageId}`}
        alt={res.name}
      />

      <h3 className="card-info">{res.name}</h3>
      {show && <>
       <p className="card-cuisine">
        {res.cuisines.join(", ")}
      </p>

      <h3 className="price">
        {res.costForTwo}
      </h3>
      </>}
     
    </div>
  

    )
}
export default Card;