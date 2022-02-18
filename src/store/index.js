import { createStore } from "vuex"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase"

const store = createStore({
  state () {
    return {
      user: null,
      theme: 'light'
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_THEME(state, theme) {
      state.theme = theme
    },
  },
  actions: {
    async getUser({ commit }, usr) {
      let user = {
        uid: 0
      };
      if (usr?.uid) {
        user = usr
      }
      const userData = await getDoc(doc(db, "users", user.uid))
      if (userData.exists) {
        let data = userData.data()
        commit('SET_USER', data)
      } else {
        console.log('User data not found.')
        commit("SET_USER", null)
      }
    },
    clearUser({ commit }) {
      commit('SET_USER', null)
    },
    setTheme({ commit }, theme) {
      commit('SET_THEME', theme)
    },
  },
  getters: {
    user (state) {
      return state.user
    },
  },
})

export default store
