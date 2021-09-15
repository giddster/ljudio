import { createStore } from 'vuex'

export default createStore({
  state: {
    searchString: '',

    search: {}

  },

  mutations: {
    
    setSearchString(state, data) {
      state.searchString = data
    },
    
    setSearch(state, data) {
      state.search = data
    }

  },

  actions: {
    async search({ commit }, searchString) {
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/search/:${searchString}`)
      let data = await response.json()
      console.log(data)
      commit('setSearchString', searchString)
      commit('setSearch', data)
    }
  },
  modules: {

  }
})
