'use client'
import React, { useState } from 'react'
import Input from '../Input'
import { useArticle } from '../../hooks/article'
import { useRouter } from 'next/navigation'

const UpdateForm = ({ data }) => {
    const router = useRouter()

    const [name, setName] = useState(data?.name)
    const [description, setDescription] = useState(data?.description)
    const [value, setValue] = useState(data?.value)
    const [image, setImage] = useState(data?.image)
    const [category, setCategory] = useState(data?.category)


    const UpdateData = (e) => {
        e.preventDefault()
        const { update } = useArticle()
        update({ name, description, value, image, category, id: data.id })
        router.push('/dashboard/articulos/editar')
    }


    const DeleteData = (e) => {
        e.preventDefault
        const { deleteArticle } = useArticle()
        deleteArticle(data.id)
        router.push('/dashboard/articulos/editar')
    }

    return (<>
        <form onSubmit={UpdateData} className='p-4 border m-2 rounded-lg'>
            <fieldset >
                <legend>Nombre</legend>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </fieldset>
            <fieldset>
                <legend>Descripción</legend>
                <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </fieldset>
            <fieldset>
                <legend>Valor</legend>
                <Input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            </fieldset>
            <fieldset>
                <legend>Imagen</legend>
                <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </fieldset>
            <fieldset>
                <legend>Categoria</legend>
                <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </fieldset>
            <div className='w-96 flex justify-between p-4'>
                <button type='submit'>Guardar</button>
                <button type='button' onClick={(e) => DeleteData(e)}>Eliminar</button>
            </div>
        </form>
    </>
    )
}

export default UpdateForm