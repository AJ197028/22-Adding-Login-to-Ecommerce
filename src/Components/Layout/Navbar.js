import React, { useContext } from 'react'
import { cartContext } from '../Store/CartProvider';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    let cartCtx=useContext(cartContext)
    const handleOpenCart = () => {
        props.handleToggleCart();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                             <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/store">STORE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/products">PRODUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/login">LOGIN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button type="button" className="btn btn-dark border-primary" onClick={handleOpenCart}>Cart</button>
                            <span style={{color:"cyan",fontSize:"20px",margin:"-15px 0px"}}>{cartCtx.cartItems.totalItems}</span>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar