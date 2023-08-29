import axios from './httpRequest'

export function login(username: string, password: string) {
    return axios({
        url: '/api/login',
        method: 'post',
        data: {
            account: username,
            password
        }
    }, '正在登录...')
}

export function loginout() {
    return axios({
        url: '/api/logout',
        method: 'post'
    }, '正在退出登录...')
}

export function userinfo() {
    return axios({
        url: '/api/session',
        method: 'get'
    })
}