import { Td, Th } from "@/app/components/Table";
import TrArticle from "@/app/components/TrArticle";
import useMaterial from "@/app/hooks/material";

export default async function page({ params }) {
    
    return <><table className="border-2 border-spacing-5 ">
        <thead >
            <tr className="border">
                <Th className="p-2">id</Th>
                <Th className="p-2">Nombre</Th>
                <Th className="p-2">Stock</Th>
            </tr>
        </thead>
        <tbody>
            <TrArticle data={params.id}/>
        </tbody>
    </table>
    </>;
}
