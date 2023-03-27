/* eslint-disable no-undef */

import { createApp } from "vue";
import { createStore } from "vuex";
import BooksApi from "../api/Books";
import App from "../App.vue";

const Store = createStore({
  state: {
    cart: [],
    books: [],
  },

  getters: {
    cart: (state) => state.cart,
    books: (state) => state.books,
  },

  mutations: {
    setBooks(state, books) {
      state.books = books;
    },

    addItemToCart(state, item) {
      const addedItem = state.cart.find((books) => books.id === item.id);
      if (addedItem) {
        addedItem.qty++;
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },

    addQty(state, id) {
      const currentItem = state.cart.find((books) => books.id === id);
      currentItem.qty++;
    },

    reduceQty(state, id) {
      const currentItem = state.cart.find((books) => books.id === id);
      if (currentItem > 1) {
        currentItem.qty--;
      } else {
        state.cart = state.cart.filter((books) => books.id !== id);
      }
    },

    removeItem(state, id) {
      state.cart = state.cart.filter((books) => books.id !== id);
    },
  },

  actions: {
    fetchBooks({ commit }, keyword) {
      BooksApi.getBooksByKeyword(keyword)
        .then((response) => {
          commit("setBooks", response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addToCart({ commit }, item) {
      commit("addItemToCart", item);
    },

    addQty({ commit }, id) {
      commit("addQty", id);
    },

    reduceQty({ commit }, id) {
      commit("reduceQty", id);
    },

    removeItem({ commit }, id) {
      commit("removeItem", id);
    },
  },
});
const app = createApp({ App });

// Install the store instance as a plugin
app.use(Store);

export default Store;
