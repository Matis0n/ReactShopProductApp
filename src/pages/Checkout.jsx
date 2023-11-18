import CommonSection from "../components/UI/common-section/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {useSelector} from "react-redux";

import "../styles/checkout.scss"
import {useState} from "react";


const Checkout = () => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    let shippingConst;
    let sumTotal;

    if (cartTotalAmount === 0) {
        shippingConst = 0;
        sumTotal = 0;

    }
    else if (cartTotalAmount > 0) {
        shippingConst = 100
        sumTotal = cartTotalAmount + shippingConst
    }

    const [enterName, setEnterName] = useState('');
    const [enterPhone, setEnterPhone] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [enterСode, setEnterCode] = useState('');

    const shippingInfo = [];

    const SubmitHandler = (e) => {
        e.preventDefault();
        const userShippingAddress = {
            name: enterName,
            phone: enterPhone,
            email: enterEmail,
            enterСode: enterСode,
        };
        shippingInfo.push(userShippingAddress);
        //console.log(shippingInfo);
    }


    return (
        <>
            <CommonSection title="Оформление заказа"/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' md='6'>
                            <h6 className="mb-4"> Адрес доставки</h6>
                            <form className="checkout_form" onSubmit={SubmitHandler}>
                                <div className="form_group">

                                    <div className="form_group">
                                        <input type="text" placeholder="Введите свое имя" required
                                               onChange={e => setEnterName(e.target.value)}/>
                                    </div>

                                    <div className="form_group">
                                        <input type="number" placeholder="Введите свой номер телефона" required
                                               onChange={e => setEnterPhone(e.target.value)}/>
                                    </div>

                                    <div className="form_group">
                                        <input type="email" placeholder="Введите свой email" required
                                               onChange={e => setEnterEmail(e.target.value)}/>
                                    </div>

                                    <div className="form_group">
                                        <input type="number" placeholder="Введите код из почты" required
                                               onChange={e => setEnterCode(e.target.value)}/>
                                    </div>

                                    <div className="form_btn_food">
                                        <button type="submit" className="addToCart_btn">Оплатить</button>
                                    </div>
                                </div>

                            </form>
                        </Col>

                        <Col lg='4' md='6'>
                            <div className="checkout_bill">
                                <h6 className="d-flex align-items-center justify-content-between">Стоимость
                                    продукта: <span> {cartTotalAmount}₽</span></h6>
                                <h6 className="d-flex align-items-center justify-content-between mb-3">Доставка: <span> {shippingConst}₽</span>
                                </h6>
                                <h5 className="checkout_total d-flex align-items-center justify-content-between">Итого: <span> {sumTotal}₽</span>
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Checkout;
