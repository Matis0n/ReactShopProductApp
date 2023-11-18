import CommonSection from "../components/UI/common-section/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {useRef} from "react";
import {Link} from "react-router-dom";


const Register = () => {
    const signameRef = useRef();
    const sigloginRef = useRef();
    const sigpasswordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <CommonSection title="Регистрация"/>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className="m-auto text-center">
                        <form className="form mt-5 mb-2" onSubmit={submitHandler}>
                            <div className="form_group">
                                <input type="text" placeholder="Введите имя" required ref={signameRef}/>
                            </div>
                            <div className="form_group">
                                <input type="email" placeholder="Email" required ref={sigloginRef}/>
                            </div>
                            <div className="form_group">
                                <input type="password" placeholder="Пароль" required ref={sigpasswordRef}/>
                            </div>
                            <button type="submit" className="addToCart_btn">Зарегистрироваться</button>
                        </form>
                        <p className="mb-5"><Link to="/login"> У вас есть аккаунт? <span style={{textDecoration: "underline"}}>Авторизоваться</span> </Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Register;
