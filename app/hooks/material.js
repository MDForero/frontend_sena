
import Axios from "axios";
import { useAuth } from "./auth";

const axios = Axios.create({
    baseURL: "http://127.0.01:8000/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});


export default function useMaterial() {



    const getData = async (token) => {
        const data = await axios.get('materials', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data).catch(error => { console.log(error) })
        return data
    }
    const create = async ({ data, token }) => {
        await axios.post('materials', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => alert(res.data.message, res.data.status)).catch(error => {
            console.log(error.response.data.error)
        })
    }
    const show = async ({id, token}) => {
        const res = await axios.get(`materials/${id}`, {
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
