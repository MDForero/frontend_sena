'use client'
import React, { useState } from 'react'
import Input from './Input'
import useArticle from '../hooks/article'

const UpdateForm = ({ data }) => {
    const [name, setName] = useState(data?.name)
    const [description, setDescription] = useState(data?.description)
    const [value, setValue] = useState(data?.value)
    const [image, setImage] = useState(data?.image)
    const [category, setCategory] = useState(data?.category)
    const updateData = (e) => {
        e.preventDefault()
        const { update } = useArticle()
        update({ name, description, value, image, category, id: data.id })
    }
    const deleteData = (e) => {
        e.preventDefault
        const { deleteArticle } = useArticle()
        deleteArticle(data.id)
    }

    return (<>
        <form onSubmit={updateData} >
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
            <button type='submit'>Guardar</button>
        </form>
        <button onClick={(e) => deleteData(e)}>Eliminar</button>
    </>
    )
}

export default UpdateForm