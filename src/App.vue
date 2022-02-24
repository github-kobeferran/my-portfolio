<template>
  <Button :hamburger="true"  @click="showModal = !showModal" >
    <i :class="showModal ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" style="font-size: 2.5rem;"></i>
  </Button>
  <Modal :show="showModal" :isActive="showModal" />
  <Navigation />
  <Content />  
</template>

<script>
import Navigation from './components/Navigation'
import Content from './components/Content'
import Button from "./components/Button";
import Modal from './components/Modal'


export default {
    name: 'App',
    data() {
      return {
           showModal: false
      }
    },
    components: {
      Navigation,
      Content,
      Button,
      Modal
    },    
}
</script>

