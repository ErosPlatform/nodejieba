const nodejieba = require('../index.js')

console.log(nodejieba.tag('我爱北京天安门'));
console.log(nodejieba.extract('加拿大牛肉', 2))
