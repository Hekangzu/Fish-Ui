/*
 * @Author: 何康祖 1442876756@qq.com
 * @Date: 2023-09-07 16:09:43
 * @LastEditors: 何康祖 1442876756@qq.com
 * @LastEditTime: 2023-09-07 16:25:40
 * @FilePath: \fish-ui\examples\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import FishUI from '../packages'
Vue.config.productionTip = false
Vue.use(FishUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
