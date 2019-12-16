<template>
  <div>
    <articleheader></articleheader>
    <mycenter></mycenter>
    <div class="home">
      <div class="home0">
        <publishedcourses class="home1"></publishedcourses>
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
import publishedcourses from "@/components/publishedcourses.vue";
import foot from "@/components/foot.vue";

export default {
  name: "mydexinxi",
  components: {
    articleheader,
    mycenter,
    messagekecheng,
    publishedcourses,
    // managementmy,
    foot
  }
};
</script>



<style>
</style>

