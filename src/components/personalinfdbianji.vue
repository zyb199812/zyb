<template>
  <div class="personalinf">
    <div class="personalinf1">
      <div class="personalinf11">姓名</div>
      <input type="text" placeholder="请输入正确信息" class="personalinf12">
     
    </div>

    <div class="personalinf1">
      <div class="personalinf11">出生日期</div>
      <input type="text" placeholder="请输入正确信息" class="personalinf12">
    </div>

    <div class="personalinf1">
      <span class="personalinf11">姓别</span>
      <input type="text" placeholder="请输入正确信息" list="ite" class="personalinf12">
      <datalist id="ite">
        <option>男</option>
        <option>女</option>
        <option>人妖</option>
      </datalist>
    </div>
    <div class="personalinf1">
      <span class="personalinf11">手机号</span>

      <div class="personalinf1100">
      <input type="text" placeholder="请输入正确信息" class="personalinf12">
      <div class="personalinf11001">获取验证码</div>
      </div>

    </div>
    <div class="personalinf1">
      <span class="personalinf11">邮箱</span>
      <input type="text" placeholder="请输入正确信息" class="personalinf12">
    </div>
    <div class="personalinf1">
      <span class="personalinf11">身份证</span>
      <input type="text" placeholder="请输入正确信息" class="personalinf12">
    </div>
    <div class="personalinf1">
      <span class="personalinf11">微信号</span>
      <input type="text" class="personalinf12">
    </div>
    <div class="personalinf1">
      <span class="personalinf11">QQ号</span>
      <input type="text"  class="personalinf12">
    </div>

    <div class="personalinf3">保存信息</div>
    <div class="personalinf4">取消修改</div>
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
  margin-top: 5px;
  line-height: 50px;
  width: 800px;
  height: 50px;
}
.personalinf11 {
  color: gray;
    position: absolute;
    left: 70px;
  display: inline-block;
  width: 75px;
  height: 35px;
}

.personalinf12 {
  /* z-index: 5; */
    display: inline-block;
    position: absolute;
    right: 290px;
    top: 10px;
    margin-left: 40px;
    width: 360px;
    height: 35px;
    overflow: hidden;
}
.personalinf13 {
  color: rgb(0, 175, 255);
  font-size: 17px;
  padding-right: 20px;
  float: right;
}
.personalinf3{
  color: white;
  margin-top: 10px;
  margin-left: 145px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  width: 145px;
  height: 40px;
  background-color: rgb(0, 175, 255);
}

.personalinf4{
  margin-top: 10px;
  border: 1px solid rgba(128, 128, 128, 0.623);
  border-radius: 10px;
  margin-left: 20px;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  width: 145px;
  height: 40px;
}

.personalinf11001{
  font-size: 14px;
  text-align: center;
  line-height: 35px;
  left: 376px;
  top: 10px;
  position: absolute;
  width: 132px;
  height: 37px;
  border: 1px solid rgba(128, 128, 128, 0.644);
}



</style>