'use client'
import React from 'react'
import { actions, useCart, useCartDispatch } from '../context/CartContext'
import { Td, Th } from './Table'
import useOrder from '../hooks/order'
import { useAuth } from '../hooks/auth'

const OrderDetails = () => {
    const cart = useCart()
    const { user } = useAuth()
    const dispatch = useCartDispatch()
    const generarOrden = async (e) => {
        const { createOrder } = useOrder()
        e.preventDefault()
        const data = JSON.stringify({ plates: cart.cart, user_id: user.id })
        createOrder(data)
        dispatch({ type: actions.clearcart })
    }
    const whatsapp = (e) => {
        e.preventDefault()
        const message = cart.cart.map(item => `${item.name} x ${item.amount}`).join('%0A')
        const url = `https://api.whatsapp.com/send?phone=+573108854737&text=${message}`
        const link = document.getElementsByName('whatsapp')[0]
        link.href = url
        link.click()
    }

    return (
        <>
            {cart && cart.cart.length !== 0 && <fieldset className='border-2 w-fit p-2 space-y-2' >
                <legend className='text-2xl font-bold'>Detalles de la orden</legend>

                <table>
                    <thead>
                        <tr>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
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
                            <td className='flex justify-center items-center '><button className='bg-red-500 p-1 rounded-lg ' onClick={() => { dispatch({ type: actions.removefromcart, payload: item.id }) }} ><svg viewBox="0 0 24 24" fill="none" className='w-6' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button></td>
                        </tr>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <Td colSpan="3">Total</Td>
                            <Td>{cart.cart.reduce((acc, item) => acc + item.value * item.amount, 0)}</Td>
                        </tr>
                    </tfoot>
                </table>

                <button className='p-2 border-2 rounded-lg hover:bg-green-500 duration-200' onClick={(e) => ['admin', 'manager', 'waiter'].includes(user.role) ? generarOrden(e) : whatsapp(e)}>Ordenar</button>
                <a href='#' name='whatsapp' className='hidden' >whatsapp</a>
            </fieldset>}
        </>
    )
}

export default OrderDetails