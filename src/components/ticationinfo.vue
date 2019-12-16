<template>
  <div class="ticationinfo">
    <div class="ticationinfo-left">
      <div class="cationin-shang">
        <div class="cationin-shang0">
          <router-link to="/">
            <img src="../assets/上传图片.jpg" alt class="cationin-shang01" />
          </router-link>
          <router-link to="/">
            <img src="../assets/上传图片.jpg" alt class="cationin-shang01" />
          </router-link>
        </div>
        <div class="cationin-shang1 sfzzfd">身份证（正面）</div>
        <div class="cationin-shang1 sfzys">【未认证】</div>
        <div class="cationin-shang1 sfzzfd">身份证（正面）</div>
        <div class="cationin-shang1 sfzys">【未认证】</div>
        <div class="cationin-shang2">真实上传身份证信息（正反面）</div>
        <div class="cationin-shang2">照片要四角对其，如有模糊，反光，太暗，遮挡，不予认证</div>
      </div>

      <div class="cationin-xia">
        <router-link to="/">
          <img src="../assets/上传图片.jpg" alt class="cationin-shang001" />
        </router-link>
        <div class="cationin-shang10 sfzzfd1">身份证（正面）</div>
        <div class="cationin-shang10 sfzys">【未认证】</div>
        <div class="cationin-shang20">真实上传身份证信息（正反面）</div>
        <div class="cationin-shang20">照片要四角对其，如有模糊，反光，太暗，遮挡，不予认证</div>
      </div>
    </div>

    <div class="ticationinfo-right">
      <div class="ticationinfo-right1">
        <div class="ticationinfo-right2">个人简介</div>
        <router-link to="">
        <span class="icon iconfont rzdbianji">&#xe608;编辑</span>
        </router-link>
      </div>
      <div class="ticationinfo-right3">
        青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。
        故不登高山，不知天之高也；不临深溪，不知地之厚也；不闻先王之遗言，不知学问之大也。干、越、夷、貉之子，生而同声，长而异俗，教使之然也。诗曰：“嗟尔君子，无恒安息。靖共尔位，好是正直。神之听之，介尔景福。”神莫大于化道，福莫长于无祸。（此段教材无）
        吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。登高而招，臂非加长也，而见者远；顺风而呼，声非加疾也，而闻者彰。假舆马者，非利足也，而致千里；假舟楫者，非能水也，而绝江河。君子生非异也，善假于物也。
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>

<style>
.ticationinfo {
  margin-top: 20px;
  float: right;
  /* background-color:rgb(244, 244, 244); */
  width: 800px;
  height: 520px;
}
.ticationinfo-left {
  float: left;
  /* display: inline-block; */
  width: 400px;
  height: 520px;
  /* background-color: aquamarine; */
}
.ticationinfo-right {
  margin-left: 2px;
  display: inline-block;
  width: 398px;
  height: 520px;
  background-color: white;
  /* background-color: aquamarine; */
}
.cationin-shang {
  background-color: white;
  width: 400px;
  height: 260px;
}
.cationin-xia {
  background-color: white;
  margin-top: 2px;
  width: 400px;
  height: 258px;
}

.cationin-shang01 {
  padding-top: 30px;
  padding-left: 30px;
  width: 155px;
  height: 110px;
}
.cationin-shang1 {
  display: inline-block;
  font-size: 12px;
}
.sfzys {
  color: red;
}
.sfzzfd {
  margin-left: 40px;
}
.cationin-shang2 {
  color: rgb(204, 204, 204);
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}

.cationin-shang001 {
  padding-top: 20px;
  /* padding-top: 30px; */
  /* padding-left: 30px; */
  display: block;
  margin: 0 auto;
  width: 155px;
  height: 110px;
}

.cationin-shang10 {
  display: inline-block;
  /* text-align: center; */
  /* margin-left: 20%; */
  /* margin: 0 auto; */
  font-size: 12px;
}
.sfzzfd1 {
  margin-top: 20px;
  margin-left: 130px;
}

.cationin-shang20 {
  color: rgb(204, 204, 204);
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}
.ticationinfo-right1 {
  width: 398px;
  height: 40px;
  /* background-color: pink; */
}
.ticationinfo-right2 {
  display: inline-block;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 20px;
}
.rzdbianji {
  float: right;
  padding-top: 20px;
  padding-right: 20px;
  color: rgb(0, 170, 255);
}
.ticationinfo-right3 {
  padding-top: 40px;
  margin: 0 auto;
  width: 320px;
  height: 400px;
  color: gray;
  font-size: 15px;
  /* background-color: pink; */
}



</style>