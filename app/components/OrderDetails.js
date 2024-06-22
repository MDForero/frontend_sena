'use client'
import React, { useState } from 'react'
import { actions, useCart, useCartDispatch } from '../context/CartContext'
import { Td, Th } from './Table'
import useOrder from '../hooks/order'
import { useAuth } from '../hooks/auth'

const OrderDetails = () => {
    const [show, setShow] = useState(false)
    const cart = useCart()
    const { user } = useAuth()
    const dispatch = useCartDispatch()
    const GenerarOrden = async (e) => {
        const { createOrder } = useOrder()
        e.preventDefault()
        createOrder({ plates: cart.cart, user_id: user.id })
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
           {cart.cart.length !==0 && <button onClick={() => setShow(!show)} className={(show ? 'bg-red-500 w-16 p-1 h-16 top-16 lg:top-auto ' : 'bg-green-500 p-2 w-16 top-16 lg:top-auto') + ' z-50 rounded-full absolute right-4'}>{
                show ?
                    <strong className='text-4xl font-extrabold'>X</strong>
                    :
                    <svg viewBox="0 0 24 24" width='100%' fill='#000000' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM10.2395 8.87473C10.1703 8.46633 9.78312 8.19135 9.37473 8.26054C8.96633 8.32972 8.69135 8.71688 8.76054 9.12527L9.28872 12.2431C9.35791 12.6515 9.74507 12.9265 10.1535 12.8573C10.5619 12.7881 10.8368 12.401 10.7677 11.9926L10.2395 8.87473ZM15.6536 8.26054C15.2452 8.19135 14.858 8.46633 14.7889 8.87473L14.2607 11.9926C14.1915 12.401 14.4665 12.7881 14.8749 12.8573C15.2833 12.9265 15.6704 12.6515 15.7396 12.2431L16.2678 9.12527C16.337 8.71688 16.062 8.32972 15.6536 8.26054ZM7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18ZM16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#000000"></path> </g>
                    </svg>
            }
            </button>}
            {cart && cart.cart.length !== 0 && show && <>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-white lg:static content-center '>
                    <fieldset className={'border-2 w-fit p-2 space-y-2 '} >
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

                        <button className='p-2 border-2 rounded-lg hover:bg-green-500 duration-200' onClick={(e) => ['admin', 'manager', 'waiter'].includes(user.role) ? GenerarOrden(e) : whatsapp(e)}>Ordenar</button>
                        <a href='#' name='whatsapp' className='hidden' >whatsapp</a>
                    </fieldset></div>
            </>
            }
        </>
    )
}

export default OrderDetails