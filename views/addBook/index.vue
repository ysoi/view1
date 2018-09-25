<template>
  <div>
    <el-form :model="formData" >
      <el-form-item label="链接"  >
          <el-input v-model="formData.url" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="作者" >
           <el-input v-model="formData.author" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="图书头图" >
        <el-switch
          v-model="isUpload"
          active-text="手动上传"
          inactive-text="头图网址">
        </el-switch>
        <upLoad v-model='formData.img' v-if="isUpload"></upLoad>
        <el-input v-model="formData.img" v-else ></el-input>

      </el-form-item>
      <el-form-item label="分类id" >
            <el-select v-model="formData.typeId">
              <el-option v-for="(item,index) in category"
                         :key="index"
                         :label="item.title"
                         :value="item._id"
              ></el-option>
            </el-select>
      </el-form-item>
      <el-button @click="handleSubmit" type="primary" size="small">提交</el-button>
    </el-form>

  </div>
</template>


<script>
  import upLoad from '@/components/upload'
    export default {
        name: "index",
        components:{
          upLoad
        },
        data(){
          return {
            formData: {
              url: '',
              author: '',
              img: '',
              typeId: ''
            },
            category:[],
            isUpload:false
          }
        },
        methods:{
          getCategory(){
            this.$axios.get('/category').then(res=>{
              if(res.code==200){
                console.log(res.data);
                this.category=res.data;
              }
            })
          },
          handleSubmit(){
            this.$axios.post('/book',this.formData).then(res=>{
              if(res.code == 200){
                console.log(res.data);
                this.$message.success(res.msg)
              }
            })
          }
        },
        created(){
          this.getCategory();
        }
    }
</script>

<style scoped>

</style>
