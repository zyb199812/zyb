<template>
  <div class="homepage">
    <articleheader></articleheader>
    <mycenter></mycenter>
    <!-- <div class="home">
      <div class="home0">
        <boxleft class="home1"></boxleft>
        <coursesiuploaded class="home2"></coursesiuploaded>
      </div>
    </div> -->
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import articleheader from "@/components/articleheader.vue";
import mycenter from "@/components/mycenter.vue";
// import boxleft from "@/components/boxleft.vue";
// import coursesiuploaded from "../coursesiuploaded.vue";
import foot from "@/components/foot.vue";

export default {
  name: "homepage",
  components: {
    articleheader,
    foot,
    mycenter,
    // boxleft,
    // coursesiuploaded
  },
  mounted() {
    this.axios.get("/api/getList").then(function(res) {
      window.console.log(res);
    });
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