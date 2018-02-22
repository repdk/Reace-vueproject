<template>
<div class="feature-products">
  <div class="title-focus">
    <span v-on:click="changeTab('newArriavals')" v-bind:class="{'active':activeTab === 'newArriavals'}">NEW ARRIVELS</span>
    <span v-on:click="changeTab('topSellers')" v-bind:class="{'active':activeTab === 'topSellers'}">TOP SELLERS</span>
    <span v-on:click="changeTab('featured')" v-bind:class="{'active':activeTab === 'featured'}">FEATURED</span>
  </div>
  <div class="products-container">
    <div v-for="item in activeProducts" v-bind:key="item.id" class="product-box">
      <img v-bind:src="item.img" alt="">
      <p>{{ item.description }}</p>
      <div>
        <span>${{ item.price.toFixed(2) }}</span>
        <button class="btn-add"><i class="fas fa-shopping-bag"></i> ADD TO BAG</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FeatureProducts',
  data: function () {
    return {
      activeTab: 'newArriavals',
      products: []
    }
  },
  computed: {
    activeProducts: function () {
      return this.products[this.activeTab]
    }
  },
  mounted: function () {
    this.getProducts()
  },
  methods: {
    getProducts: function () {
      axios
        .get('/static/products.json')
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    changeTab: function (tab) {
      this.activeTab = tab
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-focus {
    display: flex;
    justify-content: center;
    margin: 70px 0 60px;
    span {
        font-size: 1.2em;
    }
    span:not(:last-child) {
        margin-right: 70px;
    }
    span.active {
      border-bottom: 3px solid black;
    }
}
.products-container {
    p {
      margin: 15px 0;
      text-align: center;
      font-size: 0.8rem;
    }
    .btn-add {
      float: right;
      background-color: #fff;
      text-decoration: none;
      border: 1px black solid;
      font-size: 80%;
      padding: 5px 15px;
      cursor: pointer;
    }
}
.product-box {
  margin: 40px auto;
  width: 270px;
}
@media (min-width: 1200px) {
  .products-container {
      display: flex;
      justify-content: center;
      p {
        margin: 15px 0;
        text-align: center;
        font-size: 0.8rem;
      }
      .btn-add {
        float: right;
        background-color: #fff;
        text-decoration: none;
        border: 1px black solid;
        font-size: 80%;
        padding: 5px 15px;
        cursor: pointer;
      }
  }
  .product-box {
      width: 18%;
      &:not(:last-child) {
          margin-right: 30px;
      }
      img {
      width: 100%;
      }
  }
}
</style>
