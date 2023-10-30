'use client'
import React from 'react'
import { actions, useCart, useCartDispatch } from '../context/CartContext'
import { Td, Th } from './Table'
import useOrder from '../hooks/order'
import { useAuth } from '../hooks/auth'

const OrderDetails = () => {
    const cart = useCart() 
    const {user} = useAuth()
    const dispatch = useCartDispatch()
    const generarOrden = async (e) => {
        const {createOrder} = useOrder()
        e.preventDefault()
        const data = JSON.stringify({plates:cart.cart , user_id: user.id})
        createOrder(data)

    }
  return (
    <>
    <table>
        <thead>
            <tr>
                <Th>Nombre</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Subtotal</Th>
                <Th>Eliminar</Th>
            </tr>
        </thead>
        <tbody>
            {cart.cart.map((item, index) => <tr key={index}>
                <Td>{item.name}</Td>
                <Td className='text-right'>{item.amount}</Td>
                <Td>{item.value}</Td>
                <Td>{item.value * item.amount}</Td>
                <Td className='text-center'><button onClick={()=>{dispatch({type: actions.removefromcart, payload: item.id})}} >x</button></Td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <Td colSpan="3">Total</Td>
                <Td>{cart.cart.reduce((acc, item) => acc + item.value * item.amount, 0)}</Td>
            </tr>
        </tfoot>
    </table>
        <button onClick={(e)=>generarOrden(e)}> generar orden</button>
    </>
  )
}

export default OrderDetails