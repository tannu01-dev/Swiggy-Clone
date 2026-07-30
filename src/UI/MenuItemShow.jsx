import "./../style/Menu.css"

const MenuItemShow=({r,resturants,cartItems,addItems,removeItems})=>{
    
    const isItemCart=cartItems.some((i)=>i.card.info.id === r.card.info.id);

    const quantityInCart=isItemCart?cartItems.find((item)=> item.card.info.id === r.card.info.id).quantity:0;

    return(
        
        <div className="resturant__menu-item-card">
            <div className="resturant__menu-item-info">
                <p className="resturant__menu-item-name">{r.card.info.name}</p>
                <p className="resturant__menu-item-price">{r.card.info.defaultPrice/100 || r.card.info.price/100}</p>
                <p className="resturant__menu-item-description">{r.card.info.description}</p>
            </div>
            <div className="resturant__menu-item-action">
                {isItemCart ? (
                    <div className="resturant__menu-item-quantity-controls">
                        <button  onClick={()=>{removeItems(r)}}>-</button>
                        <span>{quantityInCart}</span>
                        <button onClick={()=>{addItems(r,resturants)}}>+</button>
                    </div>
                    ):(
                    <button className="resturant__menu-item-add-btn" onClick={()=>{addItems(r,resturants)}}>ADD</button>
                    )}
                    
                    <img 
 src={
   r.card.info.imgUrl || 
   `https://media-assets.swiggy.com/swiggy/image/upload/${r.card.info.imageId}`
 }
 alt={r.card.info.name}/>
                    
                    
            </div>

        </div>
    )
}
export default MenuItemShow;