<template>
  <div>
    <div class="listcont">
      <div class="list">
        <h2>ORDER ONLINE</h2>
        <OrderList
          v-for="item in arrList"
          :key="item.text"
          :testo="item.text"
        />
      </div>
      <div class="list">
        <h2>NAVIGATE</h2>
        <OrderList
          v-for="item in arrListNav"
          :key="item.text"
          :testo="item.text"
        />
      </div>
      <div class="list">
        <h2>INFORMATION</h2>
        <InformationList />
      </div>
      <div class="list">
        <h2 class="hourstitle">
          OPENING HOURS
        </h2>
        <OpeningList
          v-for="item in arrListOpening"
          :key="item.day"
          :giorno="item"
        />
      </div>
      <div class="list voucher">
        <h2>VOUCHER</h2>
        <img
          src="@/img/footer-coupon-600x601.png"
          alt="20%"
        >
        <h3>
          Just Use The Code
        </h3>
        <h4>FIRSTORDER</h4>
        <h3>At Checkout</h3>
      </div>
    </div>
    <div class="subscribecont">
      <img
        src="@/img/takeout-logo-mobile-2x.png"
        alt=""
      >
      <h2>
        Stay In The Loop
      </h2>
      <p>Sign up to receive up to date news and offers directly in your inbox:</p>
      <label for="#">
        <input
          type="email"
          placeholder="yuo@email.com"
        >
      </label>
      <button>
        SUBSCRIBE
      </button>
      <div class="iconcont">
        <font-awesome-icon
          class="icon"
          icon="fa-brands fa-facebook"
        />
        <font-awesome-icon
          class="icon"
          icon="fa-brands fa-twitter"
        />
        <font-awesome-icon
          class="icon"
          icon="fa-brands fa-instagram"
        />
        <font-awesome-icon
          class="icon"
          icon="fa-brands fa-youtube"
        />
        <font-awesome-icon
          class="icon"
          icon="fa-brands fa-linkedin"
        />
        <font-awesome-icon
          class="icon"
          icon="fa-solid fa-rss"
        />
        <font-awesome-icon
          class="icon"
          icon="fa-solid fa-envelope"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OrderList from '@/components/OrderList.vue';
import InformationList from '@/components/InformationList.vue';
import OpeningList from '@/components/OpeningList.vue';

export default {
  name: 'FooterPage',
  components: {
    OrderList,
    InformationList,
    OpeningList,
  },
  data() {
    return {
      arrList: [
        { text: 'Appetizers' },
        { text: 'Burgers' },
        { text: 'Pizza' },
        { text: 'Fries' },
        { text: 'Sides' },
        { text: 'Desserts' },
        { text: 'Beverages' },
        { text: 'Specials' },
      ],
      arrListNav: [
        { text: 'Home' },
        { text: 'Alternate Home' },
        { text: 'Menu' },
        { text: 'About' },
        { text: 'News' },
        { text: 'Contact Us' },
        { text: 'Cart' },
      ],
      arrListOpening: [
        {
          day: 'Mon',
          time: '10AM to 11PM',
        },
        {
          day: 'Tue',
          time: '10AM to 11PM',
        },
        {
          day: 'Wed',
          time: '10AM to 11PM',
        },
        {
          day: 'Thur',
          time: '10AM to 11PM',
        },
        {
          day: 'Fri',
          time: '10AM to 11PM',
        },
        {
          day: 'Sat',
          time: '10AM to 1AM',
        },
        {
          day: 'Sun',
          time: '11AM to 10PM',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    div {
        color: white;
        max-width: 1200px;
        margin: 0px auto;
    }
    .listcont{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 100px;
        }
    }
    .voucher {
        text-align: center;
        img {
            width: 160px;
        }
        h4 {
            color: #ffd028;
        }
    }
    .hourstitle {
        margin-bottom: 40px;
    }
    .subscribecont {
        text-align: center;
        margin-top: 100px;
        padding-bottom: 250px;
        img {
            width: 220px;
        }
        h2 {
            font-size: 50px;
            color: #ffd028;
            margin-top: 20px;
        }
        p {
            margin-top: 10px;
            font-size: 18px;
        }
        input {
            border: none;
            width: 600px;
            height: 50px;
            border-radius: 50px;
            padding: 0 20px;
            margin: 20px auto 0 auto;
            font-size: 16px;
            display: block;
            box-sizing: border-box;
        }
        button {
            background-color: #bf1e23;
            border: none;
            font-size: 20px;
            font-weight: 600;
            word-spacing: 3px;
            border-radius: 50px;
            margin-top: 30px;
            transition: .3s;
            color: white;
            width: 600px;
            height: 50px;
            padding:5px;

            &:hover {
            cursor: pointer;
            color: black;
            background-color: #ffd028;
            }
        }
        .icon {
            margin-left: 40px;
            margin-top: 20px;
            font-size: 20px;
            transition: .3s;
            &:hover {
                cursor: pointer;
                color: rgb(154, 154, 154);
            }
        }
    }
</style>
