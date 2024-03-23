import Materials from "@/app/components/Materials";
import { Td, Th } from "@/app/components/Table";
import FormMaterial from "@/app/components/form/FormMaterial";
import useMaterial from "@/app/hooks/material";
import Link from "next/link";

export default async function page() {
   
    return <>
        <FormMaterial />
        <div className=" flex justify-center items-center">

            <table className="border border-spacing-2 ">
                <thead>
                    <tr >
                        <Th>id</Th>
                        <Th>Nombre</Th>
                        <Th>Stock</Th>
                        <Th>Acciones</Th>
                    </tr>
                </thead>
                <tbody >
                    <Materials />
                </tbody>
            </table>
        </div>
    </>
}