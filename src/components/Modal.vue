<template>
  <div class="modal" :class="{ active: isActive }">
    <div class="modal-dialog">
      <ul class="modal-content">
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
