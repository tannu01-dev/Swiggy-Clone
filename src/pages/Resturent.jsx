import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "./../style/Resturant.css"
import MenuItemShow from "../UI/MenuItemShow";
import { useLocation } from "react-router-dom";
const Resturent=()=>{
    console.log("restursnt component running")
    let {resId}=useParams();
    const {resturants,cartItems,addItems,removeItems}=useOutletContext();
    const [res,setRes]=useState();
    const[menu,setMenu]=useState([]);
    const [loading,setLoading]=useState(true);
    

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch("http://localhost:5173/Menu.json");
                const data=await response.json();
                setMenu(data || []);


            }catch(err){
                console.log(err)

            }

        }
        fetchData();
        console.log(menu);

    },[resId,resturants])
    
    // useEffect(()=>{
    //     const obj=resturants.find((item)=>{
    //         return item.info.id.toString()===resId  })
    //     setRes(odj)
    //     console.log(res)

    // },[resId,resturants])
    // console.log("as",res)
    useEffect(() => {
    const obj = resturants.find((item) => {
        return item.info.id.toString() === resId;
    });

    console.log("obj:", obj);

    setRes(obj);

}, [resId, resturants]);


console.log("as", res);


    return(
        <div className="resturant">
            <div className="resturant__breadcrumb">
                <span>Home/Noida/{res?.info?.name}</span>

            </div>
            <div className="resturant__container">
                <div className="resturant__info">
                     <img className="res-img"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/${res?.info?.cloudinaryImageId}`}/>
      
    
                    <p>{res?.info?.name}</p>
                </div>
                <div className="resturant__service">
                    <p>Order Online</p>
                    <p>Dine Out</p>
                </div>
            </div>
            <div  className="resturant__menu">
                {menu.map((items)=>{
                    const title=items?.card.card.title;
                    return(
                        <div   key={items.card.card.id}  className="resturant__menu-category">
                            <div className="resturant__title">
                                <p>{title} ({items.card.card.itemCards.length})</p>
                                
                            </div>
                            <div className="resturant__menu-items">
                                {items.card.card.itemCards && items.card.card.itemCards.map((r)=>{
                                    return <MenuItemShow r={r} resturants={res} cartItems={cartItems} addItems={addItems} removeItems={removeItems}></MenuItemShow>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
         
    )
}

export default Resturent;