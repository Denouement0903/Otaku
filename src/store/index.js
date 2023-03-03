import { createStore } from 'vuex'
import axios from 'axios';

const otaku = "https://node-tuesday-rev-deno.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null

  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.products = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    },
    clearUsers(state) {
      state.users = null
    },
    clearUser(state) {
      state.user = null
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b)=> {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse()
      }
      state.asc =!state.asc
    }
  },
  actions: {
    async login(context, payload){
      const res = await axios.post(`${otaku}login`, payload);
      const {result, err} = await res.data;
      if (result) {
        context.commit('setUser', result);
      }
      else {
        context.commit('setMessage', err);
      }
    },

    async register(context, payload){
      let res = await axios.post(`${otaku}register`, payload);
      let {msg, err} = await res.data;
      if(msg){
        context.commit('setMessage', msg);
      }
      else {
        context.commit('setMessage', err);
      }
    },

    async fetchUsers(context, payload) {
      const res = await axios.post(`${otaku}users`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers',msg);
      }else {
        context.commit('setUsers',err);
      }
    },

    async getProducts({commit}, error){
      if(error) {
        console.error(error);
      } else{
        const response = await axios.get(`${otaku}products`) 
        commit('setProducts', response.data);
      }
    },
    async productCreate({dispatch}, product, error){
      if(error){
        console.error(error);
      } else {
        await axios.post(`${otaku}product`, product) 
        dispatch('product')
      }
    }, 
    async UpdateUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.post(`/user/${user.id}`, user)
        dispatch('users')
      }
    }, 
    async DeleteUser({dispatch}, user, error){
      if(error){
        console.error(error);
      } else {
        await axios.delete(`/user/${user.id}`) 
        dispatch('users')
      }
    }
  }
})
