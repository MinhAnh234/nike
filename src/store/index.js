

import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

const state = {
    allProducts: [],
    DetailOfProduct:[],
    detail_images_src:[],
    sizes:[],
    cart:[],
}


const actions = {
    getAllProducts({ commit }) {
        axios.get('https://nameless-cove-44446.herokuapp.com/api/allProducts')
            .then(response => {
                commit('set_allProducts', response.data)
        })
    },
    getCart({ commit }) {

        commit('set_cart',localStorage.getItem('cart'));
    },
    getSizes({ commit }) {
        axios.get('https://nameless-cove-44446.herokuapp.com/api/sizes')
            .then(response => {
                commit('set_Sizes', response.data)
        })
    },
    DetailOfProduct({commit}) {
        axios.get('https://nameless-cove-44446.herokuapp.com/api/DetailOfProduct')
        .then(response=> {
            commit('set_DetailOfProduct', response.data)
        })

    },
    detail_images_src({commit}) {
        axios.get('https://nameless-cove-44446.herokuapp.com/api/detail_images_src')
        .then(response=> {
            commit('set_detail_images_src', response.data)
        })

    }
}
const getter={}
const mutations = {
    set_allProducts(state,allProducts ) {
        state.allProducts = allProducts;
    },
    set_Sizes(state,sizes ) {
        state.sizes = sizes;
    },
    set_DetailOfProduct(state,DetailOfProduct){
        state.DetailOfProduct= DetailOfProduct;
    },
    set_detail_images_src(state,detail_images_src){
        state.detail_images_src= detail_images_src;
    },
    set_cart(state,cart){
        state.cart.push(cart);
    }
    
}
export default new Vuex.Store({
    state,
    actions,
    getter,
    mutations,
    
})