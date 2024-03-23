'use client'

import { useAuth } from "@/app/hooks/auth"
import useMaterial from "@/app/hooks/material"

export default function FormMaterial({id = null, name = null, quantity = null}) {
    const {token} = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, quantity } = e.target
        const data = {
            name: name.value,
            quantity: quantity.value
        }
        await useMaterial().create({data, token})
        name.value = ""
        quantity.value = ""
    }
    return <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center w-full ">
        <fieldset className="flex gap-2 w-fit border p-4 ">
            <legend className="text-center ">Material</legend>
            <div className="flex flex-col">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" defaultValue={id ? id : ''}/>
            </div>
            <div className="flex flex-col ">
                <label htmlFor="quantity">Cantidad</label>
                <input type="number" name="quantity" id="quantity" />
            </div>
            <button className="border-2 h-fit w-fit self-center p-1 font-bold border-green-500 rounded-lg hover:bg-green-500  hover:outline-white hover:outline-offset-4 duration-150 mt-6" type="submit">Guardar</button>
        </fieldset>
    </form>
}