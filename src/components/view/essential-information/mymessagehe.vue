<template>
  <div>
    <articleheader></articleheader>
    <mycenter></mycenter>
    <div class="home">
      <div class="home0">
        <loginpassword class="home1"></loginpassword>
        <message ></message>
      </div>
    </div>
    <foot class="foo"></foot>
  </div>
</template>

<script>
import articleheader from "@/components/articleheader.vue";
import mycenter from "@/components/mycenter.vue";
import message from "@/components/message.vue";
import loginpassword from "@/components/loginpassword.vue";
import foot from "@/components/foot.vue";
// import foot from ''

export default {
  name: "mymessage",
  components: {
    articleheader,
    mycenter,
    message,
    loginpassword,
    foot
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
  margin-left: 10px;
}
</style>