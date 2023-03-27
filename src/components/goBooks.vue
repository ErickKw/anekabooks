<!-- eslint-disable vue/multi-word-component-names -->
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
       <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to Cart</a>
     </div>
   </div>
 </div>
</template>

<script>
// import axios from 'axios';
import { mapActions } from 'vuex';

export default {
 name:"goBooks",
 data() {
   return {
     books: []
   };
 },
 mounted() {
   // axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript')
   //   .then(response => {
   //     this.books = response.data.items;
   //   })
   //   .catch(error => {
   //     console.log(error);
   //   });
   // this.getBooks();
 },
 methods: {
  ...mapActions(["addToCart"])
 }
};
</script>
