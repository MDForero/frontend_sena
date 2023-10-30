import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})


export default function useOrder() {
    const getData = async () => {
        const res = await axios.get('/api/orders').then(res => res.data)
        return res
    }
    const show = async (id) => {
        const res = await axios.get(`/api/orders/${id}`).then(res => res.data).catch(error => { 
            console.log(error)
        })
        return res
    }
    const update = async (data) => {
        axios.post(`/api/order/${data.id}`, data).then(res => {
            alert("el pedido ha sido actualizado" + ' ' + res.status)
        }).catch(error => {
            alert(error.response.status + ' ' + error.response.data.message + error)
            console.log(error)
        })
    }
    const createOrder = async (data) => {
        axios.post('/api/orders', data).then(res => { alert('orden generada' + ' ' + res.status) }).catch(error => {
            alert(error.response)
            console.log(error.response)
        })
    }
    return {
        getData,
        show,
        update,
        createOrder,
    }
}