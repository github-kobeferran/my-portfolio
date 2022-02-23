<template>
  <div class="container">
    <div id="cover" class="cover">
      <div class="cover-banner">
        <h1 id="name">KOBE FERRAN</h1>
        <h3 id="title">FULL STACK DEVELOPER</h3>
        <h5>Specializing in Laravel and Vue.js</h5>        
      </div>
      <Button class="btn btn-primary"
        >Check out My Projects <i class="fa-solid fa-angle-right"></i
      ></Button>
    </div>

    <div id="projects" class="projects">
      <h1 class="feature-title">My Projects</h1>

      <div class="project-card">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          similique excepturi magnam officiis, dicta quis?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora
          similique eius omnis, porro odit tempore dignissimos nulla qui tenetur
          accusantium illo accusamus, nesciunt fuga consectetur facilis
          voluptatum dicta id!
        </p>
      </div>
      <div class="project-card">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          similique excepturi magnam officiis, dicta quis?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora
          similique eius omnis, porro odit tempore dignissimos nulla qui tenetur
          accusantium illo accusamus, nesciunt fuga consectetur facilis
          voluptatum dicta id!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Content",
  components: {
    Button,
  },
};
</script>
