<template>
  <Button :active="showModal" :hamburger="true" @click="showModal = !showModal">
    <i
      :class="[showModal ? 'fa-solid fa-xmark' : 'fa-solid fa-bars', 'icon']"
      style="font-size: 2.5rem"
    ></i>
  </Button>
  <Modal :show="showModal" :isActive="showModal" />
  <Navigation />
  <router-view></router-view>
</template>

<script>
import Navigation from "./components/Navigation";
import Button from "./components/Button";
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Navigation,
    Button,
    Modal,
  },
  
};
</script>
