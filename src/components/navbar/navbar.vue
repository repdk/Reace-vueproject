<template>
<nav class="main-nav" v-bind:class="{'blue':isBlue}">
  <img class="classylogo" src="../../assets/classylogo.png" alt="">
  <div v-on:click="toggleMenu(true)" class="burgermenu menuItem"><i class="fas fa-bars"></i></div>
  <ul>
    <li class="menuItem"><i class="fas fa-user"></i> LOGIN</li>
    <li class="menuItem"><i class="fas fa-shopping-bag"></i> {{ items }} ITEMS</li>
    <li class="menuItem"><i class="fas fa-search"></i></li>
  </ul>
  <div class="sideMenu" v-bind:class="{'open':menuIsOpen}">
    <ul>
      <li v-on:click="toggleMenu(false)" class="closeIcon"><i class="far fa-times-circle"></i></li>
      <li><router-link :to="{ name: 'Frontpage', params: {} }">Frontpage</router-link></li>
      <li><router-link :to="{ name: 'Collection', params: {} }">Collection</router-link></li>
      <li><router-link :to="{ name: 'Contactpage', params: {} }">Contact Us</router-link></li>
    </ul>
  </div>
  <div class="overlay" v-on:click="toggleMenu(false)" v-bind:class="{'open':menuIsOpen}"></div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    items: function () {
      return 3
    }
  },
  data: function () {
    return {
      menuIsOpen: false
    }
  },
  props: ['isBlue'],
  methods: {
    toggleMenu: function (state) {
      this.menuIsOpen = state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-nav {
  z-index: 1;
  position: absolute;
  width: 100%;
}
.blue {
  background-color: #33d0de;
}
.sideMenu {
  top: 0;
  height: 100%;
  position: fixed;
  background-color: #33d0de;
  right: -300px;
  transition: right 300ms ease;
  z-index: 1000;
  &.open {
    right: 0;
  }
  .closeIcon {
    margin-right: 100%;
    svg {
      font-size: 2.5em;
      color: #fff;
    }
  }
  ul {
    margin-top: 20px;
    width: 300px;
    text-align: center;
    li {
      padding: 20px;
      display: block;
      a {
        color: white;
      }
    }
  }
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: none;
  top: 0;
  background-color: rgba(0,0,0,0.2);
  &.open {
    right: 0;
    display: block;
  }
  &:hover{
    cursor: pointer;
  }
}
.classylogo {
 height: 52px;
}
.burgermenu {
  display: inline-block;
  float: right;
  margin-right: 20px;
}
.menuItem {
  line-height: 52px;
  padding: 0 10px;
  color: #ffff;
}
ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  float: right;

  li {
    list-style: none;
    display: inline-block;
  }
}
@media (min-width: 1200px) {
  .classylogo {
    margin: 30px 0 0 30px;
  }
  .burgermenu {
    margin-right: 30px
  }
  .menuItem {
    margin-top: 30px;
  }
}
</style>
