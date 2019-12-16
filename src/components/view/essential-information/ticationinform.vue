<template>
  <div>
    <!-- <articleheader></articleheader>
    <mycenter></mycenter> -->
    
        <ticationinfo></ticationinfo>
        <!-- <message ></message> -->
     
    <!-- <foot class="foo"></foot> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import articleheader from "@/components/articleheader.vue";
// import mycenter from "@/components/mycenter.vue";
// import message from "@/components/message.vue";
import ticationinfo from "@/components/ticationinfo.vue";
// import foot from "@/components/foot.vue";


export default {
  name: "mymessage",
  components: {
    // articleheader,
    // mycenter,
    // message,
    ticationinfo,
    // loginpassword,
    // foot
  }
};
</script>

<style>
.home {
  background-color: rgb(244, 244, 244);
  height: 520px;
  width: 100%;
  padding-bottom: 40px;
}
.home0{
  margin: 0 auto;
  width: 1150px;
  background-color: rgb(244, 244, 244);
}
.home1{
    background-color:rgb(244, 244, 244);
  margin-left: 10px;
}
</style>