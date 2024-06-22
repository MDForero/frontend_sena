'use client'
import Pagination from "@/app/components/Pagination"
import { Th, Td } from "@/app/components/Table"
import { useAuth } from "@/app/hooks/auth"
import useInvoices from "@/app/hooks/invoices"
import { useEffect, useState } from "react"

export default  function Page() {
    const { token } = useAuth()
    const { getData } = useInvoices()
    const [data, setData] = useState()
    const [page, setPage] = useState(1)

    const datos = async () => {
        const data = await getData(token)
        setData(data)
    }

    const date = (date) => new Date(date).toLocaleDateString()

    useEffect(() => {
        datos()
    }, [])

    return (
        <section className="flex flex-col space-y-8 justify-center items-center my-2">
        <Pagination page={page} setPage={setPage} data={data}/>
            <table className="border-2 table-fixed border-separate border-spacing-2">
                <thead className="">
                    <tr>
                        <Th>Fecha</Th>
                        <Th>id</Th>
                        <Th>Nombre</Th>
                        <Th>Estado</Th>
                        <Th>Valor</Th>
                        <Th>Nit</Th>
                        <Th>Teléfono</Th>
                    </tr>
                </thead>
                <tbody>

                    {data?.data.map((item) => <tr key={item.id}>
                        <Td>{date(item.created_at)}</Td>
                        <Td>{item.id}</Td>
                        <Td>{item?.user?.name}</Td>
                        <Td>{item.status}</Td>
                        <Td> {item.value}</Td>
                        <Td>{item?.user?.nit}</Td>
                        <Td>{item?.address}</Td>
                    </tr>)}
                </tbody>
            </table>
        </section>
    )
}
