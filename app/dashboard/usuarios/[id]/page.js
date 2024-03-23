'use client'
import useUser from "@/app/hooks/user";
import FormUser from "@/app/components/form/FormUser";
import TableInvoice from "@/app/components/table/TableInvoice";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/hooks/auth";


export default function page({ params }) {
    const { token } = useAuth()
    const { show } = useUser()
    const [user, setUser] = useState()
    const [invoices, setInvoices] = useState()
    const data = async () =>{  
        const datos = await show(params.id, token)
        setUser(datos)
        setInvoices(datos?.invoices)
    }

    useEffect(() => {
        data()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center space-y-8">
            <FormUser id={params.id} data={user} token={token} />
            <TableInvoice invoice={invoices} />
        </div>
    )
}