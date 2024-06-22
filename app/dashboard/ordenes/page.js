'use client'
import Pagination from "@/app/components/Pagination"
import { Td, Th } from "@/app/components/Table"
import useOrder from "@/app/hooks/order"
import useUser from "@/app/hooks/user"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Orders() {
    const path = usePathname()
    const { getData } = useOrder()
    const [page, setPage] = useState(1)

    const [data, setData] = useState()

    const getDatos = async () => {
        const data = await getData()
        setData(data)
    }

    useEffect(() => {
        getDatos()
    }, [path])
    const date = (date) => new Date(date).toLocaleDateString()
    
    return <>
    <Pagination page={page} setPage={setPage} last_page={data?.last_page} />
        <table className="border-2 border-separate border-spacing-0 mx-auto m-4 ">
            <thead>
                <tr>
                    <Th>Fecha</Th>
                    <Th>id orden</Th>
                    <Th>Encargado</Th>
                    <Th>Estado</Th>
                    <Th></Th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.filter(order => order.status === 'pending').sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime() ).map(order =>
                    <tr key={order.id}>
                        <Td>{date(order.created_at)}</Td>
                        <Td>{order.id}</Td>
                        <Td>{order.user.name}</Td>
                        <Td>{order.status}</Td>
                        <Td><Link href={path + '/' + order.id} className=" "><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64" className='w-8 h-8 bg-cyan-300 rounded-full p-1' fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M62.242,53.757L51.578,43.093C54.373,38.736,56,33.56,56,28C56,12.536,43.464,0,28,0S0,12.536,0,28 s12.536,28,28,28c5.56,0,10.736-1.627,15.093-4.422l10.664,10.664c2.344,2.344,6.142,2.344,8.485,0S64.586,56.101,62.242,53.757z M28,54C13.641,54,2,42.359,2,28S13.641,2,28,2s26,11.641,26,26S42.359,54,28,54z M60.828,60.828c-1.562,1.562-4.095,1.562-5.656,0 L44.769,50.425c2.145-1.606,4.051-3.513,5.657-5.656l10.402,10.402C62.391,56.732,62.391,59.266,60.828,60.828z"></path> <path fill="#231F20" d="M28,4C14.745,4,4,14.745,4,28s10.745,24,24,24s24-10.745,24-24S41.255,4,28,4z M28,50 C15.85,50,6,40.15,6,28S15.85,6,28,6s22,9.85,22,22S40.15,50,28,50z"></path> <path fill="#231F20" d="M28,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c8.284,0,15,6.716,15,15c0,0.553,0.447,1,1,1s1-0.447,1-1 C45,18.611,37.389,11,28,11z"></path> </g> </g></svg></Link></Td>
                    </tr> 
                )}
            </tbody>
        </table>
    </>
}