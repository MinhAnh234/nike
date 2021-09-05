

import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

const state = {
    allProducts: [],
    DetailOfProduct:[],
    sizes:[],
    detailImg:[],
    cart:[],
    avatar_Sizes:[]
}


const actions = {
    getAllProducts({ commit }) {
        axios.get('https://minhanhpkpro.000webhostapp.com/api/allProducts')
            .then(response => {
                commit('set_allProducts', response.data)
        })
    },
    getCart({ commit }) {
        commit('set_cart',localStorage.getItem('cart'));
    },
    getDetailImg({ commit },id) {
        axios.get('https://minhanhpkpro.000webhostapp.com/api/detailProduct/'+id)
            .then(response => {
                commit('set_DetailImg', response.data)
        })
    },
    getSizes({commit}) {
        axios.get('https://minhanhpkpro.000webhostapp.com/api/sizes')
        .then(response=> {
            commit('set_Sizes', response.data)
        })

    },
    getAvatarSize({commit}) {
        axios.get('http://127.0.0.1:8000/api/getAvatarSize')
        .then(response=> {
            commit('set_Avatar_Sizes', response.data)
        })
    },
    getAllCart({commit}) {
        commit('set_data',this.state.cart);
    },
  /*   detail_images_src({commit}) {
        axios.get('https://nameless-cove-44446.herokuapp.com/api/detail_images_src')
        .then(response=> {
            commit('set_detail_images_src', response.data)
        })

    } */
}
const getters={
    cart: state => {return state.cart},
}
const mutations = {
    set_allProducts(state,allProducts ) {
        state.allProducts = allProducts;
    },
    set_DetailImg(state,detailImg ) {
        state.detailImg = detailImg;
    },
    set_Sizes(state,sizes){
        state.sizes= sizes;
    },
    set_Avatar_Sizes(state,avatar_Sizes){
        state.avatar_Sizes= avatar_Sizes;
    },
    set_cart(state,cart){
        state.cart.push(cart);
    },
    set_data(state,set){
        state.cart=set;
    }
    
}
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
    
})