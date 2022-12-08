<template>
  <div>
    <div class="dishcard">
      <div class="imgcont">
        <img
          :src="card.image"
          :alt="card.text"
        >
        <div class="imgtext">
          <p>VIEW CART</p>
        </div>
      </div>
      <h2>{{ card.text }}</h2>
      <h3>{{ card.price }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PopularDishes',
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
  .dishcard {
    text-align: center;
    img {
      width: 100%;
      transition: .3s;
    }
    h2 {
      font-size: 28px;
      margin-top: 20px;
      transition: .3s;
      &:hover {
        color: #bf1e23;
        cursor: pointer;
      }
    }
    h3 {
      font-size: 14px;
      font-weight: 200;
      color: #bf1e23;
      margin-top: 10px;
    }
    .imgcont {
      position: relative;

      &:hover{
        cursor: pointer;
        img {
          filter: brightness(70%);
        }
        .imgtext{
          display: block;
        }
      }
      .imgtext{
        position: absolute;
        top: 50%;
        left: 40%;
        color: white;
        font-size: 20px;
        display: none;
      }
    }
  }
</style>
