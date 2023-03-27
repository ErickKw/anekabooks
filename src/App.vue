<template>
  <Header />
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <BooksList/>
      </div>
      <div class="col-md-4">
        <Cart/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Cart from './components/Cart';
import BooksList from './components/BooksList.vue';

export default {
  name: 'App',
  components: {
    Header,
    // ProductList,
    Cart,
    BooksList,
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
