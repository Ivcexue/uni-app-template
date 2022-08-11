import request from '../request'

export const getUserInfo = () => {
  return request.get('/getuser')
}

export const test = () => {
  return request.post('/test')
}
