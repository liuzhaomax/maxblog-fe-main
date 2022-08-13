import axios from "axios"
import { URL } from "../../config/api"

export const getContributors = () => {
    return axios.get(URL.OUTER.Contributors)
}