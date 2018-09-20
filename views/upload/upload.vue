<template>
  <div>
    <h1>上传表单测试页</h1>
    <h1>上传图片</h1>
    <form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data" >
      <input type="file" name="file">
      <br>
      <input type="text" name="token" v-model="token" >
      <br>
      <button>提交</button>

    </form>

    <!--axios上传图片-->
    <h1>axios上传图片测试</h1>

      <input type="file" name="file" @change="handleImage">
      <div>
        <img :src="url">

      </div>
      <h1>选择框的封装测试</h1>
       <div>
         <checkBox></checkBox>
       </div>


  </div>


</template>

<script>
  import axios from "axios";
  import checkBox from '@/components/checkBox';
    export default {
        name: "upload",
        data(){
          return {
            token:'',
            url:''

          }
        },
      components:{
          checkBox
      },
        methods:{
          getToken(){
            axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
              console.log(res);
              this.token=res.data.data;
            })
          },
          handleImage(event){
            console.log(event);
             let file=event.target.files[0];
             let formData=new FormData();
             console.log(formData);
             formData.append('file',file,file.name);
             formData.append('token',this.token);
             axios.post('https://upload-z1.qiniup.com',formData,{
             headers:{
               'Content-Type':'multipart/form-data',
             }
             }).then(res=>{
               console.log(res);
               this.url=res.data.url;
             })

          }
        },
        created(){
          this.getToken()
        }
    }
</script>

<style scoped>

</style>
