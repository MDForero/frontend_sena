"use client"
import React, { useState } from 'react'
import { Td, Th } from '../Table'

const TableInvoice = ({ invoice }) => {
    const [search, setSearch] = useState(invoice)
    let dateMin, dateMax

    const getDate = (date) => new Date(date).getTime()
    const date = (date) => new Date(date).toDateString()



    const handleSearch = (e) => {
        e.preventDefault()
        console.log()
        const result = invoice.filter(item => getDate(item.created_at) >= getDate(dateMin.value) && getDate(item.created_at) <= getDate(dateMax.value))
        setSearch(result)
    }

    return (<>
         <form onSubmit={handleSearch}>
            <input type='date' name='dateMin' ref={node => dateMin = node} />
            <input type='date' name='dateMax' ref={node => dateMax = node} />
            <button type='submit'>Buscar</button>
        </form>
        <table className="border-2 table-fixed border-separate border-spacing-2">
            <thead>
                <tr>
                    <Th>Fecha</Th>
                    <Th>id</Th>
                    <Th>Estado</Th>
                    <Th>Valor</Th>
                    <Th>Teléfono</Th>
                </tr>
            </thead>
            <tbody>
                {search?.map((item) => <tr key={item.id}>
                    <Td>{date(item.created_at)}</Td>
                    <Td>{item.id}</Td>
                    <Td>{item.status}</Td>
                    <Td> {item.value}</Td>
                    <Td>{item?.address}</Td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td className=" text-right">Valor</td>
                    <td className=" text-center">{search?.length !== 0 ? search?.map(item => item.value).reduce((acc, item) => acc + item) : NaN}</td>
                </tr>
            </tfoot>
        </table>
    </>)
}

export default TableInvoice