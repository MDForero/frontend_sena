
import axios from '../lib/axios'


export function useArticle() {

    const getData = async (token, page) => {
        const res = await axios.get(`/api/articles?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data).catch(error => { error.response })
        return res
    }

    const createArticle = async (data) => {
        axios.post('/api/article', data).then(res => {
            alert("el producto ha sido agregado" + res.status)
        }).catch(error => {
            alert(error.response.data.status + ' ' + error.response.data.message)
        })
    }

    const show = async (id, token) => {
        const res = await axios.get(`/api/article/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data).catch(error => { alert(error.response.status + ' ' + error.response.data.message) })
        return res
    }


    const update = async (data) => {
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