import { Th, Td } from "@/app/components/Table"
import useInvoices from "@/app/hooks/invoices"

export default async function page() {

    const data = await useInvoices().getData()
    const date = (date) => new Date(date).toLocaleDateString()

    return <section className="flex flex-col space-y-8 justify-center items-center my-2">
      
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
                {data.map((item) => <tr key={item.id}>
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
}
