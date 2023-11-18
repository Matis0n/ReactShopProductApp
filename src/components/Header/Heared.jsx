import {Container} from "reactstrap";
import {NavLink, Link} from "react-router-dom";
import {useRef} from "react";

import logo from './../../assets/images/logo.png'
import shopping_basket_line from './../../assets/images/shopping-basket-line.svg'
import user_fill from './../../assets/images/user-fill.svg'
import menu_line from './../../assets/images/menu-line.svg'

import '../../styles/header.scss'

import {useSelector, useDispatch} from "react-redux";
import {cartUiActions} from "../../store/shopping-cart/cartUiSlice";

const nav_link = [
    {
        display: 'Главная',
        path: '/home'
    },
    {
        display: 'Продукты',
        path: '/foods'
    },
    {
        display: 'Корзина',
        path: '/cart'
    },
];

const Header = () => {

    // cписок элементов корзины
    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }

    // счетчик покупок в корзине
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    // отображение меню под мобильную адаптацию
    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

    return (
        <header className="header">
            <Container>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Link to="/home"><img src={logo} alt='logo'/></Link>
                        <h5>Mama Leahs</h5>
                    </div>

                    {/*======Меню======*/}

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav_link.map((item, index) => (
                                    <NavLink
                                        className={navClass => navClass.isActive ? 'active_menu' : ''}
                                        to={item.path} key={index}> {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    {/* значки навигации*/}

                    <div className="nav_right d-flex align-items-center gap-4 ">
                        <span className="cart_icon" onClick={toggleCart}>
                            <img src={shopping_basket_line} alt="shopping_basket"
                                 style={{width: "25px", height: "30px"}}/>
                            <span className="cart_badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to='/login'><img src={user_fill} alt='user' style={{width: "25px", height: "30px"}}/>  </Link>
                        </span>
                        <span className="mobile_menu" onClick={toggleMenu}>
                            <img src={menu_line} alt='menu' style={{width: "25px", height: "30px"}}/>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
