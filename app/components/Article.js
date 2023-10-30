'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { actions, useCart, useCartDispatch } from "../context/CartContext";

export default function Article({ data }) {
    const dispatch = useCartDispatch()
    const cart = useCart()
    const [amount, setAmount] = useState(0)

    const addtocard = () => {
        dispatch({ type: actions.addtocart, payload: { ...data, amount } })
        console.log(cart)
    }

    return <article>
        <fieldset className="w-52 text-center p-2 border-2 shadow-2xl">
            <legend>{data?.name}</legend>
            <img src={'http://127.0.0.1:8000/storage/' + data?.image} width={0} height={0} alt={data?.title} className="h-80 w-52 object-cover" />
        </fieldset>
        <div className="flex flex-wrap gap-3 m-2 mx-auto w-full justify-center">
            {amount !== 0 && <button onClick={() => setAmount(amount - 1)}>-</button>}
            <p>{amount}</p>
            <button onClick={() => setAmount(amount + 1)}>+</button>
        </div>
        {amount !== 0 && <button onClick={addtocard}>Agregar</button>}
    </article>
}