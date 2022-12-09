<template>
  <div>
    <ul>
      <li>My Account</li>
      <li>Terms Of Service</li>
      <li>Privacy Policy</li>
    </ul>
    <button>
      <font-awesome-icon icon="fa-brands fa-apple" />
      <div class="textapple">
        <p>Download on the</p>
        <h5>App Store</h5>
      </div>
    </button>
    <button>
      <font-awesome-icon icon="fa-brands fa-google-play" />
      <div class="textgoogle">
        <p>GET IT ON</p>
        <h5>Google Play</h5>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'InformationList',
};
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        margin-left: 0;
        padding: 0;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 20px;
        li {
            transition: .3s;
            margin-top: 20px;
        }
        li:hover {
            cursor: pointer;
            color: #ffd028;
        }
    }
    button {
    display: flex;
    color: white;
    background-color: black;
    border: 2px solid white;
    border-radius: 8px;
    padding: 10px;
    font-size: 30px;
    column-gap: 10px;
    margin-bottom: 8px;

    &:hover {
      cursor: pointer;
    }
    .textgoogle{
      text-align: left;
      p {
        font-size: 10px;
      }
      h5 {
        font-size: 15px;
        font-weight: 200;
      }
    }
    .textapple{
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
