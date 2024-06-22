import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://hammerhead-app-7ljp5.ondigitalocean.app/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken:true
})

export default axios
