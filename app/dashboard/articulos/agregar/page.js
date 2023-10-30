'use client'
import Input from "@/app/components/Input";
import useArticle from "@/app/hooks/article";
import { useState } from "react";


export default function Agregar() {
    const {createArticle} = useArticle()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [image, setImage] = useState()
    const [category, setCategory] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        createArticle({name, description, category, value, image})
    }

    return <div className="">
        <form onSubmit={handleSubmit}>
            <div>
                <Input onChange={(e)=> setName(e.target.value)} placeholder="Nombre" name='name' id='name' type='text' />
            </div>
            <div>
                <Input onChange={(e)=> setDescription(e.target.value)} placeholder="Description" name='description' id='description' type='text' />
            </div>
            <div>
                <Input onChange={(e)=> setValue(e.target.value)}  placeholder="00000" name='value' id='value' type='number' />
            </div>
            <div>
                <Input onChange={(e)=> setCategory(e.target.value)}  name='category' id='category' type='text' />
            </div>
            <div>
                <Input onChange={(e)=> setImage(e.target.files[0])}  name='image' id='image' type='file' />
            </div>
            <button type="submit" className="bg-gray-100 p-2 text-xl border-2 border-gray-400 m-2" >Agregar</button>
        </form>
    </div>
}