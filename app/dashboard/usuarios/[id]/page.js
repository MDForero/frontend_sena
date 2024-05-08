'use client'
import useUser from "@/app/hooks/user";
import FormUser from "@/app/components/form/FormUser";
import TableInvoice from "@/app/components/table/TableInvoice";
import { useAuth } from "@/app/hooks/auth";


export default async function page({ params }) {
    const { token } = useAuth()
    const { show } = useUser()
    const data = await show(params.id, token)
    return (
        <div className="flex flex-col justify-center items-center space-y-8">
            {data.user && <><FormUser data={data?.user} />
            <TableInvoice invoice={data?.invoices} /></>}
        </div>
    )
}
