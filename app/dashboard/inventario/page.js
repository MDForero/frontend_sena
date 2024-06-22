'use client'
import Materials from "@/app/components/Materials";
import Pagination from "@/app/components/Pagination";
import { Td, Th } from "@/app/components/Table";
import FormMaterial from "@/app/components/form/FormMaterial";
import { useAuth } from "@/app/hooks/auth";
import useMaterial from "@/app/hooks/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {

    const { getData } = useMaterial()
    const [page, setPage] = useState(1)
    const { token } = useAuth()
    const [data, setData] = useState()
    const datos = async () => {
        const data = await getData(token, page)
        setData(data)
    }
    useEffect(() => {
        datos()
    }, [page])

    return (<div >
        <Pagination page={page} setPage={setPage} last_page={data?.last_page} />
        <table className="border border-spacing-2 mx-auto">
            <thead>
                <tr >
                    <Th>id</Th>
                    <Th>Nombre</Th>
                    <Th>Stock</Th>
                    <Th>Acciones</Th>
                </tr>
            </thead>
            <tbody >
                {data?.data.map((material) => <tr key={material.id.toString()} className="border-b even:bg-gray-100">
                    <Td>{material.id}</Td>
                    <Td>{material.name}</Td>
                    <Td>{material.quantity}</Td>
                    <td className="flex justify-evenly items-center p-2">
                        <Link href={material.id.toString()}>
                            <svg className='w-6 h-6' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="reload"> <g> <path d="M22,16c0,4.41-3.586,8-8,8s-8-3.59-8-8s3.586-8,8-8l2.359,0.027l-1.164,1.164l2.828,2.828 L24.035,6l-6.012-6l-2.828,2.828L16.375,4H14C7.375,4,2,9.371,2,16s5.375,12,12,12s12-5.371,12-12H22z"></path> </g> </g> </g> </g></svg>
                        </Link>

                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>)
}