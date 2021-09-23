import { createStore } from 'vuex'

export default createStore({
  state: {
    searchString: '',

    search: [],
    
    artistInfo: [],

    songInfo: [],

    loadedSong: {},

    loadedSongIndex: 0,

    isloaded: false,

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

    setSongInfo(state, data) {
      state.songInfo = data
    },

    setArtistInfo(state, data) {
      state.artistInfo = data
    },

    setLoadedSong(state, data) {
      state.loadedSong = data
    },

    setLoadedSongIndex(state, data) {
      state.loadedSongIndex = data
    },

    updateIsLoaded(state, data) {
      state.isLoaded = data
    },

    updateIsPlaying(state, data) {
      state.isPlaying = data
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

    async getArtist({ commit }, browseId) {
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`)
      let data = await response.json()
      console.log(data)
      commit('setArtistInfo', data)
    },
    
    async getSong({ commit }, videoId) {
      let response = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${videoId}`)
      let data = await response.json()
      console.log(data)
      commit('setSongInfo', data)
    },
    
    populateLoadedSong({ commit }, data) {
      commit('setLoadedSong', data)
      commit('updateIsLoaded', true)
      commit('updateIsPlaying', true)
    },

    findLoadedSongIndex({ commit }, videoId){
      let loadedSongIndex = this.state.search.findIndex((element) => element.videoId === videoId)
      commit('setLoadedSongIndex', loadedSongIndex)
      console.log(loadedSongIndex)
    },

    addToQueue({ commit }, data) {
      commit('addQueueItem', data)
    },

    removeFromQueue({ commit }, data) {
      commit('removeQueueItem', data)
    }
  },
  
})
