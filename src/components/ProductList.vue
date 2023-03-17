<template>
  <div class="row">
    <div class="card" style="width: 15rem" v-for="item in products" :key="item.id">
      <img
        :src="item.imgUrl"
        class="card-img-top"
        :alt="item.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">
          {{ item.price }}
        </p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
</template>


<script>
import products from "../pro/books.json";

export default {
  name: "ProductList",
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
  .card{
    border: none;
  }
</style>
