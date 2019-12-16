<template>
  <div class="manageme">
    <div class="manageme0">
      <router-link to>
        <div class="manageme01">
          <div class="manageme011 marginlee"></div>
          <div class="manageme01120" style="margin-right: 15px;">全部</div>
        </div>
      </router-link>
      <router-link to>
        <div class="manageme01">
          <div class="manageme011 marginlee"></div>
          <div class="manageme01120">待处理</div>
        </div>
      </router-link>
      <router-link to="">
      <div class="manageme010">我要提问</div>
      </router-link>
    </div>
    <div class="manageme1">
      <div class="manage0">中午在凡客打客服电话退货了，下午可以到吗？我在北京</div>
      <div class="manage1">提问时间：3月23日 15：24</div>
      <div class="manage1">回答：0 | 191人看过</div>

      <div class="manageme4">查看并处理</div>
    </div>

    <div class="manageme1">
      <div class="manage0">想买电脑，不懂，求大神指导 3000-5000价位</div>
      <div class="manage1">提问时间：3月23日 15：24</div>
      <div class="manage1">回答：0 | 191人看过</div>
      <div class="manageme4" style="color:gray">删除问题</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.manageme {
  margin-top: 20px;
  float: right;
  width: 800px;
  height: 520px;
}

.manageme0 {
  width: 800px;
  height: 90px;
  background-color: white;
}
.manageme011 {
  width: 20px;
  height: 20px;
  border: 2px solid gray;
  /* background-color: pink; */
  display: inline-block;
  border-radius: 50%;
}
.manageme01120 {
  position: absolute;
  right: 50px;
  top: 0px;
  display: inline-block;
  margin-left: 10px;
}
.manageme010 {
  text-align: center;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.945);
  border-radius: 5px;
  float: right;
  margin-top: 35px;
  margin-right: 60px;
  overflow: hidden;
  /* display: inline-block; */
  width: 145px;
  height: 30px;
  background-color: rgb(0, 170, 255);
}
.marginlee {
  margin-left: 30px;
}
.manageme01 {
  display: inline-block;
  position: relative;
  width: 170px;
  height: 40px;
  margin-top: 35px;
}

.manageme1 {
  width: 800px;
  height: 211px;
  background-color: white;
  margin-top: 3px;
}

.manageme2 {
  width: 200px;
  height: 100px;
  display: inline-block;
  margin-left: 20px;
  /* padding-bottom: 30px; */
}
.manageme3 {
  display: inline-block;
}
.manageme4 {
  color: rgb(0, 170, 255);
  font-size: 15px;
  float: right;
  overflow: hidden;
  width: 145px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-right: 60px;
  margin-top: 60px;
  border: 2px solid rgba(128, 128, 128, 0.384);
  border-radius: 20px;
}
.manage0 {
  margin-left: 30px;
  padding-top: 30px;
  font-size: 19px;
}
.manage1 {
  display: inline-block;
  margin-top: 20px;
  color: rgba(128, 128, 128, 0.699);
  margin-left: 30px;
}
</style>