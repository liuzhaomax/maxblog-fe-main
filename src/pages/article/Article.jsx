import React from "react"
import "./Article.css"
import { ARTICLE } from "../../config/cstModule"

function Article() {
	return (
		<div id={ARTICLE.KEY} className={ARTICLE.KEY}>
            I am Component
		</div>
	)
}

export default Article