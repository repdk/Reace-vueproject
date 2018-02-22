<template>
<div class="brand-slider">
  <h2><span>TOP BRANDS</span></h2>
  <div class="brandContainer">
    <div class="brandlogo"><img src="../../assets/mango.png" alt=""></div>
    <div class="brandlogo"><img src="../../assets/mango.png" alt=""></div>
    <div class="brandlogo"><img src="../../assets/mango.png" alt=""></div>
    <div class="brandlogo"><img src="../../assets/mango.png" alt=""></div>
    <div class="brandlogo"><img src="../../assets/mango.png" alt=""></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BrandSlider'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.brand-slider {
    margin-top: 70px;
    padding-top: 50px;
    background-color: #eaeaea;
    text-align: center;
    h2 {
        width: 300px;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 0.1em;
        margin: 10px auto 20px;
    }
    h2 span {
        background: #eaeaea;
        padding: 0 10px;
    }
}
.brandContainer {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
}
.brandlogo {
    padding: 4%;
    width: 100%;
    font-size: 0.9em;
}
.brandlogo img {
    width: 120%;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
  }

@media (min-width: 1200px) {
  .brand-slider h2 {
        width: 500px;
  }
  .brandlogo img {
      width: 80%;
  }
}
</style>
