<template>
 <div class="row">
   <div class="card" style="width: 15rem" v-for="book in books" :key="book.id">
    <img
        :src="book.volumeInfo.imageLinks.thumbnail"
        class="card-img-top"
        :alt="book.volumeInfo.title"
      />
     <div class="card-body">
       <p class="card-title">{{book.volumeInfo.title}}</p>
       <p class="card-text">
         {{ book.volumeInfo.authors }}
       </p>
       <a href="#" @click="addToCart(books)" class="btn btn-primary">Add to Cart</a>
     </div>
   </div>
 </div>
</template>

<script>
import BooksApi from '../api/Books';
import { mapGetters, mapActions } from 'vuex';

export default {
 name: 'BookList',
 data() {
   return {
     books: [],
   };
 },
 mounted() {
   BooksApi.getBooksByKeyword('javascript')
     .then(response => {
       this.books = response.data.items;
     })
     .catch(error => {
       console.log(error);
     });
 },

 computed: {
    ...mapGetters(["products"]),
  },

  methods: {
    ...mapActions(["getProducts", "addToCart"]),
  },
};
</script>
