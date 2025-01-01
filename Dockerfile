# 代表基于哪个镜像
FROM node:alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache tzdata
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN apk del tzdata

# 创建镜像时，执行命令：创建文件夹
RUN mkdir -p /code

# 复制文件：复制当前项目的所有文件
COPY . /code

# 切换路径：
WORKDIR /code

# 创建镜像时，执行命令：安装依赖
RUN yarn install

# 暴露端口：3000
EXPOSE 3000

# 容器启动后，执行yarn run serve
CMD [ "yarn", "run", "start" ]