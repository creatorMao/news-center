# 代表基于哪个镜像
FROM node:alpine

RUN apk add -U tzdata
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN apk del tzdata

# 创建镜像时，执行命令：创建文件夹
RUN mkdir -p /code

# 复制文件：复制当前项目的所有文件
COPY . /code

# 切换路径：
WORKDIR /code

# 创建镜像时，执行命令：安装依赖
RUN npm install

# 暴露端口：8080
EXPOSE 3000

# 容器启动后，执行npm run serve
CMD [ "npm", "run", "start" ]