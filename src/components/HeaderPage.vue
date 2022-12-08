<template>
  <div class="container-1">
    <div class="navcont">
      <NavBar />
    </div>
    <div class="titolo">
      <h3>Hungry ?</h3>
      <h1>Great Food</h1>
      <h2>Delivered</h2>
      <button>VIEW OUR MENU</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HeaderPage',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
 * {
  box-sizing: border-box;
  margin: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
 }
 .container-1 {
  height: 110vh;
  max-width: 1250px;
  margin: auto;
  padding: 0 15px;
  }

  .navcont {
    padding: 70px 0px;
  }

 h1 {
  color: #ffd028;
  font-size: 75px;
 }

 h3 {
  font-size: 40px;
 }

 h2 {
  font-size: 75px;
 }

 button {
  background-color: #bf1e23;
  border: none;
  font-size: 15px;
  font-weight: 600;
  word-spacing: 8px;
  padding: 10px 20px;
  border-radius: 50px;
  margin-top: 30px;
  transition: .3s;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #ffd028;
  }
 }

 .titolo {
  margin: 100px 0;
 }
</style>
