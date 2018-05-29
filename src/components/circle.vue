<template>
  <div>
    <navbar class="is-primary"></navbar>
  </div>
</template>

<script type="text/javascript">
import Navbar from './navbar.vue'

export default {
  name: 'PointCircle',

  components: { Navbar },

  data: () => ({
    canva: null,
    context: null,
    radius: ''
  }),

  methods: {
    drawGrid () {
    },

    drawCircle () {
    },

    drawPixel(x, y) {
  }
}
</script>
