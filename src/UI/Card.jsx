import { useNavigate } from "react-router-dom";

const Card=({res,show})=>{
    const navigate=useNavigate();
    const redirecthandler=()=>{
        navigate(`/resturent/${res.info.id}`,{state:res})
    }

    return(
        <div className="card" onClick={redirecthandler}>
      <img
        className="card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${res.info.cloudinaryImageId}`}
        alt={res.info.name}
      />

      <h3 className="card-info">{res.info.name}</h3>
      {show && <>
       <p className="card-cuisine">
        {res.info.cuisines.join(", ")}
      </p>

      <h3 className="price">
        {res.info.costForTwo}
      </h3>
      </>}
     
    </div>
  

    )
}
export default Card;