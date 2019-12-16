<template>
  <div>
    <!-- <articleheader></articleheader>
    <mycenter></mycenter> -->
    <div class="home">
      <div class="home0">
        <!-- <personalinf class="home1"></personalinf> -->
        <personalinfdbianji class="home1"></personalinfdbianji>
        <message></message>
      </div>
    </div>
    <router-view></router-view>
    <foot class="foo"></foot>
  </div>
</template>

<script>
// import articleheader from "@/components/articleheader.vue";
// import mycenter from "@/components/mycenter.vue";
import message from "@/components/message.vue";
// import personalinf from "@/components/personalinf.vue";
import personalinfdbianji from "@/components/personalinfdbianji.vue";
// import ticationinfo from "@/components/ticationinfo.vue";
import foot from "@/components/foot.vue";

export default {
  name: "mydexinxi",
  components: {
    // articleheader,
    // mycenter,
    message,
    // personalinf,
    personalinfdbianji,
    // ticationinfo,
   
    foot
  }
};
</script>



<style>
</style>

