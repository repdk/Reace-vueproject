<template>
<footer class="main-footer">
  <div class="footerContainerTop">
    <h2><span>GET US ON</span></h2>
    <div class="socialMediaIcon"><i class="fab fa-twitter"></i></div>
    <div class="socialMediaIcon"><i class="fab fa-pinterest"></i></div>
    <div class="socialMediaIcon"><i class="fab fa-facebook-f"></i></div>
    <div class="socialMediaIcon"><i class="fab fa-google-plus-g"></i></div>
    <div class="socialMediaIcon"><i class="fab fa-youtube"></i></div>
    <div class="socialMediaIcon"><i class="fab fa-tumblr"></i></div>
  </div>
  <div class="footerContainerBottom">
    <div class="footerColumn">
      <li>
        <h3>QUESTIONS?</h3></li>
      <li>Help</li>
      <li>Track Order</li>
      <li>Returns</li>
    </div>
    <div class="footerColumn">
      <ul>
        <li>
          <h3>WHERE TO BUY</h3></li>
        <li>Store Locator</li>
        <li>Wishlist</li>
        <li>Gift Cards</li>
      </ul>
    </div>
    <div class="footerColumn">
      <li>
        <h3>ABOUT US</h3></li>
      <li>Our Story</li>
      <li>Careers</li>
      <li>Affiliates</li>
    </div>
    <div class="footerColumn">

    </div>
    <div class="footerColumn">

    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.footerContainerTop {
    width: 300px;
    margin: 0 auto;
    padding: 0;
    background-color: white;
    text-align: center;
    padding: 4% 0;
    & > div {
        display: inline-block;
    }
    h2 {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 0.1em;
        margin: 10px auto 20px;
    }
    h2 span {
        background: #fff;
        padding: 0 10px;
    }
}
.socialMediaIcon {
    color: #d7d7d6;
    border: 2px #d7d7d6 solid;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    transition: color 300ms, border-color 300ms;
    margin-right: 30px;
    margin-bottom: 30px;
    float: left;
    &:nth-child(3n+1) {
      margin-right: 0;
    }
    &:nth-child(-n+4) {
      margin-top: 30px;
    }
    & > i, svg {
      font-size: 26px;
      display: inline-block;
    }
    &:hover {
      color: #33d0de;
      border-color: #33d0de;
    }
}
.footerContainerBottom {
    display: flex;
    background-color: #333333;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #7b7b7b;
}
.footerColumn {
    width: 100%;
    padding: 4%;
    font-size: 0.9em;
    h3 {
        margin: 0;
        font-size: 1.1em;
        color: white;
    }
    li {
        list-style: none;
        margin: 0 0 10px;
    }
    ul {
        padding: 0;
    }
}

@media (min-width: 1200px) {
  .footerContainerTop {
      width: 100%;
      h2 {
        width: 500px;
      }
  }
  .socialMediaIcon {
      float: initial;
      margin: 30px 30px 0 0;
      &:nth-child(3n+1) {
        margin-right: 30px;
      }
      &:last-child {
        margin-right: 0;
      }
  }
}
</style>
