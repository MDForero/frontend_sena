import axios from "../lib/axios"


export default  function useInvoices() {
    const getData = async (token) => {
        const res = await axios.get('/api/invoices' , {headers:{
            'Authorization': `Bearer ${token}`
        }}).then(res => res.data).catch(error => { console.log(error) })
        return res
    }
    const postInvoice = async ({data, token}) => {
        await axios.post('/api/invoices', data, { headers:{
            'Authorization': `Bearer ${token}`
        }}).then(res => {alert(res.status)}).catch(error => {
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