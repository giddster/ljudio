import { createStore } from 'vuex'

export default createStore({
  state: {
    searchString: '',

    search: [],

    loadedSong: {},

    isPlaying: false,

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
    },

    addQueueItem(state, data) {
      state.queue.push(data)
    },

    removeQueueItem(state, data) {
      state.queue.pop(data)
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
    },

    addToQueue({ commit }, data) {
      commit('addQueueItem', data)
    },

    removeFromQueue({ commit }, data) {
      commit('removeQueueItem', data)
    }
  },

  modules: {

  }
})
