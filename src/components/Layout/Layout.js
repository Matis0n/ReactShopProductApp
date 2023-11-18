import Header from "../Header/Heared";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts";

import "../../styles/layout.scss"

import {useSelector} from "react-redux";

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.cartIsVisible);
    return (
        <div className="wrapper_first">
            <Header/>
            <>
                {/*всплывающее окно корзины*/}
                {showCart && <Carts/>}
            </>
            <>
                <Routes/>
            </>
            <Footer/>
        </div>
    );
}

export default Layout;