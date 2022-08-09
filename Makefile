SHELL = /bin/bash

# 安装node_modules
install:
	npm install && cd server && npm install

# 打包前端
build:
	npm run build

# 启动前端
client_run:
	npm start

# 启动后端
server_run:
	@cd server && npm start