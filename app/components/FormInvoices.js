'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import useInvoices from "../hooks/invoices"

const FormInvoices = ({ id }) => {
    const router = useRouter()
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
        const { postInvoice } = useInvoices()
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
        router.push('/dashboard/ordenes')

    }
    return (
        <form className=" grid grid-cols-3 max-w-7xl w-fit gap-3  " onSubmit={(e) => handleSubmit(e)}>

            <div className="flex items  justify-center">
                <fieldset >
                    <input required onChange={(e) => setName(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='name' id='name' />
                    <legend htmlFor='name'>Nombre</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required onChange={(e) => setPhone(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='phone' id='phone' />
                    <legend htmlFor='phone'>Telefono</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required onChange={(e) => setAddress(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='address' id='address' />
                    <legend htmlFor='address'>Dirección</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required onChange={(e) => setEmail(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='email' id='email' />
                    <legend htmlFor='email'>Email</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required onChange={(e) => setNit(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='nit' id='nit' />
                    <legend htmlFor='nit'>Nit</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required onChange={(e) => setDescription(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='description' id='description' />
                    <legend htmlFor='description'>Descripcion</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required onChange={(e) => setValue(e.target.value)} className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='value' id='value' />
                    <legend htmlFor='value'>Valor</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <select required onChange={(e) => setStatus(e.target.value)} defaultValue='Pendiente' className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='status' id='status'>
                        <option value="pendiente">Pendiente</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                    <legend htmlFor='status'>Estado</legend>
                </fieldset>
            </div>
            <div className="flex items-center  justify-center">
                <fieldset >
                    <input required className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" name='order_id' id='order_id' value={id} readOnly disabled />
                    <legend htmlFor='order_id'>Orden</legend>
                </fieldset>
            </div>
            <div className="flex items-center justify-center mt-5 ">
            <button type="submit" className="bg-red-500 p-1  rounded-lg w-full font-bold text-2xl h-fit">Cobrar</button>
            </div>
        </form>
    )
}

export default FormInvoices