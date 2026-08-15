import "./../style/Menu.css"

const MenuItemShow=({r,resturants,cartItems,addItems,removeItems})=>{
    
    const isItemCart = cartItems.some((i) => i.id === r.id);

    const quantityInCart = isItemCart
    ? cartItems.find((item) => item.id === r.id).quantity
    : 0;

    return(
        
        <div className="resturant__menu-item-card">
            <div className="resturant__menu-item-info">
                <p className="resturant__menu-item-name">{r.name}</p>
                <p className="resturant__menu-item-price">{(r.defaultPrice || r.price || 0)/100}</p>
                <p className="resturant__menu-item-description">{r.description}</p>
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
        r.imgUrl ||
        (r.imageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/${r.imageId}`
            : "")
    }
    alt={r.name}
/>
                    
                    
            </div>

        </div>
    )
}
export default MenuItemShow;