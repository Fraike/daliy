const state = {
    avatar: '',
    username: '',
    totalEarlyDays: '',
    bannerUrl: '',
    unknownUrl: '',
  }
  
  const mutations = {
    updateUserInfo(state, payload) {
      for( let i in payload){
        state[i] = payload[i]
      }
    }
  }
  
  const actions = {
    updateUserInfo ( { commit } , payload){
      commit('updateUserInfo', payload)
    }
  }
  
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
  }
  