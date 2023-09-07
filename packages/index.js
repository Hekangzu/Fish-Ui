/*
 * @Author: 何康祖 1442876756@qq.com
 * @Date: 2023-09-07 16:20:06
 * @LastEditors: 何康祖 1442876756@qq.com
 * @LastEditTime: 2023-09-07 16:29:39
 * @FilePath: \fish-ui\packages\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'


import Switch from './Switch'

import './fonts/iconfont.css'

const components = [
    Button,
    Dialog,
    Input,
    Switch
]
// 定义install方法
const install = function (Vue) {
    // 注册所有的组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
// 导出install方法
export default {
    install
}