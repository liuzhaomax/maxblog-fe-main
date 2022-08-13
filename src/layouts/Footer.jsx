import React, { useEffect } from "react"
import { createRoot } from "react-dom/client"
import "./Footer.css"
import logo from "../assets/logo_bottom_color.png"
import { useNavigate } from "react-router-dom"
import { CONTRIBUTORS, GITHUB } from "../config/constants"
import { HOME } from "../config/cstModule"
import { Tooltip } from "antd"

function Footer() {
	const navigate = useNavigate()

	useEffect(() => {
		generateContributors()
	},[])

	const generateContributors = () => {
		let container = document.getElementById("CONTRIBUTORS")
		let elems = CONTRIBUTORS.map(value => {
			return (
				<a className="contributor" href={value.LINK} target="_blank" rel="noreferrer" key={value.ID}>
					<Tooltip title={value.JOB + "贡献者：" + value.NAME}>
						<img src={value.AVATAR} alt="contributor"/>
					</Tooltip>
				</a>
			)
		})
		let root = createRoot(container)
		root.render(elems)
	}

	const jumpToAnchor = module => {
		navigate(module.FULL_PATH)
	}

	return (
		<div className="Footer">
			<div id="footer-container">
				<div id="footer-upper-wrap">
					<img id="footer-logo" className="footer-upper-wrap" src={logo} alt={"logo"}/>
					<div className="footer-upper-nav">
						<h3 onClick={jumpToAnchor.bind(this, HOME )}>推荐作品</h3>
						<p onClick={jumpToAnchor.bind(this, HOME)}>锚点</p>
					</div>
					<div className="footer-upper-nav">
						<h3>贡献者</h3>
						<div id="CONTRIBUTORS"></div>
					</div>
					<div className="footer-upper-nav">
						<h3>相关资源</h3>
						<a href="https://www.baidu.com" target="_blank" rel="noreferrer">百度</a>
					</div>
					<div className="footer-upper-nav">
						<h3>管理入口</h3>
						<a href="" target="_blank" rel="noreferrer">Admin CMS</a>
						<a href="" target="_blank" rel="noreferrer">Monitor</a>
						<a href="https://mahara.infotech.monash.edu/view/view.php?id=56000" target="_blank" rel="noreferrer">Mahara SM Page</a>
						<a href="https://mahara.infotech.monash.edu/view/view.php?id=56002" target="_blank" rel="noreferrer">Mahara IM Page</a>
						<a href="https://monashie.leankit.com/board/1602422272" target="_blank" rel="noreferrer">LeanKit Board</a>
					</div>
				</div>
				<hr/>
				<div id="footer-lower-wrap">
					<p>
						此博客系统专门用于分享和转载编程学习相关的文章和示例，与展示个人作品。<br/>

					</p>
					<p>
						转载具有原创标记的文章，请注明出处并提供链接。
					</p>
					<p>
						如有洽谈与合作需求，请点击
						<a href={GITHUB} target="_blank" rel="noreferrer" style={{fontWeight:"bold"}}>这里</a>
						跳转至个人GitHub页面，并查看联系方式。
					</p>
					<p>
						©2022 LIU Zhao. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer