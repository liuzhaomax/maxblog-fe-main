import { COMPONENT, HOME } from "./cstModule"
import { MenuOutlined } from "@ant-design/icons"
import React from "react"

export const MENU_ITEMS_WITHOUT_SUB = [
	{
		key: HOME.KEY,
		className: "menu-item",
		label: HOME.NAME,
		icon: null,
	},
	{
		key: COMPONENT.KEY,
		className: "menu-item",
		label: COMPONENT.NAME,
		icon: null,
	},
]

export const MENU_ITEMS_WITH_SUB = [
	{
		label: "",
		key: "submenu",
		icon: <MenuOutlined className="submenu-icon" />,
		children: MENU_ITEMS_WITHOUT_SUB
	},
]