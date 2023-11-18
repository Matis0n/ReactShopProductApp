import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";

import products from "../assets/product-data/products";

import {Container, Row, Col} from "reactstrap";

import "../styles/food-details.scss"

import ProductCard from "../components/UI/product-card/ProductCard";
import {useDispatch} from "react-redux";
import {cartAction} from "../store/shopping-cart/cartSlice";

const FoodDetails = () => {

    const [tab, setTab] = useState('desc');

    // заполнение формы комментарий
    const [enteredName, setEnteredName] = useState('');
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [reviewMsg, setReviewMsg] = useState('');

    //продукты по категориям
    const {id} = useParams();
    const product = products.find(product => product.id === id);
    const [parent, setParent] = useState(product.image01);
    const {title, price, category, category_ru, desc, image01} = product;
    //фильтр по фотография продуктов
    const relatedProduct = products.filter(item => category === item.category);
    // при клике на название продукта или на фотографию подробная информация показывается (ProductCard)
    useEffect(() => {
        setParent(product.image01)
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product]);

    const dispatch = useDispatch();

    const AddCart = () => {
        dispatch(cartAction.addItem({
            id,
            title,
            image01,
            price,
        }))
    }

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <>
            <CommonSection title={title}/>
            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className="product_image">
                                <div className="img_item" onClick={() => setParent(product.image01)}>
                                    <img src={product.image01} alt="productImg" className="w-50"/>
                                </div>

                                <div className="img_item" onClick={() => setParent(product.image02)}>
                                    <img src={product.image02} alt="productImg" className="w-50"/>
                                </div>

                                <div className="img_item" onClick={() => setParent(product.image03)}>
                                    <img src={product.image03} alt="productImg" className="w-50"/>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="3">
                            <div className="product_main_img">
                                <img src={parent} alt="productImg" className="w-100"/>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="single_product_content">
                                <h2 className="product_title">{title}</h2>
                                <p className="product_price"><span className="price_color">Стоимость:</span>
                                    <span>{price}₽</span></p>
                                <p className="category">Категории: <span>{category_ru}</span></p>

                                <button onClick={AddCart} className="addToCart_btn">Добавить в корзину</button>
                            </div>
                        </Col>
                        <Col lg="12">
                            <div className="tabs">
                                <h6 className={`${tab === 'desc' ? 'tab_active' : 'tab_no_active '}`} onClick={() => {
                                    setTab('desc')
                                }}>Описание</h6>
                                <h6 className={`${tab === 'rev' ? 'tab_active' : 'tab_no_active '}`} onClick={() => {
                                    setTab('rev')
                                }}>Комментарий</h6>
                            </div>
                            {
                                tab === 'desc' ? <div className="tab_content">
                                    <p>{desc}</p>
                                </div> : <div className="tab_form">

                                    <div className="review ">
                                        <p className="user_name mb-0"> {`${enteredName} ${enteredFirstName}`} </p>
                                        <p className="user_email mb-0"> {enteredEmail}</p>
                                        <p className="message_text mb-0">{reviewMsg}</p>
                                    </div>

                                    <form className="form" onSubmit={submitHandler}>
                                        <div className="form_group">
                                            <input onChange={e => setEnteredName(e.target.value)} required type="text"
                                                   placeholder="Введите свое имя"/>
                                        </div>

                                        <div className="form_group">
                                            <input onChange={e => setEnteredFirstName(e.target.value)} required
                                                   type="text"
                                                   placeholder="Введите свою фамилию"/>
                                        </div>

                                        <div className="form_group">
                                            <input onChange={e => setEnteredEmail(e.target.value)} required type="text"
                                                   placeholder="Введите свой email"/>
                                        </div>

                                        <div className="form_group">
                                            <textarea onChange={e => setReviewMsg(e.target.value)} required rows={5}
                                                      type="text"
                                                      placeholder="Введите комментарий"/>
                                        </div>
                                        <div className="form_btn_food">
                                            <button type="submit" className="addToCart_btn">Отправить</button>
                                        </div>
                                    </form>
                                </div>
                            }

                        </Col>
                        <Col lg="12" className="mb-3">
                            <h2>Вам также может понравиться</h2>
                        </Col>
                        {
                            relatedProduct.map((item) => (
                                <Col className="mb-3" lg="3" md="4" sm="6" xs="6" key={item.id}>
                                    <ProductCard item_value={item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FoodDetails;
