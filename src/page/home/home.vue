<template>
  <div class="home">hello,world!aaaa 

    <router-link to="/test">走你</router-link>
  </div>
</template>
<script>
export default {
  name: "home",
  mounted() {
    this.$axios.get('/webapi/user/home').then(res => {
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