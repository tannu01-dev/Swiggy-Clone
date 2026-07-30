import {useEffect, useState} from "react";
import "./../style/Search.css"


function Search(){

const [restaurants,setRestaurants]=useState([]);
const [menu,setMenu]=useState([]);

const [search,setSearch]=useState("");

const [result,setResult]=useState([]);



useEffect(()=>{


fetch("/Resturant.json")
.then(res=>res.json())
.then(data=>{

setRestaurants(data);

})


fetch("/Menu.json")
.then(res=>res.json())
.then(data=>{

setMenu(data);

})


},[])





const handleSearch=()=>{


const searchText = search.toLowerCase();



let finalResult=[];



restaurants.forEach((r)=>{


const restaurantName = r.info.name
.toLowerCase();



const menuItems = menu.flatMap((m)=>{


if(
m.card &&
m.card.card &&
m.card.card.itemCards
){

return m.card.card.itemCards;

}

return [];


});



// menu me item search

const matchedItems = menuItems.filter((item)=>{


return item.card.info.name
.toLowerCase()
.includes(searchText);


});




// restaurant ya menu dono match kare

if(
restaurantName.includes(searchText)
||
matchedItems.length>0
){


finalResult.push({

restaurant:r,

items:
matchedItems.length>0
?
matchedItems
:
menuItems


});


}



});



setResult(finalResult);



}





return(

<div className="search-page">


<h1 className="search-title">
Search Restaurant
</h1>



<div className="search-box">

<input

className="search-input"

type="text"

placeholder="Search Restaurant"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>



<button 
className="search-btn"
onClick={handleSearch}
>

Search

</button>


</div>





<div className="search-result">


{

result.map((r)=>(



<div 
className="restaurant-card"
key={r.restaurant.info.id}
>


<h2 className="restaurant-name">

{r.restaurant.info.name}

</h2>





<div className="menu-container">


{

r.items.map((item,index)=>(



<div 
className="menu-item"
key={`${item.card.info.id}-${index}`}
>


<div className="item-info">

<h3>

{item.card.info.name}

</h3>



<p className="item-desc">

{item.card.info.description}

</p>


</div>




<p className="item-price">

₹
{
item.card.info.defaultPrice
?
item.card.info.defaultPrice/100
:
"Price not available"
}

</p>



</div>



))

}



</div>



</div>



))

}


</div>



</div>

)



}


export default Search;