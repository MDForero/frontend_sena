import { Td, Th } from "@/app/components/Table";
import useMaterial from "@/app/hooks/material";

export async function generateStaticParams() {
    const data = await useMaterial().getData()
    return data.map(material => ({
        params: {
            id: material.id.toString()
        }
    }))
}

export default async function page({ params }) {
    const data = await useMaterial().show(params.id)
    console.log(data)
    return <><table className="border-2 border-spacing-5 ">
        <thead >
            <tr className="border">
                <Th className="p-2">id</Th>
                <Th className="p-2">Nombre</Th>
                <Th className="p-2">Stock</Th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-gray-200">
                <Td>{data.id}</Td>
                <Td>{data.name}</Td>
                <Td>{data.quantity}</Td>
            </tr>
        </tbody>
    </table>
    </>;
}
