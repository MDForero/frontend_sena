import { Th, Td } from "@/app/components/Table"
import useInvoices from "@/app/hooks/invoices"
import { formToJSON } from "axios"

export default async function page() {
    const data = await useInvoices().getData()
    console.log(data)
    return <section className="flex justify-center items-center">
        <table className="border-2 table-fixed border-separate border-spacing-2">
            <thead className="">
                <tr>
                    <Th>id</Th>
                    <Th>Nombre</Th>
                    <Th>Estado</Th>
                    <Th>Valor</Th>
                    <Th>Nit</Th>
                    <Th>Teléfono</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => <tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item?.user?.name}</Td>
                    <Td>{item.status}</Td>
                    <Td> {JSON.parse(item.order.plates).reduce((acc, item) => acc + item.value, 0)}</Td>
                    <Td>{item?.user?.nit}</Td>
                    <Td>{item?.address}</Td>
                </tr>)}
            </tbody>
        </table>
    </section>
}
