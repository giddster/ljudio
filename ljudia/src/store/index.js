import { createStore } from 'vuex'

export default createStore({
  state: {
    searchString: '',

    searchResults: {}
  },

  mutations: {
    
    setSearchString(state, data) {
      state.searchString = data
    },
    
    setSearchResults(state, data) {
      state.searchResults = data
    }

  },

  actions: {
    async search({ commit }, searchString) {
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/search/:${searchString}`)
      let data = await response.json()
      console.log(data)
      commit('setSearchString', searchString)
      commit('setSearchResults', data)
    }
  },
  modules: {

  }
})
