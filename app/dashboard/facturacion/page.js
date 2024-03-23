import Invoices from "@/app/components/Invoices"
import { Th, Td } from "@/app/components/Table"
import useInvoices from "@/app/hooks/invoices"

export default async function page() {


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
            <Invoices />
        </table>
    </section>
}
