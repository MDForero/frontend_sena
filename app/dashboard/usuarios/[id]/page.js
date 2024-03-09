import useUser from "@/app/hooks/user";
import FormUser from "@/app/components/form/FormUser";
import TableInvoice from "@/app/components/table/TableInvoice";

export async function generateStaticParams() {
    const { getData } = useUser()
    const data = await getData()
    return data?.user?.map(user => {
        return {
            params: {
                id: user.nit
            }
        }
    })
}


export default async function page({ params }) {
    const { show } = useUser()
    const data = await show(params.id)
    const { invoices } = data.user
    return (
        <div className="flex flex-col justify-center items-center space-y-8">
            <FormUser id={params.id} data={data} />
            <TableInvoice invoice={invoices} />
        </div>
    )
}