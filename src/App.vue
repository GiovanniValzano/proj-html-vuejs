<template>
  <div>
    <div class="Header">
      <HeaderPageVue />
    </div>
    <main-page />
    <div class="footer">
      <FooterPageVue />
    </div>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage.vue';
import HeaderPageVue from './components/HeaderPage.vue';
import FooterPageVue from './components/FooterPage.vue';

export default {
  components: {
    HeaderPageVue,
    MainPage,
    FooterPageVue,
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

.footer {
  background-image: url(@/img/footer-background-scaled.jpg);
  background-size: cover;
}

</style>
