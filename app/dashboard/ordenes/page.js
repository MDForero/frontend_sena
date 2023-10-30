import { Td, Th } from "@/app/components/Table"
import useOrder from "@/app/hooks/order"
import Link from "next/link"

export default async function Orders (){
    const path = '/dashboard/ordenes'
    const data = await useOrder().getData()
    return<>
    <table>
        <thead>
            <tr>
                <Th>id orden</Th>
                <Th>id usuario</Th>
                <Th>Fecha</Th>
                <Th>Estado</Th>
                <Th></Th>
            </tr>
        </thead>
        <tbody>
            {data.orders.map(order => {
                return <tr key={order.id}>
                    <Td>{order.id}</Td>
                    <Td>{order.user_id}</Td>
                    <Td>{order.created_at}</Td>
                    <Td>{order.status}</Td>
                    <Td><Link href={path+'/'+order.id}>Lupa</Link></Td>
                </tr>
            })}
        </tbody>
    </table>
    </>
}