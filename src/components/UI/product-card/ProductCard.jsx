import {Link} from "react-router-dom";

import '../../../styles/product-card.scss'

import {useDispatch} from "react-redux";
import {cartAction} from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {

    const {id, image01, title, price} = props.item_value

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartAction.addItem({
            id,
            title,
            image01,
            price,
        }))
    }

    return (
        <div className="product_item">
            <div className="product_img">
                {/*По марштуру передаются вместе с id заголовок и фотография*/}
                <Link to={`/foods/${id}`}> <img src={image01} alt="product img" className="w-100 "/></Link>
            </div>
            <div className="product_content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
            </div>
            <div className="d-flex center align-items-center justify-content-between">
                <span className="product_price">{price}₽</span>
                <button className="addToCart_btn" onClick={addToCart}> Добавить в корзину</button>
            </div>
        </div>
    );
}

export default ProductCard;