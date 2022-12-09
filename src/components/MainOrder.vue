<template>
  <div>
    <h3>
      Download Our
    </h3>
    <h4>
      Ordering App
    </h4>
    <div class="buttoncont">
      <button>
        <font-awesome-icon icon="fa-brands fa-apple" />
        <div class="text">
          <p>Download on the</p>
          <h5>App Store</h5>
        </div>
      </button>
      <button>
        <font-awesome-icon icon="fa-brands fa-google-play" />
        <div class="text">
          <p>GET IT ON</p>
          <h5>Google Play</h5>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
};
</script>

<style lang="scss" scoped>
  div {
    max-width: 1200px;
    margin: auto;
    h3 {
      font-size: 40px;
      color: white;
      letter-spacing: -1px;
    }
    h4 {
      font-size: 90px;
      color: #ffd028;
      letter-spacing: -3px;
    }
  }
  .buttoncont {
    display: flex;
    column-gap: 20px;
    margin-top: 25px;
  }
  button {
    display: flex;
    color: white;
    background-color: black;
    border: none;
    border-radius: 8px;
    padding: 15px;
    font-size: 35px;
    column-gap: 10px;

    &:hover {
      cursor: pointer;
    }
    .text{
      text-align: left;
      p {
        font-size: 10px;
      }
      h5 {
        font-size: 20px;
        font-weight: 200;
      }
    }
  }
</style>
