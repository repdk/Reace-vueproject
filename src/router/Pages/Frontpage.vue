<template>
  <div class="wrapper">
    <Header/>
    <Content/>
    <BrandSlider/>
    <PageAds/>
    <FeatureProducts/>
    <navbar/>
    <Footer/>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import Content from '@/components/Content/Content.vue'
import BrandSlider from '@/components/BrandSlider/BrandSlider.vue'
import PageAds from '@/components/PageAds/PageAds.vue'
import FeatureProducts from '@/components/FeatureProducts/FeatureProducts.vue'

export default {
  name: 'Frontpage',
  components: {
    Header,
    Content,
    BrandSlider,
    PageAds,
    FeatureProducts,
    navbar,
    Footer
  }
}
</script>

<style lang="scss">

</style>
