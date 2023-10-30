
import { headers } from '@/next.config'
import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default function useArticle() {
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const getData = async () => {
        const res = await axios.get('/api/articles').then(res => res.data)
        return res
    }

    const createArticle = async (data) => {
        await csrf()
        axios.post('/api/article', data).then(res => res.data).catch(error => { alert(error.response.status + ' ' + error.response.data.message) })
    }

    const show = async (id) => {
        const res = await axios.get(`/api/article/${id}`).then(res => res.data).catch(error => { alert(error.response.status + ' ' + error.response.data.message) })
        return res
    }
    const update = async (data) => {
        console.log(data.id)
        axios.post(`/api/article/${data.id}`, data).then(res =>{ 
            alert("el producto ha sido actualizado"+ ' ' +res.status)
            window.location.href = '/dashboard/articulos/editar'
        }).catch(error => { alert(error.response.status + ' ' + error.response.data.message) })
    }
    const deleteArticle = async (id) => {
        axios.delete(`/api/article/${id}`).then(res => {
            alert("el producto ha sido eliminado"+ ' ' +res.status)
            window.location.href = '/dashboard/articulos/editar'
        }).catch(error => { alert(error.response.status + ' ' + error.response.data.message) })
    }

    return {
        createArticle,
        getData,
        show,
        update,
        deleteArticle,
    }
}