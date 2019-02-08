<template>
  <div class="home t-al-center">
    <h1 class="f-s-36px f-w-bold" >HOME PAGE</h1>
    <div class="t-al-center">
      <div v-for="(gif, index) in img.data" :key="index">
        <img :src="gif.images.original.url" alt="" class="w-20pct"><br>
        {{gif.title}} <br>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods: {
    ...mapActions({
    getImg:'getImg'
  })
  },
  computed:{
    ...mapState({
      img: state => state.img
    })
  },
  async mounted(){
    await this.getImg()
  }
  
}
</script>
