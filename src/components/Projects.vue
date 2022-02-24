<template>
  <section id="projects" class="projects">
    <div class="container">
      <h1 class="feature-title">My Projects</h1>

      <div class="cards">
        <div class="project-card">
          <div class="card-body">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quis, reprehenderit veritatis corporis suscipit doloremque.
            </p>
          </div>

           <div class="card-footer">
            <Button >View Source Code</Button>
          </div>
        </div>
        <div class="project-card">
          <div class="card-body">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quis, reprehenderit veritatis corporis suscipit doloremque.
            </p>
          </div>

           <div class="card-footer">
            <Button>View Source Code <i class="fa-solid fa-angle-right"></i
      ></Button>
          </div>
          
        </div>
        <div class="project-card">
          <div class="card-body">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quis, reprehenderit veritatis corporis suscipit doloremque.
            </p>
          </div>
          <div class="card-footer">
            <Button>View Source Code</Button>
          </div>
        </div>
       
      </div>
    </div>
  </section>
</template>

<script>
import Button from './Button'

export default {
  name: "Projects",
  components: {
    Button
  }
};
</script>
