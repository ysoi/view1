<template>
  <div>
    <h1>轮播图列表</h1>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column

        label="轮播图头图"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.img" style="height:80px;width:100px" >

        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="轮播图标题"
        width="200">
      </el-table-column>
      <el-table-column

        label="图书头图"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.book.img" style="height:80px;width:100px" >

        </template>
      </el-table-column>
      <el-table-column
        prop="book.title"
        label="图书标题"
        width="200">
      </el-table-column>>
      <el-table-column
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="size"
      :total="count"
      @current-change="handleChange"

      >

    </el-pagination>
  </div>
</template>

<script>
    export default {
      name: "swiper",
      data(){
        return{
          tableData:[

          ],
          pn:1,
          count:0,
          size:5
        }
      },
      methods:{
        getData(){
          this.$axios.get('/swiper',{pn:this.pn,size:this.size}).then(res=>{
            if(res.code==200){
              console.log('hello');
              console.log(res.data);
              this.tableData=res.data;
              this.count=res.count;

            }
          })
        },
        handleChange(page){
          this.pn=page;
          console.log(this.pn);
          this.getData();
        },
        handleEdit(id){
         this.$router.push({name:'editSwiper',query:{id}});

        },
        handleDelete(id){
          this.$confirm('此操作将永久删除该轮播图, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.post('/swiper/delete',{ids:[id]}).then(res=>{
              if(res.code==200){
                this.$message.success(res.msg);
                this.getData();
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },


      },

      created(){
        this.getData();


      }

    }
</script>

<style scoped>

</style>
