<template>
  <div class="wrapper">
    <navbar/>
    <Footer/>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'Collection',
  components: {
    navbar,
    Footer
  }
}
</script>

<style lang="scss">

</style>
