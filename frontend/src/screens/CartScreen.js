import React, { useEffect } from 'react';
import {
    Link,
    useParams,
    useSearchParams,
    useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Row,
    Col,
    LIstGroup,
    Image,
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const productId = params.id;
    const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return <div>Cart</div>;
};

export default CartScreen;
