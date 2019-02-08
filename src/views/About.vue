<template>
  <div class="about">
    <h1>ABOUT</h1>
    <li v-for="(users, index) in user" :key="index">
      {{users.id}} {{users.name}} => {{users.email}}
      <button @click="removeUser(index)"> delete </button>
      </li>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState({
      user:(state) => state.user
    })
  },
  methods:{
    ...mapActions({
      removeUser:'removeUser'
    })
  }
}
</script>

