<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Details from './components/Details.vue'
import productInfo from './assets/data.json'
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <div></div>
      <div>
        <Details :productInfo="productInfo" />
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
  border: 1px solid blue;
  box-sizing: border-box;
}

.container > div:last-child {
  padding: 25px 0 25px 100px;
}
</style>
