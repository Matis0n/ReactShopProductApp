import {Link} from "react-router-dom";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";

import '../../styles/footer.scss'


import logo from "../../assets/images/logo.png";
import send_planet from '../../assets/images/send-plane-fill.png'
import youtube_first from '../../assets/images/youtube-fill.png'
import githab_fitst from '../../assets/images/github-fill.png'
import witter_x from '../../assets/images/twitter-x-fill.png'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="footer_logo text-start">
                            <img src={logo} alt='logo'/>
                            <h5>Mama Leahs</h5>
                            <p>Она дарила мне свой аромат, озаряла мою жизнь. Я не должен был бежать, и я не убежал. Я
                                ее съел."Сказал Маленький Принц про Пиццу"</p>
                        </div>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer_title'>Время доставки </h5>
                        <ListGroup className='deliver_time_list'>
                            <ListGroupItem className='delivery_time_item border-0 ps-0'>
                                <span>Понедельник- Пятница</span>
                                <p>10:00 - 22:00</p>
                            </ListGroupItem>

                            <ListGroupItem className='delivery_time_item border-0 ps-0'>
                                <span>Суббота - Воскресенье</span>
                                <p>Выходной</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer_title'>Контакты </h5>
                        <ListGroup className='deliver_time_list'>
                            <ListGroupItem className='delivery_time_item border-0 ps-0'>
                                <span> Барнаул, Проспект Ленина 155а</span>
                            </ListGroupItem>
                            <ListGroupItem className='delivery_time_item border-0 ps-0'>
                                <span>+7 (987) 34 54 01</span>
                            </ListGroupItem>

                            <ListGroupItem className='delivery_time_item border-0 ps-0'>
                                <span>sova@pizza.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer_title'>События</h5>
                        <p>Подписаться на события</p>
                        <div className='newsletter'>
                            <input type='email' placeholder="Введите email"/>
                            <span> <img src={send_planet} alt='send planet'/> </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mt-2 ">
                        <div className="social_link">
                            <span className='social_link_item'>
                                <Link to='https://ru.wikipedia.org/wiki/YouTube'> <img
                                    src={youtube_first} alt='youtube first'/></Link>
                            </span>
                            <span className='social_link_item'>
                                <Link to='https://ru.wikipedia.org/wiki/Git'> <img
                                    src={githab_fitst} alt='githab first'/> </Link>
                            </span>
                            <span className='social_link_item'>
                                <Link to='https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%B8%D1%82%D1%82%D0%B5%D1%80'><img
                                    src={witter_x} alt='witter x '/> </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;