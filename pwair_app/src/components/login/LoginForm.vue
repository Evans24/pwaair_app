<template lang="html">
  <div class="">
     <input name="email" type="text" v-model="email">
     <input name="pw" type="password" v-model="pw">
     <button v-on:click="loginWithEmail">LOGIN</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email : '',
      pw : ''
    }
  },
  methods : {
    loginWithEmail : function(){
      this.$emit('loginSuccess', this.email, this.pw);
   }
  }
}

</script>

<style lang="css">
</style>
