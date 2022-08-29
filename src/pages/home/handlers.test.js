import {getContributors} from "./handlers"
import axios from "axios"

jest.mock("axios")

test("test get contributor function", done => {
    const response = new Promise((resolve, reject) => {
        resolve(1)
        reject(0)
    })
    axios.get.mockResolvedValue(response)
    const result = getContributors()
    expect(result).resolves.toBe(1)
    done()
})