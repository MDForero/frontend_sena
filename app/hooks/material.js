import axios from "../lib/axios"

export default function useMaterial() {



    const getData = async (token , page) => {
        const data = await axios.get(`/api/materials?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data).catch(error => { console.log(error) })
        return data
    }
    const create = async ({ data, token }) => {
        await axios.post('/api/materials', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => alert(res.data.message, res.data.status)).catch(error => {
            console.log(error.response.data.error)
        })
    }
    const show = async ({id, token}) => {
        const res = await axios.get(`/api/materials/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => res.data).catch(error => { console.log(error.response.data.error) })
        return res
    }

    return {
        getData,
        create,
        show
    }
}
