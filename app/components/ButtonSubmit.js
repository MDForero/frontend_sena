'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ButtonSubmit = () => {
    const {pending} = useFormStatus()
    return (
        <span className="block w-full rounded-md shadow-sm">
            <button type="submit" aria-disabled={pending} className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Agregar
            </button>
        </span>
    )
}

export default ButtonSubmit