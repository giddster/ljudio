import { createStore } from 'vuex'

export default createStore({
  state: {
    searchString: '',

    search: [],

    loadedSong: {},

    queue: []

  },

  mutations: {
    
    setSearchString(state, data) {
      state.searchString = data
    },
    
    setSearch(state, data) {
      state.search = data.content
    },

    setLoadedSong(state, data) {
      state.loadedSong = data
    }

  },

  actions: {
    async search({ commit }, searchString) {
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/search/:${searchString}`)
      let data = await response.json()
      console.log(data)
      commit('setSearchString', searchString)
      commit('setSearch', data)
    },
    
    populateLoadedSong({ commit }, data) {
      commit('setLoadedSong', data)
      console.log(data)
    }
  },

  modules: {

  }
})
