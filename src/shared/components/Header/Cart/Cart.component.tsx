import React, { useEffect, useState } from 'react';
import { ICracker } from '../../../../App';

import { ReactComponent as SoyBean } from '../../../../assets/soybean.svg';
import { ReactComponent as Sesame } from '../../../../assets/sesame.svg';
import { ReactComponent as Wheat } from '../../../../assets/wheat.svg';
import { ReactComponent as Corn } from '../../../../assets/corn.svg';
import { ReactComponent as Delete } from '../../../../assets/x-mark.svg';

import {
    CartContainer,
    CartLabel,
    Dropdown,
    OptionsTable,
    OptionRow,
    OptionCell,
    OptionBigCell,
    BottomBlock,
    Checkout
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
            <CartLabel onClick={()=>setVisible(prev=>!prev)}>
                <p>Total: {totalValue} €</p>
                <p>Details <i className={visible? 'up': 'down'}></i></p>
            </CartLabel>
            <Dropdown visible={visible} >
                <OptionsTable>
                    <OptionRow firstChild>
                        <OptionCell><SoyBean style={{width: '20px', height:'20px'}}/></OptionCell>
                        <OptionCell><Sesame style={{width: '20px', height:'20px'}}/></OptionCell>
                        <OptionCell><Wheat style={{width: '20px', height:'20px'}}/></OptionCell>
                        <OptionCell><Corn style={{width: '20px', height:'20px'}}/></OptionCell>
                    </OptionRow>
                    {elements.length>=1? elements.map((elem,indx)=>{
                        return <OptionRow>
                                    <OptionCell>{elem.ing1}%</OptionCell>
                                    <OptionCell>{elem.ing2}%</OptionCell>
                                    <OptionCell>{elem.ing3}%</OptionCell>
                                    <OptionCell>{elem.ing4}%</OptionCell>
                                    <OptionBigCell>{elem.packSize} kg</OptionBigCell>
                                    <OptionBigCell>{elem.value} €</OptionBigCell>
                                    <OptionBigCell>
                                        <Delete 
                                            style={{width: '20px', height:'20px'}}
                                            onClick={()=>{onDelete(indx)}}
                                        />
                                    </OptionBigCell>
                                </OptionRow>
                        })
                        :<p>Your cart is empty</p>
                    }
                </OptionsTable>
                <BottomBlock>
                    <p>Total: {totalValue} €</p>
                    <Checkout>
                        <div className='butt-content'>
                        Checkout
                        </div>
                    </Checkout>
                </BottomBlock>
            </Dropdown>
        </CartContainer>
    )
}

export default Cart