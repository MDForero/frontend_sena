import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
})

export default  function useInvoices() {
    const getData = async () => {
        const res = await axios.get('/api/invoices').then(res => res.data).catch(error => { console.log(error) })
        return res
    }
    const postInvoice = async (data) => {
        await axios.post('/api/invoices', data).then(res => {alert(res.status)}).catch(error => {
            alert(error.response.data.message)
            console.log(error.response.data.error)
        }
            )
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