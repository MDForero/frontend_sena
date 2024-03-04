
import axios from '../lib/axios'


export  function useArticle() {

    const csrf = () => axios.get('/sanctum/csrf-cookie')


    const getData = async () => {
        await csrf()
        const res = await axios.get('/api/articles').then(res => res.data)
        return res
    }

    const createArticle = async (data) => {
        await csrf()
        axios.post('/api/article', data).then(res => {
            alert("el producto ha sido agregado" + res.status)
        }).catch(error => {
            alert(error.response.data.status + ' ' + error.response.data.message)
        })
    }

    const show = async (id) => {
        await csrf()
        const res = await axios.get(`/api/article/${id}`).then(res => res.data).catch(error => { alert(error.response.status + ' ' + error.response.data.message) })
        return res
    }
    

    const update = async (data) => {
        await csrf()
        axios.post(`/api/article/${data.id}`, data).then(res => {
            alert("el producto ha sido actualizado" + ' ' + res.status)
        }).catch(error => { alert(error.response.data.status + ' ' + error.response.data.message) })
    }


    const deleteArticle = async (id) => {
        await csrf()
        axios.delete(`/api/article/${id}`).then(res => {
            alert("el producto ha sido eliminado" + ' ' + res.status)
        }).catch(error => { alert(error.response.data) })
    }


    return {
        createArticle,
        getData,
        show,
        update,
        deleteArticle,
    }
}