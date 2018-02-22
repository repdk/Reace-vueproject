<template>
<div class="newsletter">
  <div class="formcontainer">
    <div class="form-box form-content">
      <img src="../../assets/menslook.jpg" alt="">
    </div>
    <div class="form-box form-newsletter">
      <div class="form-newsletter-icon">
        <i class="far fa-envelope"></i>
      </div>
      <h1>GET OUR NEWLETTER</h1>
      <p>JOIN OUR MAILLIST TO RECEIVE <br/>SPECIAL DISCOUNTS</p>
      <div class="email-box">
        <input type="text" placeholder="ENTER YOUR EMAIL" name="email">
      </div>
      <div>
        <button class="btn-submit" v-on:click="say('Subscribed to Classy newsletter')">SUBMIT</button>
      </div>
    </div>
    <div class="form-box form-content">
      <img src="../../assets/womenslook.jpg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Content',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.formcontainer {
    width: 100%;
}
.form-box {
    width: 400px;
    margin: 0 auto 10px;
}
.newsletter {
    color: #7b7b7b;
    margin: 70px auto 0;
}
.form-newsletter {
    padding: 50px;
    text-align: center;
    outline: 4px solid #dcdcdc;
    outline-offset: -20px;
    background-color: #f6f6f6;
    box-sizing: border-box;
}
.form-content img {
    width: 100%;
}
input[type=text] {
    width: 100%;
    padding: 15px;
    margin: 0;
    display: inline-block;
    border: none;
    background: #f6f6f6;
    text-align: center;
    &::placeholder {
        color: black;
    }
}
.form-newsletter-icon {
    color: #ffff;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    transition: color 300ms, border-color 300ms;
    font-size: 30px;
    background-color: #33d0de;
}
.email-box {
    border-bottom: 3px solid black;
}
.btn-submit {
    background-color: #f6f6f6;
    border: 3px solid black;
    width: 100%;
    padding: 15px 32px;
    text-align: center;
    margin: 20px 0 0;
    color: black;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: #33d0de;
      border-color: #33d0de;
      color: white;
    &:active {
      transition: all .2s ease-in-out;
      transform: scale(0.9);
    }
  }
}
@media (min-width: 1200px) {
    .form-box {
        display: inline-block;
        width: auto;
    }
    .formcontainer {
        display: flex;
        padding-bottom: 20px;
    }
    .form-newsletter {
        margin: 0;
        box-shadow: -8px 10px 20px 0 rgba(0, 0, 0, 0.15);
        box-sizing: content-box;
    }
    .form-content {
        margin: auto 0;
        width: 380px
    }
}
</style>
