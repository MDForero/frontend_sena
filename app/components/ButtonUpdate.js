'use client'
import React from 'react'
import { useRouter } from 'next/navigation' 
import { actions, useCartDispatch } from '../context/CartContext'

const ButtonUpdate = ({cart}) => {
    const router = useRouter()
    const dispatch = useCartDispatch()
    const updateOrder = async (e) => {
        e.preventDefault()
        dispatch({type: actions.updateOrder, payload: cart})
        router.push('/dashboard/articulos')
    }
  return (
    <button onClick={updateOrder}>Agregar Productos</button>
  )
}

export default ButtonUpdate