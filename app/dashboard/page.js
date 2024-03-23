'use client'
import { useEffect, useState } from "react"
import useInvoices from "../hooks/invoices"
import { useAuth } from "../hooks/auth"

const Dashboard =  () => {
    const {getData} = useInvoices()
    const{token}= useAuth()
    const [data, setData] = useState()
     
    const datos = async () =>{
        const data = await getData(token)
        setData(data)
    }
    useEffect(() => {
        datos()
    }, [token])
    const date = new Date()
    const value = data?.filter((item)=>(new Date(item.created_at)).toDateString() === date.toDateString()).map(item=> JSON.parse(item.order.plates).reduce((acc, item) => acc + item.value, 0)).reduce((acc, item) => acc + item, 0)
    return (

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                       estas son sus ventas efectuadas el dia de hoy: {data?.filter((item)=>(new Date(item.created_at)).toDateString() === date.toDateString()).length}

                       <br/>
                        este es el balance del dia:{value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
