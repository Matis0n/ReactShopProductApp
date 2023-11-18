import {ListGroupItem} from "reactstrap";

import plusImg from "../../../assets/images/add-line.svg"
import minusImg from "../../../assets/images/subtract-line.svg"
import closeImg from "../../../assets/images/close-fill.svg"

import "../../../styles/cart-item.scss"

import {useDispatch} from "react-redux";
import {cartAction} from "../../../store/shopping-cart/cartSlice";


const CartItem = (props) => {

    // передаем данные  по пропсам в корзину
    const{id,title,price,image01, quantity, totalPrice} = props.item_value

    // увеличиваем продукты в корзине
    const dispatch = useDispatch();
    const incrementItem = ()=>{
        dispatch(cartAction.addItem({
            id,
            title,
            price,
            image01,
        }));
    }
    // уменьшаем продукты в корзине
    const decrementItem=()=>{
        dispatch(cartAction.removeItem(id));
    }
    // удаление продукта
    const delete_Item =()=>{
        dispatch(cartAction.deleteItem(id));
    }

    return (
        <ListGroupItem className="border-0">
            <div className="cart_item_info d-flex gap-4">
                <img className="img_first" src={image01} alt="product img"/>
                <div className="cart_product_info w-100 d-flex align-items-center gap-4 justify-content-between">
                    <div>
                        <h6 className="cart_product_title">{title}</h6>
                        <p className="cart_product_price d-flex align-items-center gap-5 ">{quantity}x <span>{totalPrice}₽</span></p>
                        <div className="increase_desrease_btn d-flex align-items-center gap-5">
                            <span onClick={incrementItem} className="add_btn btn_plus_minus_close_active"> <img src={plusImg} alt="plus img" style={{width: "30px", height: "30px"}}/></span>
                            <span>{quantity}</span>
                            <span onClick={decrementItem} className="minus_btn btn_plus_minus_close_active"><img src={minusImg} alt="minus img" style={{width: "30px", height: "30px"}}/></span>
                        </div>
                    </div>
                    <span onClick={delete_Item} className="delete_btn btn_plus_minus_close_active"> <img src={closeImg} alt="close" style={{width:"35px", height: "35px"}}/></span>
                </div>
            </div>
        </ListGroupItem>
    );
}

export default CartItem;

