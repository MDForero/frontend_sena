'use client'
import Pagination from "@/app/components/Pagination"
import { Td, Th } from "@/app/components/Table"
import { useAuth } from "@/app/hooks/auth"
import useUser from "@/app/hooks/user"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {

    const { token } = useAuth()
    const { getData } = useUser()
    const [data, setData] = useState()
    const [page, setPage] = useState(1)

    const getDatos = async () => {
        const data = await getData(token, page)
        setData(data)
    }

    useEffect(() => {
        getDatos()
    }, [page])

    return (<div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="w-full flex gap-12 items-center">
            <h1 className="text-2xl font-bold text-gray-500">Usuarios</h1>
            <Link href="/dashboard/usuarios/nuevo" className=" bg-gray-50 p-2 font-medium">
                Nuevo
            </Link>
        </div>

        <Pagination page={page} setPage={setPage} last_page={data?.last_page} />
        <div className="w-fit h-[600px] overflow-hidden overflow-y-auto relative">

            <table className="table-fixed border-spacing-2 border-2">
                <thead className="sticky top-0 w-full">
                    <tr >
                        <Th>ID</Th>
                        <Th>Imagen</Th>
                        <Th>Nombre</Th>
                        <Th>Correo</Th>
                        <Th>Cargo</Th>
                        <Th>Estado</Th>
                        <Th></Th>
                    </tr>
                </thead>
                <tbody className=" ">
                    {data?.data && data.data.map(item => <tr key={item.name} className="even:bg-gray-400">
                        <Td>{item.nit}</Td>
                        <Td><img src={process.env.NEXT_PUBLIC_API_URL+ "/storage/" + item.imgProfile} alt={'profile de ' + item.name} className="w-16 h-16 rounded-full" /></Td>
                        <Td>{item.name}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.role}</Td>
                        <Td>{item.status}</Td>
                        <Td><Link href={`${item.nit}`}><svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></Td>
                    </tr>)
                    }</tbody>
            </table>
        </div>
    </div>
    )
}