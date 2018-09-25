<template>
  <div class="layout">
    <div class="header">
      <h1>云书后台管理系统</h1>
    </div>
    <div class="nav">
      <el-menu

        class="el-menu-vertical-demo menu"
        background-color="#252525"
        text-color="#fff"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">用户管理</template>

            <el-menu-item index="/layout/index">首页</el-menu-item>
            <el-menu-item index="/layout/addUser">添加用户</el-menu-item>
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>
            <el-menu-item index="/layout/users">用户管理</el-menu-item>
            <el-menu-item index="/layout/upload">组件测试</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="用户列表">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>图书管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">图书管理</template>
            <el-menu-item index="/layout/addBook">添加图书</el-menu-item>
            <el-menu-item index="/layout/swiper">轮播图列表</el-menu-item>
            <el-menu-item index="/layout/addSwiper">添加轮播图</el-menu-item>
            <!--<el-menu-item index="/layout/addUser">添加用户</el-menu-item>-->
            <!--<el-menu-item index="/login">登录</el-menu-item>-->
            <!--<el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>-->
            <!--<el-menu-item index="/layout/users">用户管理</el-menu-item>-->
            <!--<el-menu-item index="/layout/upload">组件测试</el-menu-item>-->
          </el-menu-item-group>

          <el-menu-item-group title="用户列表">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">图书管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

    export default {
        name: "layout"
    }
</script>
<style>

 .nav .menu {
    border-right:none;
  }
</style>

<style scoped>

  .layout .header{
    margin-left:200px;
    height:100px;
    line-height:100px;
    font-weight:bolder;
    text-align:center;
    border-bottom:1px solid #f1f1f1;

  }
  .layout .nav{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  width:200px;
  background:rgb(30,30,30);
    overflow:hidden;

  }

  .layout .main-content{
    margin-left:200px;
    padding:10px;
  }
  .layout .nav .menu{
   margin-top:100px;
  }
</style>
