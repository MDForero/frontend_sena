import Link from 'next/link'

const Sidebar = () => {
    return (
        <div>
            <div className="relative bg-white border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-around">
                    <div className="h-screen w-72">
                        <nav className="mt-10 px-6 ">
                            {["ordenes", 'articulos', 'facturacion', 'usuarios'].map((item, index) => <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href={`/dashboard/${item}`} key={index}>
                                <span className="mx-4 text-lg font-normal capitalize">
                                    {item}
                                </span>
                                <span className="flex-grow text-right">
                                </span>
                            </Link>)}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar