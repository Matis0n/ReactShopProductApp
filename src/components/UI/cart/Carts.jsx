import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import CartItem from "./CartItem";

import closeImg from "../../../assets/images/close-circle-fill.svg"

import "../../../styles/shopping-cart.scss"

import {cartUiActions} from "../../../store/shopping-cart/cartUiSlice";

const Carts = () => {
    // закрытие списка продуктов
    const dispatch = useDispatch();
    const toggleCartOut = () => {
        dispatch(cartUiActions.toggle())
    }

    // список продуктов
    const cartProducts = useSelector(state => state.cart.cartItems);
    // предварительная сумма в корзине
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <div className="cart_container">
            <ListGroup className="cart p-1">
                <div className="cart_close">
                    <span onClick={toggleCartOut}> <i className="ri-close-circle-fill"> <img
                        className="close_circle_fill" src={closeImg} alt="close"
                        style={{width: "25px", height: "30px"}}/></i></span>
                </div>
                <div className="cart_item_list">
                    {
                        cartProducts.length === 0 ? <h6 className="text-center mt-5">Корзина пока пустая</h6> : cartProducts.map((item, index) => (
                            <CartItem item_value ={item} key={index}/>))
                    }
                </div>
                <div className="cart_bottom d-flex justify-content-between align-items-center">
                    <h6>Сумма: <span>{totalAmount}₽</span></h6>
                    <button><Link to="/checkout">Перейти к оформлению заказа</Link></button>
                </div>
            </ListGroup>
        </div>
    );
}
export default Carts;