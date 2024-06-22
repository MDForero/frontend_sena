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
        setAmount(0)
    }

    return <article>
        <fieldset className="w-60 text-center p-2 border-2 shadow-2xl">
            <legend className="capitalize font-bold text-2xl ">{data?.name}</legend>
            <img src={'https://hammerhead-app-7ljp5.ondigitalocean.app/storage/' + data?.image} width={0} height={0} alt={data?.title} className="h-52 w-52 mx-auto object-cover" />
            <div className="flex flex-wrap gap-3 m-2 mx-auto w-full justify-center items-center">
                <button onClick={() => setAmount(amount - 1)} className={`border-2 p-3 rounded-full ${amount === 0 ? '' : ' hover:bg-red-500'}`} disabled={amount === 0 ? true : false}><svg viewBox="0 -12 32 32" className="w-4 h-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-414.000000, -1049.000000)" fill="#000000"> <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" > </path> </g> </g> </g></svg></button>
                <p className="font-bold text-3xl">{amount}</p>
                <button onClick={() => setAmount(amount + 1)} className="border-2 p-3 rounded-full hover:bg-green-500"><svg viewBox="0 0 32 32" className="w-4 h-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-362.000000, -1037.000000)" fill="#000000"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus"> </path> </g> </g> </g></svg></button>
            <button onClick={addtocard} className={`border-2 p-3 rounded-full ${amount === 0 ? '' : ' bg-green-500'}`} disabled={amount === 0 ? true : false}>Agregar</button>
            </div>
        </fieldset>
    </article>
}