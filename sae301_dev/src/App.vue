<script setup lang="ts">
  import { RouterView, RouterLink } from 'vue-router'
  import Header from './components/HeaderPage.vue'
  import Footer from './components/FooterPage.vue'
</script>

<template>

  <Header />

  <RouterView />

  <Footer />

</template>
