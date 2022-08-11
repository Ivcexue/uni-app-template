import { Module } from 'vuex'

export interface UserStateType {
  name: string
  userInfo: {
    name?: string
    age?: number
  }
}

interface RootStateType {}

const userModule: Module<UserStateType, RootStateType> = {
  namespaced: true,
  state: () => ({
    name: 'Hello, PG!',
    userInfo: {}
  }),

  mutations: {
    SET_USERINFO(state, payload) {
      state.userInfo = payload
    }
  }
}

export default userModule
