'use client'
import Article from "@/app/components/Article"
import NavArticles from "@/app/components/nav/NavArticles"
import OrderDetails from "@/app/components/OrderDetails"
import Pagination from "@/app/components/Pagination"
import { useArticle } from "@/app/hooks/article"
import { useAuth } from "@/app/hooks/auth"
import { Suspense, useEffect, useState } from "react"

export default function Menu() {
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const { getData } = useArticle()
    const { token } = useAuth()

    const getDatos = async () => {
        const res = await getData(token, page)
        setData(res)
    }

    useEffect(() => {
        getDatos()
    }, [page])
    return <div>
        <section className="max-w-full items-start h-96">
            <div className="grid grid-flow-col-dense px-8">

                <main className="w-full">
                    <NavArticles />
                    {/* 
                    <h1 className="text-2xl font-bold border-b-2">Articulos</h1>
                    <input onChange={search} placeholder="buscar articulo" />
                */}
                    <div className="flex flex-wrap gap-5 mx-3 justify-around items-center  mt-2 max-h-[700px] h-full p-4 pb-96 overflow-hidden overflow-y-auto">
                            {data?.data?.map((item, index) => <Article data={item} key={index} />)}
                    </div>
                    <Pagination page={page} setPage={setPage} last_page={data?.last_page} className='mx-auto' />
                </main>
                <aside className="w-fit">
                    <OrderDetails />
                </aside>
            </div>
        </section>
    </div>
}