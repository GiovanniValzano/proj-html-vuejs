<template>
  <div>
    <ul>
      <li>
        {{ testo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  props: {
    testo: String,
  },
};
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        margin-left: 0;
        padding: 0;
        font-size: 15px;
        font-weight: 600;
        li {
            transition: .3s;
            margin-top: 20px;
        }
        li:hover {
            cursor: pointer;
            color: #ffd028;
        }
    }
</style>
