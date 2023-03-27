<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">AnekaBooks</span>
        <span class="navbar-brand mb-0 h1">Cart ({{ totalQty }})</span>
      </div>
    </nav>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: "HeaderComponent",
  computed: {
    ...mapGetters(["cart"]),
    totalQty(){
      return this.cart.reduce((a, b) => a + b.qty, 0);
    }
  },
}

</script>
<style>
nav {
  margin-bottom: 30px;
}
</style>
