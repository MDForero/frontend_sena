'use client'
import TableInvoice from "@/app/components/table/TableInvoice"
import { useAuth } from "@/app/hooks/auth"
import useUser from "@/app/hooks/user"

export default async function Page() {
    const { user } = useAuth()
    const { show } = useUser()
    const data = await show(user?.nit)
    console.log(data?.invoices)

    return data && <div className="flex gap-2">
        <div className="p-4 bg-white shadow-lg rounded-2xl w-80 ">
            <div className="flex flex-row items-start gap-4">
                <img src={'https://hammerhead-app-7ljp5.ondigitalocean.app/storage/' + user?.imgProfile} alt="profile" className="rounded-lg w-28 h-28" />
                <div className="flex flex-col justify-between w-full h-28">
                    <div>
                        <p className="text-xl font-medium text-gray-800 ">
                            {user?.name}
                        </p>
                        <p className="text-lg text-gray-400">
                            {user?.role}
                        </p>
                    </div>
                    <div className="w-full p-2 bg-blue-100 rounded-lg ">
                        <div className="flex items-center justify-between text-xs text-gray-400 ">
                            <p className="flex flex-col">
                                Pedidos
                                <span className="font-bold text-black ">
                                    {data?.invoices.length}
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Total
                                <span className="font-bold text-black ">
                                    {data?.invoices.length !== 0 ? data?.invoices.map(item => item.value).reduce((acc, item) => acc + item)/1000 : 0} K
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Rating
                                <span className="font-bold text-black ">
                                    9.3
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-4 bg-white shadow-lg rounded-2xl ' >
            {data?.invoices.length !== 0 ? <TableInvoice invoice={data?.invoices} /> : <p>No hay pedidos</p>}
        </div>
    </div>
}