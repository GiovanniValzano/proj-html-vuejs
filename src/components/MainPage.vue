<template>
  <div>
    <div class="container">
      <div class="servicecont">
        <h2>24/7 DELIVERY</h2>
        <h2>OVER 100 DISHES</h2>
        <h2>IN APP ORDERING</h2>
        <h2>FAST DELIVERY</h2>
      </div>
      <h3>Our Most Popular Dishes</h3>
      <div class="dishcont">
        <PopularDishes
          v-for="dish in dishes"
          :key="dish.text"
          :card="dish"
        />
      </div>
      <button class="order">
        START YOUR ORDER
      </button>
    </div>
  </div>
</template>

<script>
import PopularDishes from '@/components/PopularDishes.vue';

export default {
  name: 'MainPage',
  components: {
    PopularDishes,
  },
  data() {
    return {
      dishes: [
        {
          image: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/skin-on-fries-768x1097.jpg',
          text: 'Skin On Fries',
          price: '$3.00 - $6.00',
        },
        {
          image: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/choco-cookie-frappe-768x1097.jpg',
          text: 'Choco Cookie Frappe',
          price: '$4.99',
        },
        {
          image: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/donut-burger-768x1097.jpg',
          text: 'The Donut Burger',
          price: '$6.99',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  * {
    font-family: Arial, Helvetica, sans-serif;
  }
  .container {
    max-width: 1200px;
    margin: auto;
    text-align: center;
  }

  .servicecont{
    display: flex;
    justify-content: space-around;
    position: relative;
    top: -40px;
    background-color: white;
  }

  h2 {
    font-size: 17px;
    color: rgb(62, 62, 62);
    margin-top: 40px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 45px;
    text-align: center;
    margin-top: 35px;
  }

  .dishcont {
    display: flex;
    column-gap: 30px;
    margin-top: 70px;
    margin-bottom: 50px;
  }
  button {
    background-color: #bf1e23;
    border: none;
    font-size: 15px;
    font-weight: 600;
    word-spacing: 3px;
    padding: 13px 25px;
    border-radius: 50px;
    margin-top: 30px;
    transition: .3s;
    color: white;

    &:hover {
      cursor: pointer;
      color: black;
      background-color: #ffd028;
    }
  }
</style>
