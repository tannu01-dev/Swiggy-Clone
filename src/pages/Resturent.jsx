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
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/menu`);               
                const data = await response.json();

console.log("BACKEND DATA:", data);
console.log("FIRST MENU ITEM:", data.data?.[0]?.menu?.[0]);

setMenu(data.data?.[0]?.menu || []);

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
        if(!Array.isArray(resturants)) return;
        const obj = resturants.find((item) => {
            return item?.info?.id?.toString() === resId;
        });

    console.log("obj:", obj);

    setRes(obj);

}, [resId, resturants]);


console.log("as", res);


    return(
        <div className="resturant">
            <div className="resturant__breadcrumb">
                <span>Home/Noida/{res?.name}</span>

            </div>
            <div className="resturant__container">
                <div className="resturant__info">
                     {res?.cloudinaryImageId && (
    <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${res.cloudinaryImageId}`}
        alt={res?.name}
    />
)}
    
                    <p>{res?.name}</p>
                </div>
                <div className="resturant__service">
                    <p>Order Online</p>
                    <p>Dine Out</p>
                </div>
            </div>
            <div  className="resturant__menu">
                {menu.map((items)=>{
                    const title=items?.title;
                    return(
                        <div   key={items?.title}  className="resturant__menu-category">
                            <div className="resturant__title">
                                <p>{title} ({items?.itemCards?.length || 0})</p>
                                
                            </div>
                            <div className="resturant__menu-items">
                                {items?.itemCards?.map((r)=>{
                                    return <MenuItemShow key={`${title}-${r.id}`} r={r} resturants={res} cartItems={cartItems} addItems={addItems} removeItems={removeItems}></MenuItemShow>
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