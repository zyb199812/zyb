<template>
  <div class="loginpassword">
    <div class="loginpassword0">
      <div class="loginpassword01">登录密码</div>
      <div class="loginpassword1">
        <span class="loginpassword11">原密码</span>
        <input type="text" value="" />
      </div>
      <div class="loginpassword1">
        <span class="loginpassword11">新密码</span>
        <input type="text" value="" />
      </div>
      <div class="loginpassword12">
        <span class="loginpassword112">确认密码</span>
        <input type="text" value="" />
      </div>

        <div class="loginpassword2">确认修改</div>
        <div class="loginpassword3">取消修改</div>

    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.loginpassword {
  margin-top: 20px;
  float: right;
  width: 800px;
  height: 520px;
  background-color:rgb(255, 255, 255);
}
.loginpassword0 {
  width: 700px;
  height: 100px;
}
.loginpassword01 {
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  width: 280px;
  height: 100px;
}
.loginpassword1{
    margin-top: 25px;
}
.loginpassword11 {
  font-size: 18px;
  margin-left: 40px;
  margin-right: 20px;
  color: rgb(154, 154, 154)
}
.loginpassword1 input {
  width: 360px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
}
.loginpassword12{
    margin-top: 25px;
}
.loginpassword112 {
  font-size: 18px;
  margin-left: 40px;
  margin-right: 5px;
color: rgb(154, 154, 154)

}
.loginpassword12 input {
  width: 360px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
}
.loginpassword2{
    color: aliceblue;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    margin-left: 150px;
    margin-top: 50px;
    width: 145px;
    height: 40px;
    border-radius: 5px;
    background-color: rgb(0, 170, 255);
}
.loginpassword3{
    text-align: center;
    line-height: 40px;
    display: inline-block;
    margin-left: 20px;
    width: 145px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid gray;
    /* background-color: rgba(0, 0, 255, 0.808); */
}




















</style>