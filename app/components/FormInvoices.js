'use client'

import { useState } from "react"
import useInvoices from "../hooks/invoices"

const FormInvoices = ({id}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [nit, setNit] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {postInvoice} = useInvoices()
        const data = {
            name,
            phone,
            address,
            email,
            nit,
            description,
            value,
            status,
            order_id: id
        }
        postInvoice(data)
        
    }
    return (
        <form className=" flex max-w-7xl flex-wrap" onSubmit={(e) => handleSubmit(e)}>

            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setName(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='name' id='name' />
                    <label htmlFor='name' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Nombre</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setPhone(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='phone' id='phone' />
                    <label htmlFor='phone' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Telefono</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setAddress(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='address' id='address' />
                    <label htmlFor='address' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Direccion</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setEmail(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='email' id='email' />
                    <label htmlFor='email' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">email</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setNit(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='nit' id='nit' />
                    <label htmlFor='nit' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">nit</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setDescription(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='description' id='description' />
                    <label htmlFor='description' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Descripcion</label >
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setValue(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='value' id='value' />
                    <label htmlFor='value' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Valor</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input onChange={(e)=>setStatus(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='status' id='status' />
                    <label htmlFor='status' className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700">Estado</label>
                    <br />
                </div>
            </div>
            <div class="flex items-center m-4 justify-center">
                <div class="relative">
                    <input className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='order_id' id='order_id' value={id} readOnly disabled />
                    <br />
                </div>
            </div>
            <button type="submit">Cobrar</button>
        </form>
    )
}

export default FormInvoices