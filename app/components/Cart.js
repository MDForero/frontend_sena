'use client'
import React from 'react'
import { actions, useCart, useCartDispatch } from '../context/CartContext';
import Image from 'next/image';
import { getData } from '../Api/route';
import axios from 'axios';

const Cart = () => {
    const cart = useCart();
    const dispath = useCartDispatch();
    const handleSubmit = async (e) => {
        try {
            const data = JSON.stringify({plates: cart.cart });
            const post = await axios.post("http://127.0.0.1:8000/api/orders", data, {headers: {'Content-Type': 'application/json'}});
            alert(post.status)
            dispath({ type: actions.clearcart })
        } catch (error) {
            console.error(`Hubo un error: ${error}`);
        }
    }

    return (
        <div className='h-screen '>
            <h1>Cart</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>cantidad</th>
                        <th>Descripción</th>
                        <th>V/U</th>
                        <th>V/T</th>
                        <th>button</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cart.map(item => <tr>
                        <td>{item.quantity}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.price * item.quantity}</td>
                        <td><button onClick={() => dispath({ type: actions.decreasequantity, payload: item.id })}><Image src='/minus.svg' width={0} height={0} className='w-8 h-8' /></button></td>
                        <td><button onClick={() => dispath({ type: actions.removefromcart, payload: item.id })}><Image src='/trash.svg' width={0} height={0} className='w-8 h-8' /></button></td>
                    </tr>)}
                </tbody>
            </table>
            {cart.cart.length > 0 && <button onClick={() => dispath({ type: actions.clearcart })}>clear</button>}
            {cart.cart.length > 0 && <button onClick={(e) => handleSubmit(e)}>enviar</button>}

        </div>
    )
}

export default Cart