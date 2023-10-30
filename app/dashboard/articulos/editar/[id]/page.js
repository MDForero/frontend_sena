import UpdateForm from "@/app/components/UpdateForm"
import useArticle from "@/app/hooks/article"
import Image from "next/image"

export async function generateStaticParams() {
    const { getData } = useArticle()
    const res = await getData()
    const paths = res.map((item) => ({
        params: { id: item.id },
    }))
    return paths
}

export default async function article({ params }) {
    const { show } = useArticle()
    const data = await show(params.id)

    return <>
        <main>
            <Image src={'http://127.0.0.1:8000/storage/' + data.image} width={0} height={0} alt={data.name} loading="lazy" className="w-full h-[600px]" />
        </main>
        <UpdateForm data={data} />
    </>

}