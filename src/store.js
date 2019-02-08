import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const state ={
  user:[],
  img: []
}
const mutations ={
  SET_NEW_USER(state, data){
    state.user.push(data)
  },
  REMOVE_USER(state, data){
    state.user.splice(data,1)
  },
  SET_IMG (state, data){
    state.img = data
  }
}
const actions ={
  addNewUser({commit}, data){
     commit('SET_NEW_USER', data)
  },
  removeUser({commit}, index){
    commit('REMOVE_USER',index)
  },
  async getImg({commit}) {
    const apiKey = "kr1gdiV4ylqXRl14v4HuuyLpyMHtUx2f"
    const search = "lisa blackpink"
    const {data} = await axios.get('https://api.giphy.com/v1/gifs/search?api_key='+apiKey+'&q='+search+'&limit=25&offset=0&rating=G&lang=en')
    commit('SET_IMG',data)
  }
}
const getters ={

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
