import Materials from "@/app/components/Materials";
import { Td, Th } from "@/app/components/Table";
import FormMaterial from "@/app/components/form/FormMaterial";
import useMaterial from "@/app/hooks/material";
import Link from "next/link";

export default async function page() {
   
    return <>
        <FormMaterial />
        <div className=" flex justify-center items-center">
                    <Materials />

            
        </div>
    </>
}