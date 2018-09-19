<template>
  <label class="upload-wrap">
    <i class="el-icon-plus" v-if="!url"></i>
    <img :src="url" v-else  class="image">
    <input type="file" style="display:none" @change="handleImage">

  </label>


</template>

<script>
  import axios from "axios";
  export default {
    name: "upload",
    props:{
      value:{
        type:String
      }
    },
    data(){
      return {
        token:'',
        url:this.value

      }
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
          this.$emit('success',res.data.url);
          this.$emit('input',res.data.url);
          this.$emit('change',res.data.url);
        })

      }
    },
    watch:{
      value(val){
        this.url = val
      }
    },
    created(){
      this.getToken()
    }
  }
</script>

<style scoped>

  .upload-wrap {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    display:block;
    width:100px;
    height:100px;

    overflow: hidden;

  }

 .upload-wrap .el-icon-plus {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);

  }
  .upload-wrap .image{
    display:block;
    width:100%;
    height:100%;
  }
</style>
