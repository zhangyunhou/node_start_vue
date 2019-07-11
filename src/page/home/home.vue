<template>
  <div class="home">hello,world! </div>
</template>
<script>
export default {
  name: "home",
  mounted() {
    this.$axios.get('/home').then(res => {
      console.log(res);
    })
  }
};
</script>
<style lang="scss">
  .home {
    color: red;
    font-size: 20px;
  }
</style>