'use client'
import { useAuth } from "@/app/hooks/auth";
import Link from "next/link";

export default async function page() {
    const {user , userRegister} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const data = Object.fromEntries(form)
        userRegister({id:user.id , ...data})
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
                <button className="bg-blue-500 text-white rounded-lg p-2">Guardar</button>
            </form>
        </div>
    </>
}