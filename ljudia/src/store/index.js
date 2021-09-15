import { createStore } from 'vuex'

export default createStore({
  state: {
    music: {
      content: []
    }
  },
  mutations: {
    setMusic(state, data) {
      state.music = data
    }

  },
  actions: {
    async fetchMusic({ commit }) {
      let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/bohemian%20rapsody')
      let data = await response.json()
      console.log(data)
      commit('setMusic', data)
    }
  },
  modules: {

  }
})
