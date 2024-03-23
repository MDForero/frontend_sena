'use client'
import Article from "@/app/components/Article"
import NavArticles from "@/app/components/nav/NavArticles"
import OrderDetails from "@/app/components/OrderDetails"
import {useArticle} from "@/app/hooks/article"
import { useAuth } from "@/app/hooks/auth"
import { useEffect, useState } from "react"

export default  function Menu() {
    const [data , setData]= useState()
    const {getData} = useArticle()
    const {token} = useAuth()
    const getDatos = async () => {
        const res = await getData(token)
        setData(res)
    }
    const search = (e) => { 
        const filter = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setData(filter)
        if(e.target.value === '') getDatos()
    }
    useEffect(() => {
        getDatos()
    },[])
return <div>
        <section className="flex max-w-full items-start h-96 ">
        <NavArticles />
            <main className="w-3/4  ">
                <h1 className="text-2xl font-bold border-b-2">Articulos</h1>
                <input onChange={search} placeholder="buscar articulo"/>
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