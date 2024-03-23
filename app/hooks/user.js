
import Axios from 'axios'
import { useAuth } from './auth'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export default function useUser() {

    const csrf = () => axios.get('/sanctum/csrf-cookie').then(res => res.data).catch(error => { console.log(error) })

    const getData = async (token) => {
        await csrf()
        const res = await axios.get('/api/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data).catch(error => error.response.data.error)
        return res
    }

    const updateData = async (id, data , token) => {
        await axios.post(`/api/users/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => {
            alert(res.status)
        }).catch(error => {
            alert(error.response.statusText, error.response.status)
        })
    }

    const show = async (id, token) => {
        const res = await axios.get(`/api/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => res.data).catch(error => { console.log(error.response.data.error) })
        return res
    }

    return {
        getData,
        updateData,
        show
    }
}