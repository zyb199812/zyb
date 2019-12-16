<template>
  <div>
    <header class="wrapper">
      <div class="logo">
        <a href="#">
          <img src="@/assets/e.jpg" alt="网站logo" />
        </a>
      </div>

      <div class="login">
        <router-link to="/homepage">
        <a href="">登录</a>
        </router-link>
        <span>|</span>
        <router-link to="">注册</router-link>
      </div>
    </header>

    <!-- 中间区域 -->
    <div class="subject">
      <!-- 左边图片区域 -->
      <div class="picture">
        <img src="@/assets/timg.jpg" alt />
        <div class="yinying"></div>
      </div>
      <!-- 中间图片区域 -->
      <div class="Sign-in">
        <div class="Sign-in-left">
          <router-link to="/">
            <div class="Sign-in-left1 texiao">
              <span class="icon iconfont">&#xe7c0;</span>
              <p>学生</p>
            </div>
          </router-link>

          <router-link to="/">
            <div class="Sign-in-left1">
              <span class="icon iconfont">&#xe640;</span>
              <p>我是讲师</p>
            </div>
          </router-link>

          <router-link to="/">
            <div class="Sign-in-left3">
              <span class="icon iconfont">&#xe602;</span>
              <p>我是HR</p>
            </div>
          </router-link>
        </div>

        <div class="Sign-in-right">
          <div class="Sign-in-right1">
            <div class="Sign-in-right11">
              <router-link to="/">
                <div class="Sign-in-right111">账号登录</div>
              </router-link>
              <router-link to="/loginwxdl">
                <div class="Sign-in-right112">微信登录</div>
              </router-link>
            </div>
          </div>
          <div class="Sign-in-right2">
            <input type="text" class="new-kuangkuang" placeholder="手机号" />
            <input type="text" class="new-kuangkuang1" placeholder="密码" />
          </div>
          <div class="Sign-in-right3">打开微信，扫描二维码</div>
          <div class="Sign-in-right4">
            <div class="Sign-in-right41">没有账户？ 请</div>
            <router-link to="/loginsjzc">
              <div class="Sign-in-right42">注册</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}
li {
  list-style: none;
}
body {
  background-color: #fff;
  /* margin: 0 auto; */
}

/* -----------reset style end -------- */
.wrapper {
  width: 900px;
  height: 90px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
}

/* ------- 表头区域 ------- */

.logo {
  /* z-index: 5; */
  /* width: 244px;
    height: 46px; */
  float: left;
  /* margin-left: 10%; */
  overflow: hidden;
}
.logo a {
  line-height: 140px;
}

.navigator {
  float: left;
  overflow: hidden;
}
.navigator1 {
  width: 450px;
  height: 91px;
  margin: 0 auto;
}
.nav-item {
  text-align: center;
  width: 75px;
  height: 85px;
  display: inline-block;
  margin-left: 10px;
  line-height: 90px;
}
.nav-item:hover {
  border-bottom: 3px solid rgb(155, 198, 4);
}
.nav-item a {
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 17px;
}

.login {
  float: right;
}
.login a {
  padding: 0px 15px;
  text-decoration: none;
  line-height: 90px;
  color: rgb(168, 168, 168);
}
.login a:hover {
  color: rgb(255, 156, 84);
}
.login span {
  color: rgb(168, 168, 168);
  margin: 0 auto;
}

/* ---------左边图片区域--------- */
.subject {
  position: relative;
  left: 0px;
  top: 0px;
  margin: 0 auto;
  width: 1295px;
  height: 730px;
  background-color: rgb(249, 249, 249);
}
.picture {
  position: relative;
  width: 460px;
  height: 730px;
  background-color: rgba(128, 255, 0, 0.308);
}
.picture img {
  position: absolute;
  top: 0px;
  left: 0px;
  /* float: left; */
  width: 460px;
  height: 730px;
  z-index: 10;
}
.yinying {
  position: absolute;
  width: 460px;
  height: 730px;
  background-color: rgba(0, 0, 0, 0.363);
  z-index: 11;
}
/* -------------中间登录区域------------ */

.Sign-in {
  margin: 0 auto;
  position: absolute;
  border-radius: 15px;
  top: 100px;
  left: 359px;
  z-index: 12;
  width: 575px;
  height: 415px;
  border: 1px solid rgba(0, 0, 0, 0.568);
  /* background-color: burlywood; */
}
.Sign-in-left {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  width: 100px;
  height: 415px;
  background-color: rgba(32, 36, 33, 0.87);
}
.Sign-in-left1 {
  font-size: 20px;
  text-align: center;
  width: 100px;
  height: 103px;
}
.Sign-in-left1 span {
  position: relative;
  top: 15px;
  padding-top: 20px;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.822);
}
.Sign-in-left1 p {
  margin-top: 20px;

  color: rgba(255, 255, 255, 0.822);
}

.Sign-in-left3 {
  font-size: 20px;
  text-align: center;
  width: 100px;
  height: 209px;
}
.Sign-in-left3 span {
  position: relative;
  top: 70px;
  padding-top: 20px;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.822);
}
.Sign-in-left3 p {
  line-height: 130px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.822);
}
.Sign-in-left3:hover {
  border-bottom-left-radius: 15px;
  background-color: rgb(155, 198, 4);
}
.Sign-in-left1:hover {
  background-color: rgb(155, 198, 4);
}
.texiao:hover {
  background-color: rgb(155, 198, 4);
  border-top-left-radius: 15px;
}

.Sign-in-right {
  position: absolute;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  top: 0px;
  right: 0px;
  width: 475px;
  height: 415px;
  background-color: white;
}
.Sign-in-right1 {
  border-top-right-radius: 15px;
  width: 475px;
  height: 90px;
  /* background-color: red; */
}
.Sign-in-right11 {
  /* border-top-right-radius: 15px; */
  width: 360px;
  height: 50px;
  padding-top: 10px;
  margin: 0 auto;
  /* background-color: pink; */
}
.Sign-in-right111 {
  display: inline-block;
  width: 170px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.Sign-in-right112 {
  display: inline-block;
  line-height: 50px;
  width: 170px;
  height: 50px;
  text-align: center;
}
.Sign-in-right111:hover {
  border-bottom: 3px solid rgb(155, 198, 4);
}
.Sign-in-right112:hover {
  border-bottom: 3px solid rgb(155, 198, 4);
}

.Sign-in-right2 {
  padding-top: 20px;
  width: 145px;
  height: 145px;
  margin: 0 auto;
}
.Sign-in-right2 img {
  /* padding-top: 20px; */
  width: 145px;
  height: 145px;
  margin: 0 auto;
}
.new-kuangkuang {
  position: absolute;
  left: 70px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  width: 365px;
  height: 30px;
  border-bottom: 1px solid gray;
}
.new-kuangkuang1 {
  position: absolute;
  top: 200px;
  left: 70px;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  width: 365px;
  height: 30px;
  border-bottom: 1px solid gray;
}

.Sign-in-right3 {
  margin-top: 20px;
  text-align: center;
  color: gray;
}
.Sign-in-right4 {
  /* display: inline-block; */
  text-align: center;
}
.Sign-in-right41 {
  margin-top: 30px;
  /* margin: 0 auto; */
  display: inline-block;
}
.Sign-in-right42 {
  /* margin: 0 auto; */
  color: rgb(155, 198, 4);
  display: inline-block;
}
</style>