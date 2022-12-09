<template>
  <div>
    <div class="buttcont">
      <button>
        READ MORE NEWS
      </button>
    </div>
    <h2>
      Latest News
    </h2>
    <div class="newscont">
      <div class="newscard">
        <img
          src="@/img/pancake-burger-1200x900.jpg"
          alt="NEWS"
        >
        <h3>NEW: The Pancake Burger</h3>
        <!-- eslint-disable-next-line -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ipsum vel elementum vehicula. Suspendisse sit amet aliquet ex. Pellentesque commodo tortor vel mi</p>
      </div>
      <div class="newscard">
        <img
          src="@/img/new-milkshake-menu-1200x900.jpg"
          alt="NEWS"
        >
        <h3>NEW: The Pancake Burger</h3>
        <!-- eslint-disable-next-line -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales ipsum vel elementum vehicula. Suspendisse sit amet aliquet ex. Pellentesque commodo tortor vel mi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastNews',
};
</script>

<style lang="scss" scoped>
    div {
        max-width: 1200px;
        margin: 60px auto 60px auto;
    }
    .buttcont {
        text-align: end;
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
      margin-top: -50px;
        font-size: 55px;
        margin-bottom: -60px;
    }
    .newscont {
        display: flex;
        column-gap: 60px;
        text-align: center;
        img {
            width: 100%;
            transition: .3s;
            &:hover {
                cursor: pointer;
                filter: brightness(80%);
            }
        }
        h3 {
            font-size: 40px;
            margin-top: 30px;
            transition: .3s;
            &:hover {
                cursor: pointer;
                color: #bf1e23;
            }
        }
        p {
            font-size: 16px;
            margin-top: 10px;
            color: rgb(78, 78, 78);
            line-height: 32px;
        }
    }
</style>
