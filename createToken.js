import config from './config.js'
import { generateToken } from './Helper/generatorHelper.js'

let { password, secret } = config
if (!password) {
  console.log('密码password不能为空！');
}
if (!secret) {
  console.log('密文secret不能为空！');
}

if (password && secret) {
  console.log(`根据密码:${password}、密文:${secret} 最终生成的token如下:`);
  console.log(generateToken(password, secret));
}
