<template>
  <div class="container">
    <img
      src="@/img/takeout-logo-2x-400x85.png"
      alt="logo"
    >
    <nav>
      <ul>
        <li
          v-for="eleMenu in arrMenu"
          :key="eleMenu.text"
        >
          <a :href="eleMenu.url">{{ eleMenu.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      arrMenu: [
        {
          text: 'Menu',
          url: '#!',
        },
        {
          text: 'Order Online',
          url: '#!',
        },
        {
          text: 'About',
          url: '#!',
        },
        {
          text: 'News',
          url: '#!',
        },
        {
          text: 'Contact Us',
          url: '#!',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;

    img {
      width: 250px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    column-gap: 30px;

    a {
      text-decoration: none;
      color: white;
      font-size: 18px;
      font-weight: 600;
      transition: .4s;

      &:hover {
        color: #ffd028;
      }
    }
  }
</style>
