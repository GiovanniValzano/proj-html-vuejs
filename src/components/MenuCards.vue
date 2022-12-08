<template>
  <div>
    <img
      :src="categorie.src"
      alt="img"
    >
    <p>{{ categorie.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuCards',
  props: {
    categorie: Object,
  },
};
</script>

<style lang="scss" scoped>
    div {
        position: relative;
        img {
            width: 100%;
            filter: brightness(70%);
        }
        p {
            position: absolute;
            top: 45%;
            left: 38%;
            color: white;
            font-weight: 600;
        }
    }
</style>
