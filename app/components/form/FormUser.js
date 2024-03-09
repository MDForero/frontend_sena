'use client'
import useUser from '@/app/hooks/user'
import React, { useState } from 'react'

const FormUser = ({id, data}) => {
    const [role, setRole] = useState(data?.user?.role)
    const [status, setStatus] = useState(data?.user?.status)
    const[name, setName] = useState(data?.user?.name)
    const[email, setEmail] = useState(data?.user?.email)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { updateData } = useUser()
        const data = {
            role,
            status,
            name,
            email,
        }
        updateData(id, data)
    }
    
    return (
        <form onSubmit={(e)=>handleSubmit(e)} className='inline-flex gap-4'>
            <fieldset>
                <legend>
                    Nombre
                </legend>
                <input value={name} disabled />
            </fieldset>
            <fieldset>
                <legend>
                    Email
                </legend>
                <input value={email} disabled />
            </fieldset>
            <fieldset>
                <legend>
                    Cargo
                </legend>
                <select defaultValue={role} onChange={(e) => setRole(e.target.value)} >
                    <option value='client'>Client</option>
                    <option value='admin'>Admin</option>
                    <option value='waitress'>Waitress</option>
                    <option value='chef'>Chef</option>
                </select>
            </fieldset>
            <fieldset>
                <legend>
                    Estado
                </legend>
                <select defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value='authorized'>authorized</option>
                    <option value='unauthorized'>unauthorized</option>
                </select>
            </fieldset>
            <button className="border-2"><svg viewBox="0 0 20 20" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"></path> </g> </g></svg></button>
        </form>
    )
}

export default FormUser