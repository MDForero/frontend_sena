'use client'
import useUser from '@/app/hooks/user'
import React, { useState } from 'react'
import { useAuth } from '@/app/hooks/auth'

const FormUser = ({ data }) => {
    const { token } = useAuth()
    const select = ['dashboard', 'articulos', 'usuarios', 'inventario', 'facturacion', 'ordenes']
    const { name, email, nit, permissions } = data

    const [role, setRole] = useState(data?.role)
    const [status, setStatus] = useState(data?.status) 

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const permissions = Object.keys(Object.fromEntries(new FormData(e.target))).join(',')
        const { updateData } = useUser()
        const data = {
            role: role,
            status: status,
            nit,
            permissions
        }
        // console.log(data)
        updateData(data, token)
    }

    return (
        <form onSubmit={(e) => HandleSubmit(e)} className='flex flex-col'>
            <fieldset>
                <legend className='font-semibold '>
                    Nombre
                </legend>
                <input value={name} disabled className='bg-gray-300' />
            </fieldset>
            <fieldset>
                <legend className='font-semibold '>
                    Email
                </legend>
                <input value={email} disabled className='bg-gray-300' />
            </fieldset>
            <span className='flex gap-2'>
                <fieldset>
                    <legend className='font-semibold '>
                        Cargo
                    </legend>
                    <select defaultValue={role} onChange={(e) => setRole(e.target.value)} name>
                        <option value='client'>Client</option>
                        <option value='admin'>Admin</option>
                        <option value='waitress'>Waitress</option>
                        <option value='chef'>Chef</option>
                        <option value='manager'>Manager</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend className='font-semibold '>
                        Estado
                    </legend>
                    <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value='authorized'>authorized</option>
                        <option value='unauthorized'>unauthorized</option>
                    </select>
                </fieldset>
            </span>
            <div>
                {select.sort((a, b) => a.localeCompare(b)).map((permission, index) => <>
                    <input type="checkbox" defaultValue={permissions.includes(permission) ? 'on' : null} name={permission} id={permission} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                    <label htmlFor={permission} class="ms-2 text-sm font-medium capitalize text-gray-900 ">{permission} </label>
                    <br />
                </>
                )}
            </div>
            <button className="group border-2 bg-green-700 rounded-md hover:bg-white hover:border-green-700 text-white hover:text-green-700 font-semibold duration-200 ease-in-out flex justify-center items-center gap-2 w-fit px-2 " type='submit'>
                <svg viewBox="0 0 20 20" className="w-8 h-8 group-hover:fill-green-700 fill-white" xmlns="http://www.w3.org/2000/svg" >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <rect x="0" fill="none" width="20" height="20"></rect>
                        <g>
                            <path d="M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z">
                            </path>
                        </g>
                    </g>
                </svg>
                Actualizar
            </button>
        </form>
    )
}

export default FormUser