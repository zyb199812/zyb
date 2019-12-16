<template>
  <div class="personalinf">
    <div class="personalinf1">
      <div class="personalinf11">姓名</div>
      <div class="personalinf12">刘子熙</div>
      <router-link to="/homepage/mydexinxi/mydexinxidbianji">
      <span class="icon iconfont personalinf13">&#xe608;编辑</span>
      </router-link>
    </div>

    <div class="personalinf1">
      <div class="personalinf11">出生日期</div>
      <div class="personalinf12">1990年3月2日</div>
    </div>

    <div class="personalinf1">
      <span class="personalinf11">姓别</span>
      <span class="personalinf12">男</span>
    </div>
    <div class="personalinf1">
      <span class="personalinf11">手机号</span>
      <span class="personalinf12">15910578034</span>
    </div>
    <div class="personalinf1">
      <span class="personalinf11">邮箱</span>
      <span class="personalinf12">xueaidw@admin.com</span>
    </div>
    <div class="personalinf1">
      <span class="personalinf11">身份证</span>
      <span class="personalinf12">1103213829483543578</span>
    </div>
    <div class="personalinf1">
      <span class="personalinf11">微信号</span>
      <span class="personalinf12">15910578034</span>
    </div>
    <div class="personalinf1">
      <span class="personalinf11">QQ号</span>
      <span class="personalinf12">15910578034</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style>
.personalinf {
  float: right;
  margin-top: 20px;
  width: 800px;
  height: 520px;
  background-color: rgb(255, 255, 255);
}
.personalinf1 {
  position: relative;
  margin-top: 10px;
  line-height: 50px;
  width: 800px;
  height: 50px;
  /* background-color: pink; */
}
.personalinf11 {
    position: absolute;
    left: 70px;
    /* float: right; */
  display: inline-block;
  /* margin-left: 40px; */
  width: 75px;
  height: 35px;
}

.personalinf12 {
  line-height: 35px;
  display: inline-block;
    position: absolute;
    right: 435px;;
  margin-left: 40px;
  width: 190px;
  height: 35px;
}
.personalinf13 {
  color: rgb(0, 175, 255);
  font-size: 17px;
  padding-right: 20px;
  float: right;
}
</style>