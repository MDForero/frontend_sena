'use client'
import { useAuth } from "@/app/hooks/auth";
import Link from "next/link";

export default function Page() {
    const { user, userRegister } = useAuth()

    const permissions = ['dashboard', 'articulos', 'usuarios', 'inventario', 'facturacion', 'ordenes']

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = Object.fromEntries(new FormData(e.target))
        const data = Object.fromEntries(Object.entries(form).filter(([key, value]) => value !== 'on'))
        const permissions = Object.keys(form).filter(key => form[key] === 'on').join(',')
        userRegister({ id: user.id, ...data , permissions })
    }

    return <>
        <div className="flex flex-col space-y-8 justify-center items-center w-full p-2">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold">Nuevo Usuario</h1>
                <Link href="/dashboard/usuarios">
                    Atras
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name">Nombre</label>
                    <input required type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="nit">Nit</label>
                    <input required type="text" name="nit" id="nit" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">Contraseña</label>
                    <input required type="password" name="password" id="password" />
                </div>
                <div className="space-y-2">
                    {permissions.sort((a, b) => a.localeCompare(b)).map((permission, index) => <>
                        <input type="checkbox" name={permission} id={permission} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2  " />
                        <label htmlFor={permission} class="ms-2 text-sm font-medium text-gray-900 ">{permission} </label>
                        <br />
                    </>
                    )}
                </div>
                <button className="bg-blue-500 text-white rounded-lg p-2">Guardar</button>
            </form>
        </div>
    </>
}