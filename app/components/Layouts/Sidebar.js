'use client'
import Link from 'next/link'
import { useState } from 'react'

const Sidebar = ({ user }) => {

    const [show, setShow] = useState(false)
    const links = () => {
        //esto debe ir en el backend
        switch (user?.role) {
            case 'admin':
                return ["ordenes", 'articulos', 'facturacion', 'usuarios', 'inventario']
            case 'waiter':
                return ["ordenes", 'articulos', 'facturacion']
            case 'client':
                return ["ordenes", 'articulos']
            case 'chef':
                return ['ordenes']
            default:
                return []
        }

    }
    return (<div className="relative bg-white border border-gray-100 ">
        <button className={(show ? 'flex-col gap-1 w-full h-full justify-center items-center' : 'group item justify-center items-center -space-x-4 float-right') + ' flex  p-2  bg-gray-400'} onClick={() => setShow(!show)}>
            <div className='border-black order- group-[.item]:border-l-4  group-[.item]:rotate-45 group-[.item]:h-4 group-[.item]:w-4 border-b-4 w-6  m'></div>
            <div className='border-black order-0  border-b-4 w-6 h-0  '></div>
            <div className='border-black order-2 group-[.item]:hidden border-b-4 w-6 h-0 '></div>
        </button>
        <div className={show ? 'hidden' : ' h-screen'}>
            <nav className={"px-6 flex flex-col  justify-center p-2 mt-2 w-full"}>
                <Link className="hover:text-gray-800 hover:bg-gray-100 p-2 flex items-center transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href={`/dashboard/`}>
                    <span className="mx-4 text-lg font-normal capitalize">
                        Dashboard
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                </Link>
                {links().map((item, index) => <Link className="hover:text-gray-800 hover:bg-gray-100 p-2 flex items-center  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href={`/dashboard/${item}`} key={index}>
                    <span className="mx-4 text-lg font-normal capitalize">
                        {item}
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                </Link>)}
            </nav>
        </div>
    </div>
    )
}

export default Sidebar