'use client'
import Article from "@/app/components/Article"
import NavArticles from "@/app/components/NavArticles"
import OrderDetails from "@/app/components/OrderDetails"
import {useArticle} from "@/app/hooks/article"
import { useEffect, useState } from "react"

export default  function Menu() {
    const [data , setData]= useState()
    const getDatos = async () => {
        const res = await useArticle().getData()
        setData(res)
    }
    useEffect(() => {
        getDatos()
    },[])
return <div>
        <NavArticles />
        <section className="flex max-w-full items-start h-96 ">
            <main className="w-3/4  ">
                <h1 className="text-2xl font-bold border-b-2">Articulos</h1>
                <div className="flex flex-wrap gap-5 mx-3 justify-around items-center  mt-2 h-screen p-4 pb-96 overflow-hidden overflow-y-auto">
                    {data?.map((item, index) => <Article data={item} key={index} />)}
                </div>
            </main>
            <aside className="flex justify-center items-center">
                <OrderDetails />
            </aside>
        </section>
    </div>
}