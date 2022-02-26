<template>
  <div class="modal" :class="{ active: isActive }">
    <div class="modal-dialog">
      <ul class="modal-content">
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isActive: Boolean,
  },
};
</script>
