import axios from "../lib/axios"

export default function useUser() {
    const getData = async (token, page) => {
        const res = await axios.get(`/api/users?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data).catch(error => error.response.data.error)
        return res
    }

    const updateData = async (data, token) => {
        await axios.post(`/api/users/${data.nit}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => {
            alert(res.status)
        }).catch(error => {
            console.log(error)
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