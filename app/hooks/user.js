import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default  function useUser() {
    const getData = async () => {
        const res = await axios.get('/api/users').then(res => res.data).catch(error => { console.log(error) })
        return res
    }
    const updateData = async (id, data) => {
         await axios.post(`/api/users/${id}`, data).then(res => {
            alert(res.status)
            window.location.href = '/dashboard/usuarios'
        }).catch(error => {
            console.log(error.response.data.errors)})
    }

    const show = async (id) => {
        const res = await axios.get(`/api/users/${id}`).then(res =>res.data).catch(error => { console.log(error.response.data.error) })
        return res
    }

    return {
        getData,
        updateData,
        show
    }
}