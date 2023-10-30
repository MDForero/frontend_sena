import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default async function useInvoices() {
    const getData = async () => {
        const res = await axios.get('/api/invoices').then(res => res.data)
        return res
    }
    const postInvoice = async (data) => {
        await axios.post('/api/invoices', data).then(res => res.data).catch(error => {console.log(first(error.response.data.errors))})
    }
    const show = async (id) => {
        await axios.get(`/api/invoices/${id}`).then(res => alert(res.data)).catch(error => { console.log(error) })
        }
    return {
        getData,
        postInvoice,
        show
    }
}