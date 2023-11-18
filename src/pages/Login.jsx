import CommonSection from "../components/UI/common-section/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {useRef} from "react";

const Login = () => {

    const loginRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <CommonSection title="Авторизация"/>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className="m-auto text-center">
                        <form className="form mt-5 mb-2" onSubmit={submitHandler}>
                            <div className="form_group">
                                <input type="email" placeholder="Email" required ref={loginRef}/>
                            </div>
                            <div className="form_group">
                                <input type="password" placeholder="Пароль" required ref={passwordRef}/>
                            </div>
                            <button type="submit" className="addToCart_btn">Авторизоваться</button>

                        </form>
                        <p className="mb-5"> <Link to="/register"> У вас нет аккаунта? <span style={{textDecoration: "underline"}}>Зарегистрироваться</span> </Link></p>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
