import { Th, Td } from "@/app/components/Table"
import useInvoices from "@/app/hooks/invoices"

export default async function page() {
    const data = await useInvoices().getData()
    return <section className="flex justify-center items-center">
        <table className="border-2 table-fixed border-separate border-spacing-2">
            <thead className="">
                <tr>
                    <Th>id</Th>
                    <Th>Nombre</Th>
                    <Th>Estado</Th>
                    <Th>Valor</Th>
                    <Th>Nit</Th>
                    <Th>Telefono</Th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => <tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.status}</Td>
                    <Td>{item.value}</Td>
                    <Td>{item.nit}</Td>
                    <Td>{item.phone}</Td>
                </tr>)}
            </tbody>
        </table>
    </section>
}
