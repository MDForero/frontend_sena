import Link from 'next/link'

const Sidebar = ({ user }) => {
    const links = () => {
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
    return (
        <div>
            <div className="relative bg-white border border-gray-100">
                        <nav className="px-6 w-full flex justify-center p-2 gap-3">
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