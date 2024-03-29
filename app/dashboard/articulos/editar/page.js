'use client'
import {useArticle} from "@/app/hooks/article";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function edit(){
    const path = usePathname()
    const {getData} = useArticle()
    const res = await getData()
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {res?.map((item, index) => <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.value}</td>
                    <td><img src={'http://127.0.0.1:8000/storage/' + item.image} width={0} height={0} alt={item.title} loading="lazy" className="h-20 w-20 object-cover" /></td>
                    <td><Link href={path + item.id}>Editar</Link></td>
                </tr>)}
            </tbody>

        </table>
        </div> 
}