/* eslint-disable no-undef */

import { createApp } from "vue";
import { createStore } from "vuex";
import BooksApi from "../api/Books";
import App from "../App.vue";

const Store = createStore({
  state: {
    books: [],
    cart: [],
  },

  getters: {
    books: (state) => state.books,
    cart: (state) => state.cart,
  },

  mutations: {
    setBooks(state, books) {
      state.books = books;
    },

    addItemToCart(state, books) {
      const addedItem = state.cart.find((books) => books.id === books.id);
      if (addedItem) {
        addedItem.qty++;
      } else {
        state.cart.push({ ...books, qty: 1 });
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

    addToCart({ commit }, books) {
      commit("addItemToCart", books);
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
