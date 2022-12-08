<template>
  <div>
    <div class="Header">
      <HeaderPageVue />
    </div>
  </div>
</template>

<script>
import HeaderPageVue from './components/HeaderPage.vue';

export default {
  components: {
    HeaderPageVue,
  },
};
</script>

<style>
* {
  margin: 0;
}
.Header {
  background-image: url(@/img/home-background-hero-scaled.jpg);
  background-size: cover;
  background-position: center;
}

</style>
