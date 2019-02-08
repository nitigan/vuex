<template>
  <div class="home">
    <h1>HOME</h1>

  <input type="text" placeholder="name" v-model="newUser.name"><br>
  <input type="text" placeholder="id" v-model="newUser.id"><br>
  <input type="text" placeholder="email" v-model="newUser.email"><br><br>
  <button class="button" @click="addUser()">add User</button>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'home',
  data(){
    return{
      newUser:{
        name:'',
        email:'',
        id:''
      }
    }
  },
  methods:{
    ...mapActions({
      addNewUser:'addNewUser'
    }),
    addUser(){
      this.addNewUser(this.newUser)
      this.newUser = {
        name:'',
        email:'',
        id:''
      }
    }
  }
  
}
</script>
<style scoped>
.button {
  border: 1px solid #000;
  padding: 6px 10px 6px 10px;
  text-align: center;
  width: fit-content;
  cursor:pointer;
  margin: auto;
}
input{
font-size: 36px;
}

</style>

