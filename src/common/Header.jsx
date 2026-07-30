import { NavLink } from "react-router-dom"

const Header=({cartItems=[]})=>{
    return(
        <div className="header">
            <div className="header__logo-container">
                <NavLink to={"/"}>
                <img className='header-logo' src="https://www.bing.com/th/id/OIP.9t3mD-oUIynvMMF9Yv-zXAHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"></img>
                </NavLink>
            </div>
            <div className="header__nav">
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/search"}>search</NavLink>
                    </li>
                    <li>
    <NavLink to={"/cart"}>
        Cart 
        {cartItems.length>0 &&(
            <span className="cart-count">
                {
                cartItems.reduce(
                    (total,item)=> total + item.quantity,
                    0
                
              )
            }
        </span>
        )}
    </NavLink>
</li>
                    <li>
                        <NavLink to={"/help"}>Help</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header;