一个用于接收、并提供查询的信息中转中心

# 适用场景

将此程序部署到一台公网服务器上。

假设内网有一个下载任务，你就可以将下载进度的信息，发送到该程序。

然后就可以在其他客户端（例如 ios 小组件、dashboard 等）查询内网程序的下载进度。

相当于信息的中转站，实现与业务解耦，各业务无需再写单独的查询接口。

# Docker 使用说明

- 需要暴露 3000 端口

```
docker run -d \
   --name news-center1 \
    -p 998:3000 \
    -e NEWS_CENTER_TOKEN=123456789 \
    -v opt/Database:/code/Database \
    news-center:latest
```

- 请求 groupid 为 download 分组的最新一条消息

```
http://xxxxxxx:998/news/get?groupid=download&token=123456789
```

- 向 groupid 为 download 分组的推送一条消息

```
http://xxxxxxx:999/news/add?groupid=download&token=123456789&content=99
```

# 接口文档

详细见[语雀](https://www.yuque.com/5zhimao/fmifvi/gu3gnevsshyeeq7x?singleDoc#)

# 注意事项
