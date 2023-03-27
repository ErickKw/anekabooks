<template>
 <div>
  <div>
  <h2>Daftar Buku</h2>
  <ul>
    <li v-for="(book, index) in books" :key="index">{{ book.volumeInfo.title }}</li>
  </ul>
</div>

 </div>
</template>

<script>
import BooksApi from '../api/index';

export default {
name: "GoogleBooks",
mounted() {
  BooksApi.getBooksByKeyword('javascript')
    .then(response => {
      this.books = response.data.items;
    })
    .catch(error => {
      console.log(error);
    });
}
}


</script>