<template>
  <div>
    <LoginHeader></LoginHeader>
    <LoginForm></LoginForm>
    <LoginSNS></LoginSNS>
  </div>
</template>

<script>
import LoginHeader from './LoginHeader.vue'
import LoginForm from './LoginForm.vue'
import LoginSNS from './LoginSNS.vue'

export default {
  components : {
    LoginHeader,
    LoginForm,
    LoginSNS
  }
}
</script>

<style lang="css">
</style>
