import Axios from 'axios'

const axios = Axios.create({
    baseUrl:'http://localhost:3090'
})

export default axios