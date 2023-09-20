export default {
    install(app, options) {
        // 通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令
        app.directive('my-directive', {
            /* 自定义指令钩子 */
        })

        // 通过 app.provide() 使一个资源可被注入进整个应用
        app.provide('translateBook', options)

        // 向 app.config.globalProperties 中添加一些全局实例属性或方法
        app.config.globalProperties.$translate = (key) => {
            return options[key]
        }
    }
}