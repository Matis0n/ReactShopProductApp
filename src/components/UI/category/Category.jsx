import {Container, Row, Col} from "reactstrap";
import categoryImg01 from '../../../assets/images/category-01.png'
import categoryImg02 from '../../../assets/images/category-02.png'
import categoryImg04 from '../../../assets/images/category-04.png'

import '../../../styles/category.scss'

const categoryData = [
    {
        display: 'Бургеры',
        imgUrl: categoryImg01,

    },
    {
        display: 'Пицца',
        imgUrl: categoryImg02,

    },

    {
        display: 'Мясные изделия',
        imgUrl: categoryImg04,
    },

]

const Category = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center gap-4">
                {
                    categoryData.map((item, index) => (
                        <Col lg="3" md="3" key={index}>
                            <div className="category_item d-flex align-items-center gap-2">
                                <div className="category_img">
                                    <img src={item.imgUrl} alt='category img'/>
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Category;