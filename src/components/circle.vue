<template>
  <div>
    <navbar class="is-primary"></navbar>
    <div class="columns">
      <div class="column is-two-thirds is-offset-2">
       <div class="field">
          <label>Raio do círculo</label>
          <div class="control">
            <input 
              class="input" 
              type="number" 
              placeholder="Raio do círculo" 
              v-model="radius"
            >
          </div>
          <a class="button is-link" @click="drawGrid">Rodar</a>
        </div>
        <canvas
          ref="el" 
          width="700" 
          height="700"
        >  
        </canvas>
      </div>
    </div>
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
      this.drawCircle()
    },

    drawCircle () {
      this.radius = parseInt(this.radius)
     
      var x0 = 7
      var y0 = 7
      var x = this.radius
      var y = 0
      var radiusError = 1 - x

      while (x >= y) {
        this.drawPixel(x + x0, y + y0)
        this.drawPixel(y + x0, x + y0)
        this.drawPixel(-x + x0, y + y0)
        this.drawPixel(-y + x0, x + y0)
        this.drawPixel(-x + x0, -y + y0)
        this.drawPixel(-y + x0, -x + y0)
        this.drawPixel(x + x0, -y + y0)
        this.drawPixel(y + x0, -x + y0)
        y++

        if (radiusError < 0) {
          radiusError += 2*x + 3
        } else {
          x--
          radiusError += 2*x - 2*y + 5
        }
      }
    },

    drawPixel(x, y) {
      this.context.clearRect(x*20,y*20,20,20)
    }
  }
}
</script>
