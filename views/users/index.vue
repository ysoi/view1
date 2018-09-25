<template>
    <div class="user-manager">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="table">
        <el-table :data="tableData">
          <el-table-column
            prop="nickname"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="个性签名"
            width="180">
          </el-table-column>
            prop="email"
          <el-table-column
            label="邮箱"
            width="180"
          >
          </el-table-column>
          <el-table-column
            label="用户图像"
            width="200"
          >
            <template slot-scope="scope" >
              <img :src="scope.row.avatar" class="avatar">
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="300"
          >
            <template slot-scope="scope">
              <el-button @click="handleDetail" size="small" type="primary">查看详情</el-button>
              <el-button @click="handleDelete(scope.row._id)" size="small" type="danger" :id="scope.row._id">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="count"
          @current-change="changePage"
          :page-size="5"

        >

        </el-pagination>
      </div>

    </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          tableData: [],
          page:1,
          count:0
        }
      },

      methods: {
        getData() {
          this.$axios.get('/user',{pn:this.page,size:5}).then(res => {
            if(res.code==200){
              console.log(res);
              this.tableData = res.data;
              this.count=res.count;
            }

            }
          )
        },
        handleDetail() {
          this.$router.push("/layout/userDetail")
        },

        handleDelete(id) {
          this.$confirm('此操作将删除一名用户, 是否继续?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            this.$axios.post('/user/delete', {userIds: [id]}).then(res => {

              this.$message.success(res.msg);
              this.getData();

            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          })

        },
        changePage(page){
          this.page =page;
          this.getData();
        }
      },
      created() {
          this.getData();
      }


    }

</script>

<style scoped>
.user-manager .table .avatar{
  height:80px;
  width:80px;
}
</style>
