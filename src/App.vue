<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Details from './components/Details.vue'
import data from './assets/data.json'
import { reactive, ref } from 'vue'

const productInfo = reactive(data)

const selectedVariant = ref(data.variants[0])

const cart = reactive([])

const changeVariant = (variant) => {
  selectedVariant.value = variant
}

const addToCart = (product) => {
  cart.push(product)
}
</script>

<template>
  <Header :cart="cart" />
  <main>
    <div class="container">
      <div><img :src="selectedVariant.image.url" :alt="selectedVariant.image.alt" /></div>
      <div>
        <Details
          @addProductToCart="addToCart"
          @changeSelectedVariant="changeVariant"
          :productInfo="productInfo"
          :selectedVariant="selectedVariant"
        />
        <!--  -->
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  height: calc(
    100vh - var(--header-top-height) - var(--header-bottom-height) - var(--footer-height)
  );
}
.container > div {
  width: 50%;
  /* border: 1px solid blue; */
  box-sizing: border-box;
}

.container > div:last-child {
  padding: 25px 0 25px 100px;
}

.container > div:first-child {
  padding: 25px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
