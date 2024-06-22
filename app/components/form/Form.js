'use client'
import React, { useState } from 'react'
import ButtonSubmit from '../ButtonSubmit'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import ButtonDelete from '../ButtonDelete'

const Form = ({ article }) => {
    const [name, setName] = useState(article?.name)
    const [description, setDescription] = useState(article?.description)
    const [price, setPrice] = useState(article?.price)
    const router = useRouter()


    const handleSubmmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/platesupdate/${article.id}`, { name, description, price }, { headers: { 'Content-Type': 'multipart/form-data' } })
            if (response.status === 200) {
                router.push('/menu/product-list')
                alert('Producto editado')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/plates/${article.id}`)
            if (response.status === 200) {
                router.push('/menu/product-list')
                alert('Producto eliminado')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <form onSubmit={handleSubmmit} className="px-4 pt-8 sm:px-10">
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                            Agregar nuevo producto
                        </span>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="w-full space-y-6">
                        <div className="w-full">
                            <div className=" relative ">
                                <input onChange={(e) => setName(e.target.value)} type="text" id="name" name='name' value={name} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nombre" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <input onChange={(e) => setDescription(e.target.value)} type="text" id="description" value={description} name="description" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Description" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" relative ">
                                <input onChange={(e) => setPrice(e.target.value)} type="text" id="price" name="price" value={price} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Precio" />
                            </div>
                        </div>

                        <div>
                            <ButtonSubmit />
                        </div>
                    </div>
                </div>
            </form>
            <form className="px-4 pb-8 pt-6 sm:px-10" onSubmit={handleDelete}>
                <ButtonDelete />
            </form >
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                    This data are display for information and can change
                </p>
            </div>
        </div>
    </>
}

export default Form