import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    users:null,
    products:null,
    product:null,
    showSpinner: true


  },
  getters: {
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
    },
    setUsers : (state, users) => {
      state.users = users
    },
    setProducts :(state, products)=> {
      state.products = products
    },
    setProduct :( state, product)=> {
      state.products = product
    },
    sortProductsByPrice : (state) => {
      state.products.sort((a, b)=> {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    register : async(context, payload) => {
      const { firstName,lastName, emailAdd , gender,cellphoneNumber, userPass}= payload;
      fetch("https://otaku-oz7t.onrender.com/users", {
        method: "POST",
        body: JSON.stringify({
          firstName :firstName,
          lastName: lastName,
          emailAdd : emailAdd,
          cellphoneNumber : cellphoneNumber,
          gender : gender,
          userPass : userPass
        }),
        headers: {
          "Content-type":"application/json; charset=UTF"
        }
      })
      .then((response) => response.json())
      .then((json) => context.commit("setUser",json));
    },
    login: async(context, payload) => {
      const {emailAdd, userPass} = payload;

      const response = await fetch(
        `https://otaku-oz7t.onrender.com/users?email=${emailAdd}&password=${userPass}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
    getProducts: async (context) => {
      fetch("https://otaku-oz7t.onrender.com/products")
      .then((res) => res.json())
      .then((products) => context.commit("setProducts",products));
    },
    getProduct: async (context, id) => {
      fetch("https://otaku-oz7t.onrender.com/products/"+ id)
      .then((res)=> res.json())
      .then((product) => context.commit ("setProduct", product));
    },
    deleteProduct : async (context, id) => {
      fetch("https://otaku-oz7t.onrender.com/products/" + id, {
        method: "DELETE",
      }).then(()=> context.dispatch ("getProducts"));
    },
    createProduct: async (context, product)=> {
      fetch("https://otaku-oz7t.onrender.com/products/", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
    },
    updateProducts: async (context, product) => {
      fetch ("https://otaku-oz7t.onrender.com/products/"+ product.id, {
        method: "PUT",
        body: JSON.stringifiy(product),
        headers: {
          "Content- type": "applictaion/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then(() => context.dispatch ("getProducts"));
    }
  },
  modules: {
  }
})
