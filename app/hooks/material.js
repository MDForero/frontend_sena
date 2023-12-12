import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://127.0.01:8000/api/",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


export default  function useMaterial() {

    const getData = async () => {
        try {
            return await axios.get('materials').then(res => res.data)
        } catch (e) {
            console.log(e)
        }
    }
    const create = async (data) => {
        try {
            return await axios.post('materials', data).then(res => alert(res.data.message, res.data.status))
        } catch (e) {
            console.log(e)
        }
    }
    const show = async (id) => {
        try {
            return await axios.get(`materials/${id}`).then(res => res.data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getData,
        create, 
        show
    }
}
