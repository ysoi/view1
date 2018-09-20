<template>
    <div>
      <h1>修改个人信息</h1>
      <div class="form-wrap">
        <el-form :model="formData" size="small" label-width="80px" label-position="left">
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
          <el-form-item>
            <el-button @click="handleClick" type="primary">保存更改</el-button>
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
              avatar:'',
              desc:''    ,
              email:''   ,
              nickname:'',
              username:'',
            }
          }
        },
      methods:{
          initData(){
            this.formData={
              ...this.$store.state.userInfo
            }
          },
        upLoadSuccess(){

        },
        //resfulAPI接口规范 put 修改数据
        handleClick(){
          this.$axios.put('/user/userInfo',this.formData).then(res=>{
            console.log(res);
            if(res.code==200){
              let userInfo=res.data;
              this.$store.commit('CHANGE_USERINFO',userInfo);
              this.initData();
              this.$message.success(res.msg);
            }
          })
        }
      },
      created(){
          this.initData()
      }
    }
</script>

<style scoped>
  .form-wrap{
    margin-top:20px;
    width:600px;
  }
</style>
