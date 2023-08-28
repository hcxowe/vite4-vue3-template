import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userInfo: {
                username: '',
                userid: ''    
            },
            /** @type { 'admin' | 'user' | 'accer' } */
            role: '',
            /** @type {{ username: string, userid: string }[]} */
            users: []
        }
    },

    getters: {
        currentUserId: (state) => {
            return state.userInfo.userid
        }
    },

    actions: {
        login(username: string, password: string):boolean {
            if (username && password) {
                this.userInfo = {
                    username: 'hcxowe',
                    userid: 'User4567890'
                }

                this.role = 'admin'
                this.users = [
                    { username: 'dh', userid: 'User4567893' }
                ]

                return true
            }

            this.$reset()
            return false
        }
    }
})