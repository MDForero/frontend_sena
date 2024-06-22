'use client'
import { useEffect, useState } from "react"
import useInvoices from "../hooks/invoices"
import { useAuth } from "../hooks/auth"
import useMaterial from "../hooks/material"
import { Td, Th } from "../components/Table"

const Dashboard = () => {
    const { getData } = useInvoices()
    const { token } = useAuth()
    const [data, setData] = useState()
    const [inventory, setInventory] = useState()
    const getInventory = useMaterial().getData
    // const inventory = await show(token)
    const datos = async () => {
        setData(await getData(token))
        setInventory(await getInventory(token, 1))

    }
    useEffect(() => {
        datos()
    }, [token])
    const date = new Date()
    const yesterday = new Date(new Date() - 60 * 60 * 24 * 1000).toDateString()
    const value = data?.data?.filter((item) => (new Date(item.created_at)).toDateString() === date.toDateString()).map(order => JSON.parse(order.order.plates).map(item => parseInt(item.value)).reduce((acc, item) => acc + item, 0)).reduce((acc, item) => acc + item, 0)
    const sellsYesterday = data?.data?.filter(item => yesterday === new Date(item.created_at).toDateString()).map(order => JSON.parse(order.order.plates).map(item => parseInt(item.value)).reduce((acc, item) => acc + item, 0)).reduce((acc, item) => acc + item, 0)

    return (

        <div className="flex justify-center gap-8 mx-auto max-w-7xl w-full pt-8 flex-wrap" >
            <section className="max-w-3xl w-full">
                <article className="p-6 bg-white shadow-xl">
                    <h1 className="font-bold text-gray-500 text-center text-2xl border-b  "> Balance del dia</h1>
                    <div className="flex flex-col justify-between max-w-3xl gap-12  rounded-lg md:p-8 md:items-center md:flex-row w-full h-fit">
                        <div>
                            <span className="block text-gray-700 text-bold">
                                Ventas hoy:
                            </span>
                            <span className="block mt-2 text-4xl font-black text-yellow-500 md:text-5xl">
                                {value}

                            </span>
                        </div>
                        <div className="self-end">
                            <div className="text-left md:text-right md:block">
                                <p className="flex items-center mb-0 text-xl md:mb-2 increase">
                                    Ordenes de hoy {data?.data.filter((item) => (new Date(item.created_at)).toDateString() === date.toDateString()).length} <br />
                                    Ordenes de ayer {data?.data.filter((item) => (yesterday === new Date(item.created_at).toDateString())).length}
                                </p>
                            </div>
                            <p className="inline-block text-lg text-left text-gray-600 md:text-right md:block md:mb-0">
                                ventas de ayer {sellsYesterday}
                            </p>
                        </div>
                    </div>
                </article>
                <article>

                </article>
            </section>
            {inventory &&
                <div className="p-4 bg-white shadow-lg w-fit space-y-3">
                    <h1 className="font-bold text-gray-500 text-2xl border-b "> Productos con bajo Stock</h1>
                    <table className="border border-spacing-2 mx-auto ">
                        <thead >
                            <tr >
                                <Th >id</Th>
                                <Th>Nombre</Th>
                                <Th>Stock</Th>
                            </tr>
                        </thead>
                        <tbody >
                            {inventory && inventory?.data?.map((material) => <tr key={material.id.toString()} className="border-b even:bg-gray-100">
                                <Td>{material.id}</Td>
                                <Td>{material.name}</Td>
                                <Td>{material.quantity}</Td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Dashboard
