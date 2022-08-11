import { createStore } from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'

import { USER_INFO_KEY } from '@/config'
import { StateType } from './index.d'

const files = import.meta.globEager('./modules/*.ts')
const keys = Object.keys(files)

const modules: any = {}

keys.forEach((key) => {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = files[key].default
  }
})

const vuexPersisted = CreatePersistedState({
  key: USER_INFO_KEY,
  paths: ['user'],
  storage: {
    getItem: (key) => uni.getStorageSync(key),
    setItem: (key, value) => uni.setStorageSync(key, value),
    removeItem: (key) => uni.removeStorageSync(key)
  }
})

export default createStore<StateType>({
  plugins: [vuexPersisted],
  modules
})
