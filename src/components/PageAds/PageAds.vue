<template>
<div class="page-ads">
  <div class="adContainer">
    <div class="ad-card-1">
      <img src="../../assets/forher.png" alt="">
    </div>
    <div class="adContainer-nested">
      <div class="ad-card-2">
        <img src="../../assets/saleblue.png" alt="">
      </div>
      <div class="ad-card-3">
        <img src="../../assets/salered.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageAds'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ad-card-1 {
  width: 400px;
  height: 400px;
  margin: 70px auto 10px;
}
.ad-card-1 img{
  width: 400px;
  height: 400px;
}
.ad-card-2,
.ad-card-3 {
  width: 400px;
  margin: 0 auto 10px;
}
.ad-card-2 img,
.ad-card-3 img {
  width: 400px;
  margin: 0 auto;
}
@media (min-width: 1200px) {
  .adContainer {
    margin-top: 70px;
    display: flex;
    justify-content: center;
  }
  .adContainer-nested {
    width: 500px;
    display: flex;
    flex-direction: column;
  }
  .ad-card-1 {
    width: 670px;
    height: 600px;
    margin: 0;
    margin-right: 10px;
    align-items: flex-start;
  }
  .ad-card-1 img {
    width: 670px;
    height: 600px;
  }
  .ad-card-2 {
    margin: 0 0 10px 0;
  }
  .ad-card-3 {
    margin: 0;
  }

  .ad-card-2 img,
  .ad-card-3 img {
    width: 500px;
    height: 295px;
  }
}
</style>
