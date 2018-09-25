<template>
  <div>
    <el-form :model="formData"   label-width="100px" class="form">
      <el-form-item label="轮播图标题"  class="item" >
        <el-input v-model="formData.title" class="input" ></el-input>
      </el-form-item>
      <el-form-item label="轮播图书籍" >
        <el-select v-model="formData.category" @change="categoryChange">
          <el-option  v-for="(item, index) in categoryData"
                  :key="index"
                  :label="item.title"

                  :value="item._id"
          >
          </el-option>
        </el-select>
        <div class="book-item" v-if="getBook[0]">
          <div class="img-wrap">
            <img :src="getBook[0].img" >
          </div>
          <div class="about">
            <div class="title">
               <h3>标题：{{getBook[0].title}}</h3>
            </div>
            <div class="author">
                <h3>作者：{{getBook[0].author}}</h3>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="轮播图头图" >
        <upLoad v-model="formData.img">
        </upLoad>
      </el-form-item>
      <el-form-item label="轮播图排序" >
        <el-input-number v-model="formData.index" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item  >
        <el-button type="primary" size="small" @click="handleSave" v-if="$route.name == 'editSwiper'">保存修改</el-button>
        <el-button type="primary" size="small" @click="handleSubmit" v-else>提交</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="书籍列表" :visible.sync="isShow">
      <el-table :data="bookData" >
        <el-table-column property="title" label="书名" width="150"></el-table-column>
        <!--column 纵列-->
        <el-table-column  label="书籍头图" width="200">
          <template slot-scope="scope">
            <img :src="scope.row.img" style="width:80px">
          </template>
        </el-table-column>
        <el-table-column property="author" label="作者"></el-table-column>
         <el-table-column  label="操作">
           <template slot-scope="scope"
           >

              <el-button type="primary" size="small" @click="handleAddBook(scope.row._id)" >添加</el-button>

           </template>
         </el-table-column>
      </el-table>
    </el-dialog>

  </div>

</template>

<script>
  import upLoad from '@/components/upload';
    export default {
        name: "index",
        components:{
          upLoad
        },
        data(){
          return {
            formData:{
              title:'',
              img:'',
              book:'',
              index:'',
              category:''

            },
             categoryData:[],
             bookData:[],
             bookCount:0,
             isShow:false


          }
        },
        methods:{
          getCategory(){
            this.$axios.get('/category').then(res=>{
              if(res.code=200){
                console.log(res);
                this.categoryData=res.data;
              }
            })
          },
         async getBookData(){
           const res = await this.$axios.get(`/category/${this.formData.category}/books`)
                console.log(res);
                this.bookData=res.data.books;
                this.bookCount=res.count;
          },
         categoryChange(){
               this.isShow=true;
               this.getBookData();
          },
          handleAddBook(id){
            this.isShow=false;
            this.formData.book=id;
          },
          handleSubmit(){
            //提交之前的检验数据是否齐全
            let isSubmit=true;
            for(let key in this.formData){
              if(this.formData[key]==''){
                isSubmit=false;
              }
            }
            if(isSubmit){
              this.$axios.post('/swiper',this.formData).then(res=>{
                if(res.code==200){
                  this.$message.success('成功添加轮播图');
                  this.$router.push({name:'swiper'});
                }
              })
            }else{
              this.$message.error('缺少必要信息');
            }
          },
          handleSave(){
            this.$axios.put(`/swiper/${this.$route.query.id}`,this.formData).then(res=>{
              if(res.code==200){
                this.$message.success("成功修改轮播图");
                this.$router.push({name:'swiper'});


              }
            })
          },
          getInitData(){
            this.$axios.get(`/swiper/${this.$route.query.id}`).then(
              res=>{
                if(res.code==200){
                  console.log(res);
                  this.formData={
                    ...this.formData,
                    ...res.data,
                    book:res.data.book._id,
                    category:res.data.book.type
                  }
                  this.getBookData();
                }
              }
            )


          }
        },
      computed:{
          getBook(){
            if(this.formData.book) {
              return this.bookData.filter(item =>
                item._id == this.formData.book
              )
            }else{
              return []
            }

          }
      },

      created(){
        this.getCategory();
        if(this.$route.name=='addSwiper'){
          this.formData={
            title:'',
            img:'',
            book:'',
            index:'',
            category:''
          }
        }else{
          this.getInitData();
        }

      }
    }
</script>


<style scoped>
  .form .item .input{
    width:250px;
  }
  .form .book-item{
    margin-top:20px;
    width:400px;
    height:160px;
    padding:20px;
    display:flex;
    justify-content:space-between;
    border:2px solid #0000ff;

  }

  .form .book-item .img-wrap img{
    width:170px;
    height:160px;
    margin-right:20px;
  }


</style>
