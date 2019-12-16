<template>
  <div>
    <articleheader></articleheader>
    <mycenter></mycenter>
    <div class="home">
      <div class="home0">
        <managementmy class="home1"></managementmy>
        <messagekecheng></messagekecheng>
      </div>
    </div>
    <foot class="foo"></foot>
  </div>
</template>

<script>
import articleheader from "@/components/articleheader.vue";
import mycenter from "@/components/mycenter.vue";
import messagekecheng from "@/components/messagekecheng.vue";
import managementmy from "@/components/managementmy.vue";
import foot from "@/components/foot.vue";

export default {
  name: "mydexinxi",
  components: {
    articleheader,
    mycenter,
    messagekecheng,
    managementmy,
    foot
  }
};
</script>



<style>
</style>

