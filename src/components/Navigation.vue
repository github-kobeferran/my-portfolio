<template>
  <nav class="navbar" :class="{ 'nav-transparent': scrollPosition > 100 }">
    <ul>
      <a href="" class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo/logo.png" alt="" />
        </router-link>
      </a>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
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
