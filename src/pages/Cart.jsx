import CommonSection from "../components/UI/common-section/CommonSection";
import {Col, Container, Row} from "reactstrap";

import deleteIcon from '../assets/images/delete-bin-5-line.svg'

import '../styles/cart-pages.scss'
import {useDispatch, useSelector} from "react-redux";
import {cartAction} from "../store/shopping-cart/cartSlice";
import {Link} from "react-router-dom";


const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const subTotal = useSelector(state => state.cart.totalAmount)

    return (
        <>
            <CommonSection title="Корзина"/>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartItems.length === 0 ? <h5 className="text-center">Вы не добавили товары</h5> :
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Фото</th>
                                            <th>Название продукта</th>
                                            <th>Стоимость</th>
                                            <th>Количество</th>
                                            <th>Удалить</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {
                                            cartItems.map((item) => (
                                                <ShowProductColumns item_value_cartItems={item} key={item.id}/>
                                            ))}
                                        </tbody>
                                    </table>
                            }

                            <div className="subtotal_item  mt-5">
                                <h6>Итого: <span>{subTotal}₽</span> </h6>
                                <p>Сумма за доставку будет рассчитываться при оформлении заказа.</p>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <button className="addToCart_btn"> <Link to="/foods">Продолжить покупки</Link> </button>
                                <button className="addToCart_btn"> <Link to="/checkout">Перейти к оформлению заказа</Link> </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

const ShowProductColumns = (props) => {

    const {id, title, quantity, price, image01} = props.item_value_cartItems

    const dispatch = useDispatch();

    const deleteProduct = (props) => {
        dispatch(cartAction.deleteItem(id))

    }

    return (
        <tr>
            <td><img src={image01} alt="product cartItems" style={{width: "100px", height: "100px"}}/></td>
            <td className="p-5">{title}</td>
            <td className="p-5">{price}</td>
            <td className="p-5">{quantity}</td>
            <td>
                <img onClick={deleteProduct} className="img_delete" src={deleteIcon} alt="deleteIcon"
                     style={{width: "25px", height: "90px"}}/>
            </td>
        </tr>
    );
}

export default Cart;
