<template>
  <Button :hamburger="true"  @click="showModal = !showModal" >
    <i :class="showModal ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" style="font-size: 2.5rem;"></i>
  </Button>
  <Modal :show="showModal" :isActive="showModal" />
  <Navigation />
  <Cover />    
  <Projects />  
</template>

<script>
import Navigation from './components/Navigation'
import Cover from './components/Cover'
import Button from "./components/Button";
import Modal from './components/Modal'
import Projects from './components/Projects'


export default {
    name: 'App',
    data() {
      return {
           showModal: false
      }
    },
    components: {
      Navigation,
      Cover,
      Button,
      Modal,
      Projects
    },    
}
</script>

