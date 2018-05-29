<template>
  <div>
    <navbar class="is-primary"></navbar>
    <div class="columns">
      <div class="column is-3 box-margin is-offset-1">
        <div class="notification">
          <label>Avalores iniciais</label>
          <div class="field">
            <div class="control">
              <input 
                class="input" 
                type="number" 
                placeholder="Valor inicial de X"
                v-model="initialX"
              >
              <input 
                class="input" 
                type="number" 
                placeholder="Valor inicial de Y"
                v-model="initialY"
              >
            </div>
            <label>Avalores Finais</label>
            <div class="field">
              <div class="control">
                <input 
                  class="input" 
                  type="number" 
                  placeholder="Valor final de X"
                  v-model="finalX"
                >
                <input 
                  class="input" 
                  type="number" 
                  placeholder="Valor final de Y"
                  v-model="finalY"
                >
              </div>
            </div>
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <a class="button is-primary" @click="drawGrid">
                  Rodar
                </a>
              </p>
              <p class="control">
                <a class="button is-light">
                  Cancelar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-8 is-offset-1">
        <p class="has-text-grey">Resultado</p>
        <div class="margin-layout">
            <canvas 
              ref="el" 
              width="700" 
              height="700"
            >
            </canvas>
        </div>
      </div>  
    </div>
  </div>
</template>

<script type="text/javascript">
import Navbar from './navbar'
export default {
  name: 'Bresenham',

  components: {Navbar},

  data: () => ({
    canva: null,
    context: null,
    rows: null,
    columns: null,
    initialX: '',
    initialY: '',
    finalX: '',
    finalY: '',
    e: null,
    changeXY: false,
    changeX: false,
    changeY: false,
    drawedLine: []
  }),

  methods: {
    drawGrid () {
      this.initialX = parseInt(this.initialX)
      this.initialY = parseInt(this.initialY)
      this.finalX = parseInt(this.finalX)
      this.finalY = parseInt(this.finalY)


      this.rows = this.finalY + 2
      this.columns = this.finalX + 2

      this.canva = this.$refs.el
      this.context = this.canva.getContext('2d')

      this.context.beginPath();
      this.context.fillStyle = 'black';
      this.context.lineWidth = 3;
      this.context.strokeStyle = 'white';

      for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {
          var x = j * 20;
          var y = i * 20;
          this.context.rect(x, y, 20, 20);
          this.context.fill();
          this.context.stroke();
        }
      }
      this.context.closePath()
      this.bresenham()
    },

    bresenham () {
      this.reflect(this.initialX, this.initialY, this.finalX, this.finalY)
      var deltaX = this.finalX - this.initialX
      var deltaY = this.finalY - this.initialY

      var m = deltaY / deltaX
      this.e = m - 0.5
      this.drawedLine.push([this.initialX, this.initialY])

      while (this.initialX < this.finalX) {
        if (this.e >= 0) {
          this.initialY = this.initialY + 1
          this.e = this.e - 1
        }
        this.initialX = this.initialX + 1
        this.e = this.e + m
        this.drawedLine.push([this.initialX, this.initialY])
      }
      this.drawCanvaLine()
    },

    reflect (iX, iY, fX, fY) {
      var deltaX = fX - iX
      var deltaY = fY - iY

      var m = deltaY / deltaX

      if ( m > 1 || m < -1) {
        var aux = iY
        iY = iX
        iX = aux
        this.changeXY = true
      }

      if (iX > fX) {
        iX = -iX
        fX = -fX
        this.changeX = true
      }

      if (iY > fY) {
        iY = -iY
        fY = -fY
        this.changeY = true
      }

      return
    },

    drawCanvaLine () {

      for (var i = 0; i < this.drawedLine.length; i++) {
        for (var j = 0; j < this.drawedLine[i].length; j++) {
          var x = this.drawedLine[i][0]
          var y = this.drawedLine[i][1]
          this.context.clearRect(x*20,y*20,20,20)
        }
      }
    }
  }
}
</script>

<style type="text/css">
.box-margin {
  margin-top: 100px;
}
.margin-layout {
  margin-top: 20px;
}
</style>
