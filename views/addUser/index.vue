<template>
  <div>
    <h1>添加管理员</h1>
    <div class="form-wrap">
      <el-form :model="formData" size="small" label-width="80px" label-position="left" class="form">
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="formData.reconfirm"></el-input>
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
          <el-button @click="handleSubmit" type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
    import upload from '@/components/upload';
    export default {
        name: "index",
        components:{
          upload
        },
      data(){
          return{
            formData:{
              username:'',
              password:'',
              reconfirm:'',
              nickname:'',
              email:'',
              avatar:'',
              desc:''
            }
          }
      },

      methods:{
        upLoadSuccess(){

        },
        getData(){
          this.$axios.post('/user',this.formData).then( res=>{
            if(res.code==200){
              console.log(res.data);
            }

          })


        },
        handleSubmit(){
          if(this.formData.password != this.formData.reconfirm){
            this.$message.error('两次输入的密码不一致');
          }else{
            this.getData();
            this.$message.success('添加成功');
            this.$router.push('/layout/users');
          }
        }

      }
    }
</script>

<style scoped>
  .form-wrap{
    width:500px;
  }
  .form-wrap .form el-form-item{
    margin-top:30px;
  }
  .form-wrap .form el-form-item el-input{
    margin-left:20px;
  }
</style>
