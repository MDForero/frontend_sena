'use client'
import TableUser from "@/app/components/table/TableUser"
import { useAuth } from "@/app/hooks/auth"
import useUser from "@/app/hooks/user"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function users() {

    const { user , token } = useAuth()
    const { getData } = useUser()
    const [data, setData] = useState()

    const getDatos = async () => {
        const data = await getData(token)
        setData(data)
    }

    useEffect(() => {
        getDatos()
    }, [user])


    return (<>
        <div className="flex flex-col space-y-8 justify-center items-center w-full p-2">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold">Usuarios</h1>
                <Link href="/dashboard/usuarios/nuevo">
                    Nuevo
                </Link>
            </div>

            {(['admin', 'manager'].includes(user?.role) && data) && <TableUser data={data} />}
        </div>
    </>
    )
}