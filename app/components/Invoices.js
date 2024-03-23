'use client'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/auth'
import useInvoices from '../hooks/invoices'
import { Td } from './Table'

const Invoices = () => {
    const {token} = useAuth()
    const {getData} = useInvoices()
    const [data, setData] = useState()

    const datos = async  () =>{
        const data = await getData(token)
        setData(data)
    }

    const date = (date) => new Date(date).toLocaleDateString()


    useEffect(() => {
        datos()
    }, [])  

    return (

        <tbody>
            {data?.map((item) => <tr key={item.id}>
                <Td>{date(item.created_at)}</Td>
                <Td>{item.id}</Td>
                <Td>{item?.user?.name}</Td>
                <Td>{item.status}</Td>
                <Td> {item.value}</Td>
                <Td>{item?.user?.nit}</Td>
                <Td>{item?.address}</Td>
            </tr>)}
        </tbody>
    )
}

export default Invoices