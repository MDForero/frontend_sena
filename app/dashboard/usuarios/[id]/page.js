import { Td, Th } from "@/app/components/Table";
import useUser from "@/app/hooks/user";
import FormUser from "@/app/components/form/FormUser";
export async function generateStaticParams() {
    const { getData } = useUser()
    const data = await getData()
    return data?.user?.map(user => {
        return {
            params: {
                id: user.id
            }
        }
    })
}


export default async function page({ params }) {
    const { show } = useUser()
    const data = await show(params.id)
    return (
        <div>
            <FormUser id={params.id} data={data} />
        </div>
    )
}