<template>
  <div class="myconent">
    <div class="myconent-zj">
      <div class="myconent-zj1">
        <router-link to="/homepage"><img src="../assets/mycenter.jpg" alt /></router-link>
      </div>
      <div class="myconent-zj2">
        <ul class="myconent-zj21">
          <router-link to="/homepage/mydexinxi/" class="myconent-zz">基本信息</router-link>
          <router-link to="/homepage/coursehome" class="myconent-zz">課程管理</router-link>
          <router-link to="/homepage/questionswenda" class="myconent-zz">我的問答</router-link>
          <router-link to="" class="myconent-zz">我的收入</router-link>
        </ul>
      </div>
      <div class="myconent-right">+添加課程</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}
.myconent {
  width: 100%;
  height: 90px;
  background-color: rgb(255, 255, 255);
  /* background-color: rgba(241, 25, 25, 0.158); */
}
.myconent-zj {
  width: 1200px;
  height: 90px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.199);
}
.myconent-zj1 {
  float: left;
  width: 150px;
  height: 90px;
  overflow: hidden;
  /* background-color: red; */
}

.myconent-zj1 img {
  /* float: left; */
  width: 150px;
  margin-top: 30px;
  /* line-height: 40px; */
  /* height: 90px; */
}
.myconent-zj2 {
  float: left;
  overflow: hidden;
  width: 615px;
  height: 90px;
  /* background-color: blueviolet; */
}
.myconent-zz{
  font-size: 17px;
  line-height: 80px;
  margin-left: 70px;
  display: inline-block;
}
.myconent-zj21 li:hover {
  color: rgb(25, 175, 255);
  border-bottom: 1px solid rgb(0, 175, 255);
}
.myconent-right {
  color: rgb(25, 175, 255);
  line-height: 35px;
  text-align: center;
  width: 165px;
  height: 35px;
  float: right;
  margin-top: 30px;
  border: 2px solid rgba(128, 128, 128, 0.39);
  border-radius: 20px;
}
</style>