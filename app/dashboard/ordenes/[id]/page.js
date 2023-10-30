import ButtonUpdate from "@/app/components/ButtonUpdate"
import { Td, Th } from "@/app/components/Table"
import useOrder from "@/app/hooks/order"

export async function generateStaticParams() {
    const data = await useOrder().getData()
    return data.orders.map(order => {
        return {
            params: {
                id: order.id.toString()
            }
        }
    })
}

export default async function Order({ params }) {
    const data = await useOrder().show(params.id)
    const infOrder = JSON.parse(data.order.plates)
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
            {infOrder.map((item, index) => <tr key={index}>
                <Td>{item.name}</Td>
                <Td className='text-right'>{item.amount}</Td>
                <Td>{item.value}</Td>
                <Td>{item.value * item.amount}</Td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <Td colSpan="3">Total</Td>
                <Td>{infOrder.reduce((acc, item) => acc + item.value * item.amount, 0)}</Td>
            </tr>
        </tfoot>
    </table>
    <ButtonUpdate cart={infOrder}/>
    
    </>
}