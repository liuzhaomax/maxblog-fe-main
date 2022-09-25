// import React from "react"
import axios from "axios"

export const Connect = () => {
    const url = "http://localhost:3030/user"
    return axios.post(url)
}


