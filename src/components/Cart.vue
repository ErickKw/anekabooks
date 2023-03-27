<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item active" aria-current="true">Cart</li>
      <li class="list-group-item" v-for="books in cart" :key="books.id">
        <button
          @click="removeItem(books.id)"
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
         <div class="d-flex align-item-center">
          <div class="flex-shrink-1 align-item-center">
            <img
              :src="books.volumeInfo.imageLinks.thumbnail"
              :alt="books.volumeInfo.title"
            />
            <p>{{ books.volumeInfo.title }}</p>
            <p>Total {{ item.qty }}</p>
            <button @click="reduceQty(books.id)" class="btn btn-sm btn-primary">
              -
            </button>
            <button @click="addQty(books.id)" class="btn btn-sm btn-primary">
              +
            </button>
          </div>
        </div>
       </li> 
      <button class="btn btn-success mt-2" v-if="cart.length">
        Checkout $ {{ totalPrice }}
      </button>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
  ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    },
  },
  methods: {
    ...mapActions(["addQty", "reduceQty", "removeItem"]),
  },
};
</script>
