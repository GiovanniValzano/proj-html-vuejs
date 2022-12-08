<template>
  <div>
    <div class="Header">
      <HeaderPageVue />
    </div>
    <main-page />
  </div>
</template>

<script>
import MainPage from '@/components/MainPage.vue';
import HeaderPageVue from './components/HeaderPage.vue';

export default {
  components: {
    HeaderPageVue,
    MainPage,
  },
};
</script>

<style>
* {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.Header {
  background-image: url(@/img/home-background-hero-scaled.jpg);
  background-size: cover;
  background-position: center;
}

</style>
