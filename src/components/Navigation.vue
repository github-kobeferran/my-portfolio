<template>
  <nav class="navbar" :class="{ 'nav-transparent': scrollPosition > 100 }">
    <ul>
      <a href="" class="logo">
        <img src="@/assets/img/logo/logo.png" alt="">
      </a>      
      <li>
        <router-link to="/">Home</router-link>
        <!-- <a href="/">
          <span>Home</span>
        </a> -->
      </li>
      <li>
        <router-link to="/about">About</router-link>
        <!-- <a href="/">
          <span>Home</span>
        </a> -->
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
        <!-- <a href="/">
          <span>Home</span>
        </a> -->
      </li>
      <!-- <li>
        <a href="/about">
          <span>About</span>
        </a>
      </li>
      <li>
        <a href="/contact">
          <span>Contact</span>
        </a>
      </li> -->

    </ul>
  </nav>  
  
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      scrollPosition: null,   
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.change_color {
  background-color: red;
}
</style>
