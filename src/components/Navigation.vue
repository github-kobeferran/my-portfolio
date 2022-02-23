<template>
  <nav class="navbar" :class="{ 'nav-transparent' : scrollPosition > 100}">
    <ul>
      <li>
        <a href="">
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>About</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>Contact</span>
        </a>
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
      }
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
       background-color:red
   }
</style>
