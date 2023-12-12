'use client'
import Input from "@/app/components/Input";
import useArticle from "@/app/hooks/article";
import { useState } from "react";


export default function Agregar() {
    const { createArticle } = useArticle()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [image, setImage] = useState()
    const [category, setCategory] = useState()
    const [imagePreview, setImagePreview] = useState('')

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
    
          reader.readAsDataURL(file);
        } else {
          setImagePreview('');
        }
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        createArticle({ name, description, category, value, image })
    }
    console.log(image)
    return <div className="flex flex-wrap gap-4 justify-center items center">
        <form onSubmit={handleSubmit}>
            <fieldset className="border-2 flex flex-col  justify-center items-center w-fit p-4">
            <legend className="text-2xl font-bold text-center">Agregar Articulo</legend>
                <fieldset>
                    <legend htmlFor="name">Nombre</legend>
                    <Input onChange={(e) => setName(e.target.value)}  name='name' id='name' type='text' />
                </fieldset>
                <fieldset>
                    <legend htmlFor="description">Descripción</legend>
                    <Input onChange={(e) => setDescription(e.target.value)}  name='description' id='description' type='text' />
                </fieldset>
                <div>
                    <legend htmlFor="value">Valor</legend>
                    <Input onChange={(e) => setValue(e.target.value)}  name='value' id='value' type='number' />
                </div>
                <div>
                    <legend htmlFor="category">Category</legend>
                    <Input onChange={(e) => setCategory(e.target.value)}  name='category' id='category' type='text' />
                </div>
                <div>
                    <legend htmlFor="image">Image</legend>
                    <Input onChange={handleImageChange} name='image' id='image' type='file' />
                </div>
            </fieldset>
            <button type="submit" className="bg-gray-100 p-2 text-xl border-2 border-gray-400 m-2" >Agregar</button>
        </form>
        <article>
        <fieldset className="w-64 text-center p-2 border-2 shadow-2xl">
            <legend className="capitalize font-bold text-2xl ">{name}</legend>
            <img src={imagePreview} width={0} height={0} alt={name} className="h-96 w-64 object-cover" />
            <div className="flex flex-wrap gap-3 m-2 mx-auto w-full justify-center items-center">
                <button  className={`border-2 p-3 rounded-full ${value === 0 ? '' : ' hover:bg-red-500'}`} disabled={value === 0 ? true : false}><svg viewBox="0 -12 32 32" className="w-4 h-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-414.000000, -1049.000000)" fill="#000000"> <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" > </path> </g> </g> </g></svg></button>
                <p className="font-bold text-3xl">1</p>
                <button  className="border-2 p-3 rounded-full hover:bg-green-500"><svg viewBox="0 0 32 32" className="w-4 h-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-362.000000, -1037.000000)" fill="#000000"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus"> </path> </g> </g> </g></svg></button>
            <button x className={`border-2 p-3 rounded-full ${value === 0 ? '' : ' bg-green-500'}`} disabled={value === 0 ? true : false}>Agregar</button>
            </div>
        </fieldset>
    </article>
    </div>
}