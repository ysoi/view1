<template>
    <div>
      <h1>修改个人信息</h1>
      <div class="form-wrap">
        <el-form :model="formData" size="small" label-width="80px" >
          <el-form-item label="用户名">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="formData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" >
            <el-input v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item label="用户头像">
            <upload v-model="formData.avatar" @success="upLoadSuccess"></upload>
          </el-form-item>
          <el-form-item label="各性签名" >
            <el-input v-model="formData.desc"></el-input>
          </el-form-item>

        </el-form>
      </div>

    </div>
</template>

<script>
  import upload from '@/components/upload.vue';
    export default {
        name: "index",
        components:{
          upload
        },
        data(){
          return {
            formData:{
              username:'',
              nickname:'',
              email:'',
              avatar:'',
              desc:''
            }
          }
        }
    }
</script>

<style scoped>
  .form-wrap{
    margin-left:20px;
    width:600px;
  }
</style>
