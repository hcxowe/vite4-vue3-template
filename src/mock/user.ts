import { MockMethod } from 'vite-plugin-mock'

export interface requestParams {
    method: string,
    body: any,
    headers?: {
        authorization?: string
    },
    query: any
}

let ISLOGIN = false

export default [
    {
        url: '/api/session',
        method: 'get',
        rawResponse: async (req, res) => {
            if (ISLOGIN === false) {
                res.setHeader('Content-Type', 'application/json; charset=utf-8')
                res.statusCode = 200
                res.end(JSON.stringify({
                    code: 200,
                    message: '未登录',
                }))

                return
            }

            const ret = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        code: 0,
                        message: 'ok',
                        data: {
                            account: 'tester',
                            name: '测试用户',
                            permission: ['home', 'system', 'user', 'permission', 'about'],
                            sessionId: 'session_00001',
                            userId: 'TEST001'
                        }
                    })
                }, 1000)
            })

            ISLOGIN = true

            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.statusCode = 200
            res.end(JSON.stringify(ret))
        }
    }, 
    {
        url: '/api/login',
        method: 'post',
        rawResponse: async (req, res) => {
            const ret = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        code: 0,
                        message: 'ok',
                        data: {
                            account: 'tester',
                            name: '测试用户',
                            permission: ['home', 'system', 'user', 'permission', 'about'],
                            sessionId: 'session_00001',
                            userId: 'TEST001'
                        }
                    })
                }, 1000)
            })

            ISLOGIN = true

            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.statusCode = 200
            res.end(JSON.stringify(ret))
        }
    }, 
    {
        url: '/api/logout',
        method: 'post',
        rawResponse: async (req, res) => {
            const ret = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        code: 0,
                        message: 'ok',
                        data: ''
                    })
                }, 1000)
            })

            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.statusCode = 200
            res.end(JSON.stringify(ret))
            ISLOGIN = false
        }
    }, 
    {
        url: '/api/userinfo',
        method: 'get',
        rawResponse: async (req, res) => {
            const ret = await new Promise((resolve) => {
                setTimeout(() => {
                    if (ISLOGIN == true) {
                        resolve({
                            code: 0,
                            message: 'ok',
                            data: {
                                account: 'tester',
                                name: '测试用户',
                                permission: ['home', 'system', 'user', 'permission', 'about'],
                                sessionId: 'session_00001',
                                userId: 'TEST001'
                            }
                        })
                    } else {
                        resolve({
                            code: 200,
                            message: '未登录'
                        })
                    }
                }, 1000)
            })

            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.statusCode = 200
            res.end(JSON.stringify(ret))
        }
    },
    {
        url: '/api/notfound',
        method: 'get',
        rawResponse: async (req, res) => {
            res.statusCode = 404
            res.end()
        }
    }
] as MockMethod[]