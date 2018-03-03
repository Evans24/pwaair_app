<template>
  <div>
    <LoginHeader></LoginHeader>
    <LoginForm v-on:loginSuccess="moveToHome"></LoginForm>
    <LoginSNS></LoginSNS>
  </div>
</template>

<script>
import LoginHeader from './LoginHeader.vue'
import LoginForm from './LoginForm.vue'
import LoginSNS from './LoginSNS.vue'

export default {
  methods : {
    moveToHome : function(email, pw){
       console.log('moveToHome', email, pw);
       let that = this;
       firebase.auth().signInWithEmailAndPassword(email, pw).then(
         // success callback
         (user) => {
           console.log('success');
           this.$router.push({ path: '/home' });
         // error callback
       } , function(error){
            console.log('error');
       }).catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           // ...
           console.log(error);
       });


    }
  },
  components : {
    LoginHeader,
    LoginForm,
    LoginSNS
  }
}
</script>

<style lang="css">
</style>
