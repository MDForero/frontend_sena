'use client'
import React from 'react'

const Pagination = ({ page, setPage, last_page,}, ) => {
    const paginate = () => {
        let pages = []
        if (page <= last_page - 5) {

            for (let i = page; i <= page + 5; i++) {
                pages.push(i)
            }
        }else {
            for (let i = page; i <= last_page; i++) {
                pages.push(i)
            }           
        }
        return pages
    }
   
    return (
        <div className='max-w-7xl mx-auto w-fit flex justify-center items-center' >
            
                <button onClick={() => setPage(page - 1)} disabled={page === 1 ? true : false} type="button" className="w-full p-2 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                    <svg width="10" fill="currentColor" height="24" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button><div className={page === 1 ? 'hidden ' : '' + 'flex'}>
                    <button onClick={() => setPage(1)} className={`w-full p-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100 $`}>1</button>
                    <div className='w-full p-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100'> ... </div>
                </div>

                {last_page && paginate().map((item, index) => <button key={index} onClick={() => setPage(item)} className={`w-full p-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100 ${page === item ? 'bg-gray-400' : ''}`}>{item}</button>)}
                <div className={last_page - 5 <= page ? 'hidden ' : '' + 'flex'}>
                    <div className='w-full p-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100'> ... </div>
                    <button onClick={() => setPage(last_page)} className={`w-full p-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100 `}>{last_page}</button>
                </div>
                <button onClick={() => setPage(page + 1)} disabled={page === last_page} type="button" className="w-full p-2 text-base text-gray-600 bg-white border-t  border border-r rounded-r-xl hover:bg-gray-100">
                    <svg width="10" fill="currentColor" height="24" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
        </div>
    )
}

export default Pagination