'use client'
import ButtonUpdate from "@/app/components/ButtonUpdate"
import FormInvoices from "@/app/components/form/FormInvoices"
import { Td, Th } from "@/app/components/Table"
import useOrder from "@/app/hooks/order"
import { useAuth } from "@/app/hooks/auth"
import { useEffect, useState } from "react"

// export async function generateStaticParams() {
//     // const data = await useOrder().getData()
//     return data.orders.map(order => {
//         return {
//             params: {
//                 id: order.id.toString()
//             }
//         }
//     })
// }

export default function Order({ params }) {
    const { token } = useAuth()
    const { show } = useOrder()
    const [data, setData] = useState()
    const order = async () => {
        const datos = await show({ id: params.id, token: token })
        setData(datos)
    }
    useEffect(() => {
        order()
        console.log(data)
    }, [])
   

    return <>
        <table>
            <thead>
                <tr>
                    <Th>Nombre</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio</Th>
                    <Th>Subtotal</Th>
                    <Th>Eliminar</Th>
                </tr>
            </thead>
            <tbody>
                { data?.order?.plates?.map((item, index) => <tr key={index}>
                    <Td>{item.name}</Td>
                    <Td className='text-right'>{item.amount}</Td>
                    <Td>{item.value}</Td>
                    <Td>{item.value * item.amount}</Td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <Td colSpan="3">Total</Td>
                    <Td>{ data?.order?.plates?.reduce((acc, item) => acc + item.value * item.amount, 0)}</Td>
                </tr>
            </tfoot>
        </table>
        <FormInvoices id={params.id} value={ data?.order?.plates?.reduce((acc, item) => acc + item.value * item.amount, 0)} />
        <ButtonUpdate cart={data?.order?.plates} />




    </>
}