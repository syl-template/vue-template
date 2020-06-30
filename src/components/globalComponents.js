import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'

import camelCase from 'lodash/camelCase'
//引入所有的组件
// require.context的三个参数
// 要搜索的文件夹目录
// 是否搜索它的子目录
// 以及一个匹配文件的正则表达式

// require.context模块导出（返回）一个（require）函数，
// 这个函数可以接收一个参数：request 函数–这里的 request 应该是指在 require() 语句中的表达式


// 注册全局组件。
// 使用Vue.component()方法注册全局组件。
// 第一个参数是自定义元素名称，也就是将来在别的组件中使用这个组件的标签名称。
// 第二个参数是将要注册的Vue组件。


// export default {
//     install: function (Vue) {
//         const requireComponent = require.context(
//             // 其组件目录的相对路径
//             '@components',
//             // 是否查询其子目录
//             true,
//             // 匹配基础组件文件名的正则表达式
//             /\w+\.vue$/
//         )

//         requireComponent.keys().forEach(fileName => {
//             // 获取组件配置
//             const componentConfig = requireComponent(fileName)

//             // 获取组件的 PascalCase 命名
//             const componentName = upperFirst(
//                 camelCase(
//                     // 获取和目录深度无关的文件名
//                     fileName
//                         .split('/')
//                         .pop()
//                         .replace(/\.\w+$/, '')
//                 )
//             )

//             // 全局注册组件
//             Vue.component(
//                 componentName,
//                 // 如果这个组件选项是通过 `export default` 导出的，
//                 // 那么就会优先使用 `.default`，
//                 // 否则回退到使用模块的根。
//                 componentConfig.default || componentConfig
//             )
//         })
//     }
// }
export default {
    install: function (Vue) {
        const requireComponents = require.context('@components', true, /\w+\.vue$/)
// console.log(requireComponents)
// 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚
        requireComponents.keys().forEach(fileName => {
            // keys是文件名数组
            // console.log("fileNAme", fileName)
            // 组件实例
            const reqCom = requireComponents(fileName)
            // 自定义组件名
            // 这里使用
            const componentName =upperFirst( camelCase(fileName.replace(/\.\w+/, '').replace(/\.\//, '').replace(/\w+\//, '')))
            // console.log("componentName-1", componentName)
            // console.log('componentName-2', reqCom.default.name)
            // console.log(reqCom.default)
            // console.log("reqCom", reqCom)
            // 如果这个组件选项是通过 `export default` 导出的，
            // 那么就会优先使用 `.default`，
            // 否则回退到使用模块的根。
            Vue.component(componentName, reqCom.default || reqCom)

            // console.log(Vue.prototype)
        })
    }
}
