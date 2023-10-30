'use client';
import Image from 'next/image'
import React from 'react'
import { actions, useCartDispatch } from '../context/CartContext';

const ShoppingCard = ({ article }) => {
    const dispatch = useCartDispatch();
    return (
        <div className="w-64 p-2 m-auto bg-white shadow-lg rounded-2xl">
            <Image src={`http://127.0.0.1:8000/storage/${article?.image}`} width={0} height={0} className="w-32 p-4 m-auto h-36" />
            <div className="p-4 m-3 bg-pink-200 rounded-lg">
                <p className="text-xl font-bold text-white ">
                    {article?.name}
                </p>
                <p className="text-xs text-gray-50">
                    {article?.description}
                </p>
                <div className="flex items-center justify-between ">
                    <p className="text-white">
                        {article.price}
                    </p>
                    <button onClick={() =>{ dispatch({type:actions.addtocart , payload: article})}} type="button"  className="w-10 h-10 text-base font-medium text-white bg-pink-500 rounded-full hover:bg-pink-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mx-auto" fill="white" viewBox="0 0 1792 1792">
                            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard