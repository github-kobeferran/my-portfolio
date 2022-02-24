<template>
  <header class="container">
    <div id="cover" class="cover">
      <div class="cover-banner">
        <h1 id="name">KOBE FERRAN</h1>
        <h3 id="title">FULL STACK DEVELOPER</h3>
        <h5><i class="fa-solid fa-location-pin"></i> Calapan City, Oriental Mindoro, PH</h5>        
      </div>
      <Button class="btn btn-primary"
        >Check out My Projects <i class="fa-solid fa-angle-right"></i
      ></Button>
    </div>    
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Cover",
  components: {
    Button,
  },
};
</script>
