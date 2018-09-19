<template>
  <div class="container">
    <h1 class="title">欢迎来到云书后台管理系统</h1>
    <h2 id="h2" ref="title">标题</h2>
     <div class="login-box">
      <h1 class="login-box-title">登录</h1>
       <el-form ref="form" :model="form" label-width="80px" class="form" :rules="rules">
         <el-form-item label="用户名" prop="username">
           <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
         </el-form-item>
         <el-form-item label="密码" prop="password">
           <el-input v-model="form.password" placeholder="请输入密码" type="password" @keyup.enter.native="validateHandleLogin"></el-input>
         </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="handleLogin" class="login-btn" :loading="isLoading">登录</el-button>
         </el-form-item>
       </el-form>
     </div>
  </div>
</template>

<script>

    export default {
        name: "login",
      data(){
          const validatorUsername=(rule,value,callback)=>{
            if(!value){
              callback(new Error('用户名不对'))
            }else{
              callback();
            }
          };
          const validatorPassword=( rule,value,callback)=>{
            if(value&&value.length>=5){
              callback();
            }else{
              callback(new Error('用户密码不对'));
            }
          };
          return{
            form:{
              username:'',
              password:'',
            },
            rules:{
             username:[{validator:validatorUsername,trigger:'blur'}],
             password:[{validator:validatorPassword,trigger:'blur'}]
            },
            isLoading:false
          }
      },
      methods:{
          handleLogin(){
            this.isLoading=true;
            this.$axios.post('/login',this.form).then(res=>{
              console.log("hahah")
              console.log(res);
              if(res.code == 200){
                this.$message.success('登录成功');
                setTimeout(()=>{
                  this.$router.push('/layout/index');
                },2000)

              }else{
                this.$message.error(res.msg);
              }
              this.isLoading=false;
            }).catch(err=>{
              this.isLoading=false;
            })


          },
        validateHandleLogin(){
          this.$refs['form'].validate((valid) => {
            if (valid) {
             this.handleLogin();
            } else {

              return false;
            }
          });
        }
      },
      created(){

          this.$nextTick(()=>{
            let h2=this.$refs.title;
            console.log(h2);
          })

          let template={
            'template':'<h1>我是组件内容<h1>'
          }
      },
      mounted(){
          let h2=this.$refs.title;
          console.log(h2);
      }
    }
</script>

<style scoped >
  .container{
    overflow:hidden;
    /*溢出隐藏*/
    height:100vh;
    background:#545c64;


  }
  .container .title{
    margin-top:100px;
    text-align:center;
    color:#fff;
    font-weight:400;
  }
  .container .login-box{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:400px;
    height:300px;
    margin:auto auto;
    background:#fff;
    border: 2px solid #e8e8e8;
    border-radius:4px;
    /*边框的圆滑度*/
    overflow:hidden;
  }
  .container .login-box .login-box-title{
    text-align:center;
    margin-top:10px;
    font-weight:400;
  }
  .container .login-box .form{
    margin-top:10px;

  }

  .container .login-box .login-btn{
    width:100%;
    box-sizing:border-box;
  }

</style>
