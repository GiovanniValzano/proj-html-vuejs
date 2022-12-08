<template>
  <div>
    <div class="menubutton">
      <button>
        VIEW THE FULL MENU
      </button>
    </div>
    <h2>Menu Categories</h2>
    <div class="cardcont">
      <MenuCards
        v-for="card in arrCards"
        :key="card.text"
        class="card"
        :categorie="card"
      />
    </div>
  </div>
</template>

<script>
import MenuCards from '@/components/MenuCards.vue';

export default {
  name: 'MenuCategories',

  components: {
    MenuCards,
  },

  data() {
    return {
      arrCards: [
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/appetizers-menu-background.jpg',
          text: 'APPETIZER',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/burgers-menu-background.jpg',
          text: 'BURGERS',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/pizza-menu-background.jpg',
          text: 'PIZZAS',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/fries-menu-background.jpg',
          text: 'FRIES',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/sides-menu-background.jpg',
          text: 'SIDES',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/desserts-menu-background.jpg',
          text: 'DESSERTS',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/beverages-menu-background.jpg',
          text: 'BEVERAGES',
        },
        {
          src: 'https://avada.theme-fusion.com/takeout/wp-content/uploads/sites/136/2020/04/specials-menu-background.jpg',
          text: 'SPECIAL',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    div {
        max-width: 1200px;
        margin: auto;
    }
    .menubutton {
        display: flex;
        justify-content: end;
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
    }
    h2 {
        font-size: 50px;
    }
    .cardcont {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 40px;
      .card {
        flex: 0 0 24%;
      }
    }

</style>
