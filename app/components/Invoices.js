'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/auth'
import useInvoices from '../hooks/invoices'
import { Td, Th } from './Table'
import Pagination from './Pagination'

const Invoices = () => {
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
        <>
        <Pagination page={page} setPage={setPage} last_page={data?.last_page}/>
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
        </>
    )
}

export default Invoices