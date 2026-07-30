import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import './common/Style.css'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [resturants, setResturants]=useState([]);
  const [loading,setLoading]=useState(true);
  const[cartItems,setCartItems]=useState([]);
  const addItems = (item, resturants) => {

  console.log("ADD CLICK FUNCTION RUN", item.card.info.name);

  setCartItems((prev) => {

    const existingItem = prev.find(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItem) {

      return prev.map((cartItem) =>
        cartItem.card.info.id === item.card.info.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1
            }
          : cartItem
      );

    } else {

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
          resturant: {
            id: resturants.info.id,
            name: resturants.info.name,
            area: resturants.info.areaName,
            image: resturants.info.cloudinaryImageId
          }
        }
      ];

    }

  });
};
  

  const removeItems=(item)=>{
  const existingIndex=cartItems.findIndex(
    (cartItem)=>cartItem.card?.info.id===item.card?.info.id
  );

  if(existingIndex!==-1){
    const updateCart=[...cartItems];

    if(updateCart[existingIndex].quantity>1){
      updateCart[existingIndex].quantity-=1;
    }else{
      updateCart.splice(existingIndex,1);
    }

    setCartItems(updateCart);
  }
}
  const clearCart=()=>{
    setCartItems([])
  }


  useEffect(()=>{
    const fetchResturants=async ()=>{
      try{
        const response=await fetch("http://localhost:5173/Resturant.json")
        console.log(response);
        if(response.ok){
          const data=await response.json();
          setResturants(data);
          console.log(data)
        }
      }catch(err){
        console.log("fail to load")

      }finally{
        setLoading(false)

      }


    }
    fetchResturants();

  },[])

  useEffect(() => {
    console.log("Cart Items =>", cartItems);
}, [cartItems]);
useEffect(()=>{
 console.log("FINAL CART:", cartItems);
},[cartItems])

  return (
    <div>
      <Header cartItems={cartItems}></Header>
      <Outlet context={{resturants,loading,cartItems,setCartItems,addItems,removeItems,clearCart}}></Outlet>
    </div>
    
  )
}


export default App
