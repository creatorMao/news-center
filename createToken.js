import config from './config.js'
import { generateToken } from './Helper/generatorHelper.js'

let { password, secret } = config

console.log(`根据密码:${password}、密文:${secret} 最终生成的token如下:`);
console.log(generateToken(password, secret));