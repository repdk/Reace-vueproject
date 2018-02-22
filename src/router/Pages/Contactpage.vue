<template>
  <div class="wrapper">
    <navbar isBlue="true"/>
    <Contactform/>
    <Footer/>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import Contactform from '@/components/Contactform/Contactform.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'Contactpage',
  components: {
    navbar,
    Contactform,
    Footer
  }
}
</script>

<style lang="scss">

</style>
