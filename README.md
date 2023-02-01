# 使用说明

1. 先安装Nodejs环境
2. npm换源
3. 双击install.bat或者npm install
4. 双击start.bat或者npm run start
   
  # 接口文档
  详细见[语雀](https://www.yuque.com/5zhimao/fmifvi/gu3gnevsshyeeq7x?singleDoc#)

# 其他注意事项
- 默认情况下，不校验token，如需开启，请先将`config.js`里的`checkToken`改成`true`
  
  然后设置`password`

  最后双击`createToken.bat`或者执行`node createToken.js
pause` 创建token，并在请求时带上token参数