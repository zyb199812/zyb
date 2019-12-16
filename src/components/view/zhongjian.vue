<template>
  <div class="zhongjian">
    <div class="home">
      <div class="home0">
        <boxleft class="home1"></boxleft>
        <coursesiuploaded class="home2"></coursesiuploaded>
      </div>
    </div>
  </div>
</template>
<script>
import boxleft from "@/components/boxleft.vue";
import coursesiuploaded from "../coursesiuploaded.vue";
export default {
  name: "zhongjian",
  components: {
    boxleft,
    coursesiuploaded
  }
};
</script>
<style>
.home {
  background-color: rgb(244, 244, 244);
  width: 100%;
}
.home0 {
  margin: 0 auto;
  width: 1150px;
  background-color: rgb(244, 244, 244);
}
.home1 {
  display: inline-block;
}
.home2 {
  display: inline-block;
}
</style>