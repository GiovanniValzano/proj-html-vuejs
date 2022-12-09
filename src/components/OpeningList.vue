<template>
  <div>
    <ul>
      <li>
        {{ giorno.day }} - <span>{{ giorno.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpeningList',
  props: {
    giorno: Object,
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
              margin-top: 20px;
              span {
                color: #ffd028;
              }
          }
      }
  </style>
