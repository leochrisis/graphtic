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
      this.canva = this.$refs.el
      this.context = this.canva.getContext('2d')

      this.context.beginPath();
      this.context.fillStyle = 'black';
      this.context.lineWidth = 3;
      this.context.strokeStyle = 'white';

      for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
          var x = j * 20;
          var y = i * 20;
          this.context.rect(x, y, 20, 20);
          this.context.fill();
          this.context.stroke();
        }
      }
    },

    drawCircle () {
    },

    drawPixel(x, y) {
  }
}
</script>
