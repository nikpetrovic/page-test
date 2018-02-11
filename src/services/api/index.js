import axios from 'axios'

const ax = axios.create({})

const api = {}

api.getCall = () => ax.get('/mock/test-data.json')

export default api
