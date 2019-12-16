<template>
    <div class="index">

        <!-- 头部区域 -->
        <header class="wrapper">
            <div class="logo">
                <a href="#"><img src="../assets/e.jpg" alt="网站logo"></a>
            </div>
            <div class="login">
                <a href="javascripts:return false;">登录</a>
                <span>|</span>
                <a href="javascripts:return false;">注册</a>
            </div>

        </header>






    </div>
</template>

<script>
    export default {
        name: 'index'
    }
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
    text-decoration: none;

}
li{
    list-style: none;
}
body{
    background-color: #fff;
    /* margin: 0 auto; */
}

.wrapper{
    width: 900px;
    height: 90px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
}

.logo{
    float: left;
    overflow: hidden;
}
.logo a {
    line-height: 140px;
}
.navigator{
    float: left;
    overflow: hidden;
}
.navigator1{
    width: 450px;
    height: 91px;
    margin: 0 auto;
}
.nav-item{
    text-align: center;
    width: 75px;  
    height: 85px;
    display: inline-block;
    margin-left: 10px;
    line-height: 90px;
}
.nav-item:hover{
    border-bottom: 3px solid rgb(155, 198, 4);
}
.nav-item a{
    text-align: center;
    color: black;
    font-weight: bold;
    font-size:17px;
}
.login{
    float: right;
}
.login a{
    padding:0px 15px;
    text-decoration: none;
    line-height: 90px;
    color: rgb(168, 168, 168);
}
.login a:hover{
    color: rgb(255, 156, 84);
}
.login span{
    color: rgb(168, 168, 168);
    margin: 0 auto;
}




</style>