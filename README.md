一个用于接收、并提供查询的信息中转中心

# 适用场景
将此程序部署到一台公网服务器上。

假设内网有一个下载任务，你就可以将下载进度的信息，发送到该程序。

然后就可以在其他客户端（例如ios小组件、dashboard等）查询内网程序的下载进度。

相当于信息的中转站，实现与业务解耦，各业务无需再写单独的查询接口。


# 使用说明

1. 先安装Nodejs环境
2. npm换源
3. 双击install.bat或者npm install
4. 双击start.bat或者npm run start

  # 接口文档
  详细见[语雀](https://www.yuque.com/5zhimao/fmifvi/gu3gnevsshyeeq7x?singleDoc#)

# 注意事项
- 默认情况下，不校验token，如需开启，请先将`config.js`里的`checkToken`改成`true`
  
  然后设置`password`

  最后双击`createToken.bat`或者执行`node createToken.js
pause` 创建token，并在请求时带上token参数

