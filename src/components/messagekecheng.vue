<template>
  <div class="mymessage">
    <div class="mymessage-box">
      <div class="mymessage-da">
        <div class="mymessage-one">
          <img src="../assets/timg.jpg" alt />
          <div class="mymessage-one1">编辑</div>
        </div>

        <div class="mymessage-two">
          <router-link to="/coursehome">
          <span class="icon iconfont mymessage-tudaxiao">&#xe601;</span>
          <span style="margin-left:10px;">我的课程</span>
          </router-link>
        </div>
        <div class="mymessage-two">
          <router-link to="">
          <span class="icon iconfont mymessage-tudaxiao">&#xe646;</span>
          <span style="margin-left:10px;">我的活动</span>
          </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>

<style>
.mymessage-box {
  float: left;
}
.mymessage-da {
  margin-top: 20px;
  width: 280px;
  height: 520px;
  background-color: rgb(255, 255, 255);
}
.mymessage-one {
  position: relative;
  margin: 0 auto;
  border-radius: 50%;
  width: 110px;
  height: 150px;
}
.mymessage-one img {
  margin-top: 40px;
  border-radius: 50%;
  width: 110px;
  height: 110px;
}
.mymessage-one1 {
    line-height: 50px;
  text-align: center;
  position: absolute;
  left: 2px;
  width: 105px;
  height: 50px;
  bottom: 0px;
  border-radius: 0 0 100px 100px;
  background-color: rgba(0, 0, 0, 0.356);
}
.mymessage-two {
  font-size: 18px;
  margin-top: 20px;
  width: 280px;
  height: 35px;
  text-align: center;
}
.mymessage-tudaxiao {
  font-size: 25px;
}
</style>