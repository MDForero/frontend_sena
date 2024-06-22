'use client'
import UpdateForm from "@/app/components/form/UpdateForm"
import { useArticle } from "@/app/hooks/article"
import Image from "next/image"
import { useEffect, useState } from "react"

// export const dynamicParams = true

// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: 'false'
//     };
// }

export default function Page({ params }) {
    const { show } = useArticle()
    const [data, setData] = useState()

    const datos = async () => {
        const data = await show(params.id)
        setData(data)
    }

    useEffect(() => {
        datos()
    }, [])

    return <>
        <main className="flex">
            <Image src={'http://127.0.0.1:8000/storage/' + data?.image} width={0} height={0} alt={data?.name} loading="lazy" className="w-full h-[600px]" />
            <UpdateForm data={data} />
        </main>
    </>

}