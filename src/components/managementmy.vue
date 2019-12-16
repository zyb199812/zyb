<template>
  <div class="manageme">
    <div class="manageme0">
      <router-link to>
        <div class="manageme01">
          <div class="manageme011 marginlee"></div>
          <div class="manageme0112">已发布课程</div>
        </div>
      </router-link>

      <router-link to>
        <div class="manageme01">
          <div class="manageme011 marginlee"></div>
          <div class="manageme0112">审核中课程</div>
        </div>
      </router-link>
      <router-link to="/coursetwo">
        <div class="manageme01">
          <div class="manageme011"></div>
          <div class="manageme0112">未通过审核课程</div>
        </div>
      </router-link>
    </div>
    <div class="manageme1">
      <div class="manageme3">
        <img src="../assets/meinv.jpg" alt class="manageme10" />
      </div>
      <div class="manageme2">
        <div class="manageme21">显示你的实力-面试</div>
        <div class="manageme22">上传时间：3月23日 15：43</div>
        <div class="manageme23">失败原因：内容涉黄,请修改</div>
      </div>
      <div class="manageme4">修改课程</div>
    </div>

    <div class="manageme1">
      <div class="manageme3">
        <img src="../assets/meinv2.jpg" alt class="manageme10" />
      </div>
      <div class="manageme2">
        <div class="manageme21">微信微博新媒体课程</div>
        <div class="manageme22">上传时间：3月23日 15：43</div>
        <div class="manageme23">失败原因：内容涉黄,请修改</div>
      </div>
      <div class="manageme4">修改课程</div>
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
.manageme0112 {
  position: absolute;
  right: 30px;
  top: 0px;
  display: inline-block;
  margin-left: 10px;
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
.manageme10 {
  margin-left: 25px;
  margin-top: 40px;
  width: 170px;
  height: 100px;
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
.manageme21 {
  font-size: 19px;
  padding-bottom: 20px;
}
.manageme22 {
  padding-bottom: 20px;
  font-size: 16px;
  color: gray;
}
.manageme23 {
  width: 330px;
  font-size: 19px;
  color: rgb(0, 170, 255);
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
</style>