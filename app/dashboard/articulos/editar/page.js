'use client'
import {useArticle} from "@/app/hooks/article";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default async function Page(){
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
                {res?.data.map((item, index) => <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.value}</td>
                    <td><img src={process.env.NEXT_PUBLIC_API_URL + '/storage/' + item.image} width={0} height={0} alt={item.title} loading="lazy" className="h-20 w-20 object-cover" /></td>
                    <td><Link href={path + item.id}>Editar</Link></td>
                </tr>)}
            </tbody>

        </table>
        </div> 
}