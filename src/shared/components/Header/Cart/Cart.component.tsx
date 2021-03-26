import React, { useEffect, useState } from 'react';
import { ICracker } from '../../../../App';

import {
    CartContainer,
    CartLabel,
    Dropdown
} from './Cart.styled'

interface ICart {
    elements: ICracker[];
    onDelete: (id: number)=> void;
}

const Cart = ({elements, onDelete}: ICart) =>{
    const [visible, setVisible] = useState(false);
    const [totalValue, setTotalValue] = useState(0);

    const sumValues = (carts:ICracker[])=>{
        return carts.reduce((prev,curr)=>{return prev+curr.value},0);
    }

    useEffect(()=>{
        setTotalValue(sumValues(elements))
    }, [elements])
    return(
        <CartContainer>
            <CartLabel>
                Total: {totalValue}
            </CartLabel>
        </CartContainer>
    )
}

export default Cart