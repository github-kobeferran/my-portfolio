<template>
  <div class="contact">
    <div class="container">
      <div class="contact-title text-center">
        <h1><span class="text-primary">Connect</span> with me</h1>
      </div>

      <div class="contact-body">
        
        <div>
          <a href="https://www.facebook.com/kobebryanferran">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <div>Facebook</div>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/kobe-ferran-237152218">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <div>Linkedin</div>
        </div>

        <div>
          <i
            @mouseover="hover = true"
            @mouseleave="hover = false"
            @click="toggleEmail"
            :class="showEmail ? 'active' : ''"
            class="fa-solid fa-envelope"
          ></i>
          <div>Gmail  </div>
        
        </div>

        <div>
          <a href="https://github.com/github-kobeferran">
            <i class="fa-brands fa-github"></i>
          </a>
          <div>Github</div>
        </div>

      </div>
    </div>
    <div  v-if="showEmail || hover" :class="showEmail ? 'active' : ''" class="email text-center">
      emailme.kobeferran@gmail.com
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      showEmail: false,
      hover: false,
    };
  },
  methods: {
    toggleEmail() {
      this.showEmail = !this.showEmail;
    },
  },
};
</script>
