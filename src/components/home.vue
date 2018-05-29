<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-head">
        <navbar></navbar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="subtitle has-text-grey">Algoritmos implementados</p>
          <div class="column is-4 is-offset-4">
            <div class="box">
              <div>
                <router-link to="/bresenham" class="button is-link is-rounded">Bresenham</router-link>
              </div>
              <br/>
              <div>
                <router-link to="/circle" class="button is-link is-rounded">Círculo</router-link>
              </div>         
            </div>      
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
import Navbar from './navbar.vue'
export default {
  name: 'Home',

  components: {Navbar}
}
</script>
