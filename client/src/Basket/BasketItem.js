import React, {useState} from "react";
import './Basket.css'
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {delProduct} from "../redux/busket/reducer";

function Basket({product}) {
    const dispatch = useDispatch()

    const delToBasketHandler = (e) => {
        e.stopPropagation();
        dispatch(delProduct(product.id));
    }

    return (
        <div className={'basketItem__row'}>
            <div className={'basketItem__first'}>
                <img className={'basket__img'} src={product.image} alt={'image not found'}/>
                <p className={'text-weight'}>{product.name}</p>
            </div>

            <div className={'basketItem__two'}>
                <p className={'text-weight'}>{product.price + 'руб.'}</p>

                <Button onClick={delToBasketHandler} className={'basketItem__button-del'}>Удалить</Button>
            </div>
        </div>

    );
}

export default Basket;