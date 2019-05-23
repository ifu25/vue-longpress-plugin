import LongPress from './longPress'

LongPress.install = function(Vue) {
    /** 
     * 添加 longpress 指令
     * 注意：
     *      绑定的值如果是函数，则不能直接调用，否则绑定指令时该回调直接执行
     *      不能是：v-longpress="callback()"，而应该是：v-longpress="callback"
     *      如果想增加参数：v-longpress="{handler=callback,params:{arg1:1,arg2:2}}"
     */
    Vue.directive('longpress', LongPress)
}

export default LongPress