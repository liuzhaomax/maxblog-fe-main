SHELL = /bin/bash

# 安装node_modules
install:
	npm install && cd server && npm install

# 打包前端
build:
	npm run build

# 启动前端
client:
	npm start

# 启动后端
server:
	@cd server && npm start