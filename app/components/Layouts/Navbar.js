import Link from 'next/link'
import React from 'react'

const Navbar = ({ links, root }) => {

    return (<>
        <nav className='w-full'>
            <div className="relative bg-white dark:bg-gray-800 ">
                <div className="flex flex-row sm:flex-row sm:justify-around ">
                    <nav className="px-6 flex w-full justify-end">
                        {links?.map((item, index) => <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2     transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href={`/${root}/${item.href}`} key={index}>
                            <span className="mx-4 text-lg font-normal capitalize">
                                {item.label}
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>)}
                    </nav>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar