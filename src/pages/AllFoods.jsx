import CommonSection from "../components/UI/common-section/CommonSection";

import {Container, Row, Col} from "reactstrap";

import searchImg from "../assets/images/search-2-line.svg"

import products from "../assets/product-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.scss"
import {useState} from "react";


const AllFoods = () => {

    // фильтрация по заголовкам продуктов
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <CommonSection title=' Все продукты'/>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="search_widget d-flex align-items-center justify-content-between w-75 ">
                                <input type="text" maxLength="60" placeholder="Введите название продукта"
                                       value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

                                <span className="search-icon"><img src={searchImg} alt="searchImg"
                                                                   style={{width: "25px", height: "25px"}}/></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                        </Col>

                        {
                            products.filter((item) => {
                                if (searchTerm.value === "")
                                    return true;
                                return (item.title.toLowerCase().includes(searchTerm.toLowerCase()))

                            }).map((item, index) => (
                                <Col lg="3" md="4" sm="6" xs="6" className="mt-5" key={index}>
                                    <ProductCard item_value={item} key={item.id}/>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AllFoods;
