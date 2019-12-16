<template>
  <div class="box">
    <div class="box-big">
      <div class="box-one">
        <div class="box-one-left">
          <div class="box-one-left1">
            <img src="../assets/tu.jpg" alt />
          </div>
        </div>
        <div class="box-one-left2">
          <div class="box-one-lefto">
            <span class="box-one-lefto1">罗密欧</span>
            <span class="icon iconfont male">&#xe610;</span>
          </div>
          <div class="box-one-leftt">
            <span class="box-one-leftt0">信息完整度</span>
            <div class="box-one-leftt1"></div>
            <span class="box-one-leftt2">高</span>
          </div>
          <div class="box-one-lefts">
            <span class="icon iconfont yanse">&#xe65f;</span>
            <span class="icon iconfont male">&#xe694;</span>
            <span class="icon iconfont male">&#xe641;</span>
          </div>
        </div>

        <!--  -->
        <div class="box-two">
          <div class="box-two-left">
            <div class="box-two-lefto">申請提現</div>
          </div>
          <div class="box-two-right">
            <div class="box-two-right1">賬戶餘額</div>
            <span class="box-two-right2">248</span>
            <span class="box-two-right3">元</span>
          </div>
        </div>
        <!--  -->
        <div class="box-zuixia">

          <div class="box-zuixia0">
            <div class="box-zuixia01">
              <span class="icon iconfont">&#xe722;</span>
            </div>
            <div class="box-zuixia02">
              <span class="icon iconfont">&#xe614;</span>
            </div>
          </div>
          <div class="box-zuihou11 disin">實名認證</div>
          <div class="box-zuihou12 disin yanse">【未認證】</div>
          <div class="box-zuihou13 disin">资质认证</div>
          <div class="box-zuihou14 disin yanse">【未認證】</div>
        </div>

        <!--  -->
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
.box{
  width: 450px;
  background-color: rgb(244, 244, 244);
}
.box-big {
  margin: 0 auto;
  width: 450px;
  height: 550px;
  padding-bottom: 20px;
  background-color: rgb(244, 244, 244);
}
.box-one {
  margin-top: 10px;
  display: inline-block;
  width: 450px;
  height: 150px;
  background-color: rgb(255, 255, 255);
}
.box-one-left {
  display: inline-block;
  width: 150px;
  height: 150px;
}
.box-one-left1 {
  margin-left: 20%;
  margin-top: 20%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.box-one-left1 img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.box-one-left2 {
  display: inline-block;
  width: 300px;
  height: 120px;
}
.box-one-lefto {
  width: 300px;
}
.male {
  margin-left: 10px;
}
.yanse {
  color: rgba(0, 0, 255, 0.473);
}
.box-one-lefto1 {
  font-weight: bolder;
  font-size: 18px;
}
.box-one-leftt {
  padding-top: 10px;
  padding-bottom: 10px;
}
.box-one-leftt0 {
  font-size: 16px;
  color: rgb(102, 102, 102);
}
.box-one-leftt1 {
  margin-left: 10px;
  margin-right: 5px;
  /* padding-left: 10px; */
  display: inline-block;
  height: 10px;
  width: 120px;
  background-color: rgba(0, 0, 255, 0.473);
  border-radius: 20px;
}
.box-one-leftt2 {
  font-size: 14px;
  color: rgba(0, 0, 255, 0.473);
}

.box-two {
  margin-top: 5px;
  height: 115px;
  width: 450px;
  background-color: rgb(255, 255, 255);
}
.box-two-left {
  display: inline-block;
  width: 225px;
  height: 115px;
}
.box-two-right {
  float: right;
  width: 225px;
  height: 115px;
}
.box-two-right1 {
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 15px;
  font-size: 19px;
}
.box-two-right2 {
  padding-right: 5px;
  padding-left: 20px;
  font-size: 25px;
}
.box-two-lefto {
  float: left;
  text-align: center;
  line-height: 35px;
  margin-left: 15%;
  margin-top: 15%;
  border-radius: 20px;
  width: 165px;
  height: 35px;
  background-color: rgb(0, 170, 255);
}
.box-zuixia {
  margin-top: 5px;
  width: 450px;
  height: 265px;
  background-color: rgb(255, 255, 255);
}
.box-zuixia0 {
  line-height: 120px;
  margin: 0 auto;
  width: 370px;
  height: 120px;
  /* background-color: red; */
  padding-top: 60px;
  padding-bottom: 20px;
}
.box-zuixia01 {
  float: left;
  width: 170px;
  height: 120px;
  background-color: rgb(248, 248, 248);
}
.box-zuixia01 span {
  font-size: 90px;
  margin-left: 20%;
  color: rgb(0, 170, 255);
}
.box-zuixia02 {
  float: right;
  width: 170px;
  height: 120px;
  background-color: rgb(248, 248, 248);
}
.box-zuixia02 span {
  font-size: 90px;
  margin-left: 20%;
  color: rgb(0, 170, 255);
}
.box-zuihou11{
  margin-left: 60px;
}
.box-zuihou13{
  margin-left: 60px;
}
.disin{
  /* margin-left: 20px; */
  display: inline-block;
}
.yanse{
  color: rgb(218, 78, 35);
}
</style>
