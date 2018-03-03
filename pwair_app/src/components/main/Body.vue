<template lang="html">
  <div class="">
     Body
  </div>
</template>

<script>
export default {
  created(){
    console.log('created');
    getCurrentPosition();
  }

}

function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(function(position){
      console.log('getCurrentPosition success');
      console.log(position.coords.latitude , position.coords.longitude);
      // TODO : 미세먼지 API 조회, 지명 얻어오기 API 조회
    }, function (error){
      console.log('getCurrentPosition error');
      console.log(error);
  });
}
</script>

<style lang="css">
</style>
