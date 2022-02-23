<template>
  <nav class="navbar" :class="{ 'nav-transparent': scrollPosition > 100 }">
    <ul>
      <a href="" class="logo">
        <img src="@/assets/img/logo/logo.png" alt="">
      </a>      
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

      <Button class="btn-primary" id="show-modal" @click="showModal = true">
        <i class="fa-solid fa-bars" style="font-size: 2.5rem;"></i>
      </Button>
    </ul>
  </nav>
</template>

<script>
import Button from "./Button";

export default {
  name: "Navigation",
  data() {
    return {
      scrollPosition: null,
      showModal: false
    };
  },
  components: {
    Button,
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
