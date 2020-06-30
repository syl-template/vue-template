// 这个js是注册所有的store

import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
    // 排除index.js
    if (fileName === './index.js') return
    // requireModule(fileName)返回的是一个数组，这里因为名字唯一，只有一个数据
    // 去掉./ 和.js 
    // 自动加上命名空间
    // console.log(requireModule(fileName))
// let a= [...requireModule(fileName)];
// console.log(requireModule(fileName));
    modules[camelCase(fileName.replace(/(\.\/|\.js)/g, ''))] = {
        namespaced: true,
        ...requireModule(fileName).default,
    }
    // console.log(modules)
})
export default modules