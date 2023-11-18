import {Link} from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import {useEffect, useState} from "react";

import Category from "../components/UI/category/Category";

import ProductCard from '../components/UI/product-card/ProductCard';

import '../styles/home.scss'

import hero_img from '../assets/images/hero.jpg'
import arrow_right from '../assets/images/arrow-right-s-line.png'
import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"

import products from "../assets/product-data/products";

const Home = () => {

    const [category, setCategory] = useState('ALL');
    const [allProducts, setAllProduct] = useState(products)

    useEffect(() => {

        switch (category) {
            case 'ALL':
                setAllProduct(products);
                break;
            case 'BURGER':
                const burgerProducts = products.filter(item => item.category === 'Burger');
                setAllProduct(burgerProducts);
                break;
            case 'PIZZA':
                const pizzaProducts = products.filter(item => item.category === 'Pizza');
                setAllProduct(pizzaProducts);
                break;
            default:
                break;
        }

    }, [category])

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero_content">
                                <h1 className='mb-3'>
                                    <span style={{color: '#ed9121'}}>Проголодались?</span><br/> Ну,так делайте заказ
                                </h1>
                                <div className="hero_btns d-flex align-items-center gap-2 mt-4">
                                    <button
                                        className="order_btn d-flex align-items-center justify-content-between"> Сделать
                                        заказ <i className="ri-arrow-right-s-line"><img src={arrow_right}
                                                                                        alt='arrow right'></img> </i>
                                    </button>
                                    <button className="all_foods_btn"><Link to="/foods">Посмотреть все продукты</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_img">
                                <img src={hero_img} alt='hero img'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Category/>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Популярные продукты</h2>
                        </Col>
                        <Col lg="12">
                            <div className="food_category d-flex align-items-center justify-content-center gap-4 ">
                                <button className={`all_btn ${category === 'ALL' ? 'btn_all_burger_pizza' : ''}`}
                                        onClick={() => setCategory('ALL')}>Все
                                </button>

                                <button
                                    className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'btn_all_burger_pizza' : ''}`}
                                    onClick={() => setCategory('BURGER')}><img src={foodCategoryImg01}
                                                                               alt="foodCategoryImg"/>Бургер
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'btn_all_burger_pizza' : ''}`}
                                    onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg02}
                                                                              alt="foodCategoryImg"/>Пицца
                                </button>
                            </div>
                        </Col>
                        {
                            allProducts.map((item) =>
                                <Col className="mt-5" lg="3" md="4" key={item.id}>
                                    <ProductCard item_value={item}/>
                                </Col>
                            )}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Home;
