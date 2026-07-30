import { useOutletContext } from "react-router-dom";
import Courosel from "../UI/Courosel";
import Card from "../UI/Card";
import "./../style/Home.css"

const Home=()=>{
    const {resturants,loading}=useOutletContext();
    
    return(
        <div className="home">
            <div className="home-courosel">
                <Courosel></Courosel>
            </div>
            <h2 className="home-heading">Resturant with online food in Noida</h2>
            
            <div className="home_card-container">
  {resturants.map((res) => (
    <Card key={res.info.id} res={res} show={true}></Card>
  ))}
    {/* // <div className="card" key={res.info.id} >
    //   <img
    //     className="card-image"
    //     src={`https://media-assets.swiggy.com/swiggy/image/upload/${res.info.cloudinaryImageId}`}
    //     alt={res.info.name}
    //   />

    //   <h3 className="card-info">{res.info.name}</h3>

    //   <p className="card-cuisine">
    //     {res.info.cuisines.join(", ")}
    //   </p>

    //   <h3 className="price">
    //     {res.info.costForTwo}
    //   </h3>
    // </div> */}
          
</div>
                //  {/* <div className="card">
                // //     <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/d36bd688-e1fb-423a-a705-f6bed5f5e066_804071.JPG"}></img>
                // //     <h3 className="card-info">Pizza Hut</h3>
                // //     <p className="card-cuisine">Pizzas</p>
                // //     <h3 className="price">price for you 250</h3>
                //  </div>
                //  <div className="card">
                // //     <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bop3awlf2vildir1tveq.JPG"}></img>
                // //     <h3 className="card-info">Pizza Hut</h3>
                // //     <p className="card-cuisine">Pizzas</p>
                // //     <h3 className="price">price for you 250</h3>
                //  </div>
                // <div className="card">
                // //     <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597.JPG"}></img>
                // //     <h3 className="card-info">Pizza Hut</h3>
                // //     <p className="card-cuisine">Pizzas</p>
                // //      <h3 className="price">price for you 250</h3>
                // </div>
                // <div className="card">
                // //     <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/f155b7cd-58d6-4e78-a16d-c04725f1ceae_804724.JPG"}></img>
                // //     <h3 className="card-info">Pizza Hut</h3>
                // //     <p className="card-cuisine">Pizzas</p>
                // //      <h3 className="price">price for you 250</h3>
                // </div> */}
    
                
                
            
</div>
    )
}

export default Home;