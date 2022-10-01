import axios from "axios"
import { URL } from "../../config/api"

export const getDemo = () => {
    return axios.get(URL.INNER.Demo)
}

export  const getDemoById = (id) => {
    return axios.get(URL.INNER.Demo+`/${id}`)
}