<template>
<header class="main-head">
  <b-carousel id="carousel1" controls indicators :interval="null" v-model="slide">
    <b-carousel-slide><img slot="img" class="d-block img-fluid w-100" src="../../assets/summersale1.jpg"></b-carousel-slide>
    <b-carousel-slide><img slot="img" class="d-block img-fluid w-100" src="../../assets/summersale3.jpg"></b-carousel-slide>
    <b-carousel-slide><img slot="img" class="d-block img-fluid w-100" src="../../assets/summersale2.jpg"></b-carousel-slide>
  </b-carousel>
  <div class="progressContainer">
    <div class="progressBar" ref="progress"></div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header',
  mounted () {
    // define the amount of slides
    const numSlides = 3
    this.$refs.progress.style.transition = 'width 0s linear'
    this.$refs.progress.style.width = '0%'
    setTimeout(() => {
      this.$refs.progress.style.transition = 'width 6.8s linear'
      this.$refs.progress.style.width = '100%'
    }, 1)
    setInterval(() => {
      // create a varible that takes the current slide and increments with one
      let nextSlide = this.slide + 1
      this.$refs.progress.style.transition = 'width 0s linear'
      this.$refs.progress.style.width = '0%'
      // we have a certian amout of slides, to avoid overflow the ternary sends us back to the main slide
      this.slide = nextSlide > numSlides - 1 ? 0 : nextSlide
      setTimeout(() => {
        this.$refs.progress.style.transition = 'width 6.8s linear'
        this.$refs.progress.style.width = '100%'
      }, 1000)
    }, 8000)
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    changeSlide (slide) {
      this.slide = slide
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import from "./app.scss";
.progressContainer {
  width: 100%;
  height: 8px;
  background-color: #d3d3d3;
}
.progressBar {
    height: 8px;
    background-color: #ff4d5f;
  }
</style>
