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

  console.log("ADD CLICK FUNCTION RUN", item.name);

  setCartItems((prev) => {

    const existingItem = prev.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {

      return prev.map((cartItem) =>
        cartItem.id === item.id
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
            id: resturants?._id,
            name: resturants?.name,
            area: resturants?.areaName,
            image: resturants?.cloudinaryImageId
          }
        }
      ];

    }

  });
};
  

  const removeItems=(item)=>{
  const existingIndex=cartItems.findIndex(
    (cartItem)=>cartItem.id===item.id
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


  // useEffect(()=>{
  //   const fetchResturants=async ()=>{
  //     try{
  //       const response=await fetch("http://localhost:9000/api/v1/resturant")
  //       console.log(response);
  //       if(response.ok){
  //         const data=await response.json();
  //         setResturants(result.data);
  //         console.log(data)
  //       }
  //     }catch(err){
  //       console.log("fail to load")

  //     }finally{
  //       setLoading(false)

  //     }


  //   }
  //   fetchResturants();

  // },[])

//   useEffect(() => {
//   const fetchResturants = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:9000/api/v1/Resturant"
//       );

//       console.log("STATUS:", response.status);
//       console.log("OK:", response.ok);

//       const text = await response.text();

//       console.log("RAW BACKEND RESPONSE:", text);

//     } catch (err) {
//       console.log("ACTUAL ERROR:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchResturants();
// }, []);

useEffect(() => {
  const fetchResturants = async () => {
    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/v1/Resturant`
);

      console.log("Response:", response);

      if (response.ok) {
        const result = await response.json();

        console.log("Backend Result:", result);

        setResturants(result.data);
      }
    } catch (err) {
      console.log("ACTUAL ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchResturants();
}, []);

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
