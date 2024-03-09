import { Td, Th } from "@/app/components/Table"
import TableUser from "@/app/components/table/TableUser"
import useUser from "@/app/hooks/user"
import Link from "next/link"

export default async function users() {
    const data = await useUser().getData()


    return (<>
        <div className="flex flex-col space-y-8 justify-center items-center w-full p-2">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold">Usuarios</h1>
                <Link href="/dashboard/usuarios/nuevo">
                    Nuevo
                </Link>
                </div>
            <TableUser data={data} />
        </div>
    </>
    )
}