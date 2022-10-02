import React, { useEffect, useState } from "react"
import "./Home.css"
import { HOME } from "../../config/cstModule"
import { getContributors } from "./handlers"
import HomeProjIntro from "./HomeProjIntro"

function Home() {
    const [contributors, setContributors] = useState(null)

    useEffect(() => {
        (async () => {
            await getContributors()
                .then(res => {
                    setContributors(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        })()
    },[])

    return (
        <div id={HOME.KEY} className={HOME.KEY}>
            <HomeProjIntro/>
            <p>{contributors ? contributors[0].login : "" }</p>
            I am Home <br/>
            I am Home <br/>
            I am Home <br/>
            I am Home <br/>
            I am Home <br/>
            I am Home <br/>
        </div>
    )
}

export default Home