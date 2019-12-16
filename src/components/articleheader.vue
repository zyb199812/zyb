<template>
  <div class="articleheader">
    <div class="big-box">
      <div class="boxt">
        <div class="box-left">
          <img src="../assets/公共样式头部.jpg" alt />
        </div>

        <div class="box-right">
          <div class="box-right1">
            <img src="../assets/tu.jpg" alt />
          </div>
          <p class="box-right2">罗密欧 ﹀</p>
        </div>
      </div>
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
}
.big-box {
  width: 100%;
  background-color: rgb(51, 51, 51);
}
.boxt {
  width: 1200px;
  height: 40px;
  margin: 0 auto;
}
.box-left {
  float: left;
    width: 170px;

}
.box-left img {
  width: 170px;
  height: 36px;
}
.box-right {
  float: right;
  width: 200px;
  height: 40px;
}

.box-right1 {
  margin-left: 15px;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-top: 5px;
}
.box-right1 img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.box-right2 {
  float: right;
  margin-top: 10px;
  margin-right: 40px;
  overflow: hidden;
  color: white;
  font-size: 15px;
}
</style>

